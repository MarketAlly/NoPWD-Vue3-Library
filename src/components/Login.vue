<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import useNoPWD from '@/store'
import { useTranslations } from '../useTranslations';
import QRCodeVue3 from 'qrcode-vue3'
import Prelogin from './Prelogin.vue'
import { tryOnMounted, useStorage } from '@vueuse/core';

const emit = defineEmits<{
    (event: 'error', args: string): void;
    (event: 'redirect', args: string): void;
    (event: 'status', args: number): void;
    (event: 'user', args: string): void;
}>();

const internalEmitHandler = (event: string, payload: any) => {
    if (event === 'error') {
        emit('error', payload)
        console.log('Error event received with payload:', payload);
    } else if (event === 'redirect') {
        emit('redirect', payload)
        console.log('Redirect event received with payload:', payload);
    } else if (event === 'status') {
        emit('status', payload)
        console.log('Status event received with payload:', payload);
    } else if (event === 'user') {
        emit('user', payload)
        console.log('User event received with payload:', payload);
    }
}

const { t } = useTranslations();
const { auth, loginQRCode, checkQRLogin, success, IsDark, QRCode, Message, IDLogin, setBase, readMessage, setUrls, setRoutes } = useNoPWD(internalEmitHandler);
const showQRCode = ref(false)
const defaultLocale = useStorage('locale', 'en')

const DarkMode = computed(() => {
    IsDark.value = props.isDark
    if (success.value === true) {
        Message.value = readMessage()
    }
    return props.isDark
})

import imageWhite from '@/assets/nopwd_white.png';
import imageBlack from '@/assets/nopwd_black.png';
import { Guid } from 'guid-typescript';

const acount = ref(0)

function resetTimeout() {
    success.value = false
    if (auth.value < 2 || IDLogin.value === Guid.create().toString()) {
        loginQRCode()
    } else {
        checkQRLogin()
    }
    if (auth.value === -1) {
        acount.value++
        if (acount.value > 3)
            auth.value = 0;
        setTimeout(resetTimeout, 500)
    }
}

tryOnMounted(() => {
    IsDark.value = props.isDark
    setBase(props.configDev, props.configProduction, props.region)
    setRoutes(props.configApp, props.configLogin)
    setUrls(props.configRequest, props.configVerify, props.configConfirm, props.configLogout)
    setTimeout(resetTimeout, 500)
    watchEffect(() => {
        if (success.value === true) {
            showQRCode.value = true
        } else {
            showQRCode.value = false
        }
    })
})

const props = defineProps({
    isMobileScreen: {
        type: Boolean,
        default: false
    },
    primaryDark: {
        type: String,
        default: '#c48a56',
    },
    primaryLight: {
        type: String,
        default: '#606C38',
    },
    secondaryDark: {
        type: String,
        default: '#18181b',
    },
    secondaryLight: {
        type: String,
        default: '#ffffff',
    },
    hideText: {
        type: Boolean,
        default: false,
    },
    isDark: {
        type: Boolean,
        default: false,
    },
    positionLight: {
        type: String,
        default: '#000000',
    },
    positionDark: {
        type: String,
        default: '#ffffff',
    },
    accentColor: {
        type: String,
        default: '#ffffff',
    },
    logoDark: {
        type: String,
        default: '',
    },
    logoLight: {
        type: String,
        default: '',
    },
    configDev: {
        type: String,
        default: '',
    },
    configProduction: {
        type: String,
        default: '',
    },
    configApp: {
        type: String,
        default: '',
    },
    configLogin: {
        type: String,
        default: '',
    },
    configRequest: {
        type: String,
        default: '',
    },
    configVerify: {
        type: String,
        default: '',
    },
    configConfirm: {
        type: String,
        default: '',
    },
    configLogout: {
        type: String,
        default: '',
    },
    region: {
        type: Number,
        default: 1,
    }
})

function clickHandler() {
    if (QRCode.value == undefined || QRCode.value == null || QRCode.value == '') {
        return
    }
    window.open(QRCode.value,'new_window');
}

</script>

<template>
    <div>
        <div>
            <div style="text-align: center">
                <div :title="t('auth.codelight')" @click="clickHandler" @click.prevent="clickHandler" target="_blank" v-if="success && !props.isMobileScreen" style="text-align: center; cursor: pointer;">
                    <QRCodeVue3
                        v-if="DarkMode"
                        :key="QRCode"
                        :width="300"
                        :height="300"
                        :value="QRCode"
                        :image="logoDark.length == 0 ? imageBlack : ''"
                        :qr-options="{
                            typeNumber: 0,
                            mode: 'Byte',
                            errorCorrectionLevel: 'H',
                        }"
                        :image-options="{
                            hideBackgroundDots: true,
                            imageSize: 0.3,
                            margin: 10,
                        }"
                        :dots-options="{
                            type: 'dots',
                            color: props.primaryDark,
                            gradient: {
                                type: 'linear',
                                rotation: 0,
                                colorStops: [
                                { offset: 0, color: props.primaryDark },
                                { offset: 1, color: props.primaryDark },
                                ],
                            },
                        }"
                        :background-options="{ color: props.secondaryDark }"
                        :corners-square-options="{ type: 'dot', color: props.positionDark }"
                        :corners-dot-options="{ type: undefined, color: props.positionDark }"
                        :download="false"
                    />
                    <QRCodeVue3
                        v-if="!DarkMode"
                        :key="QRCode"
                        :width="300"
                        :height="300"
                        :value="QRCode"
                        :image="logoDark.length == 0 ? imageWhite : ''"
                        :qr-options="{
                            typeNumber: 0,
                            mode: 'Byte',
                            errorCorrectionLevel: 'H',
                        }"
                        :image-options="{
                            hideBackgroundDots: true,
                            imageSize: 0.3,
                            margin: 10,
                        }"
                        :dots-options="{
                            type: 'dots',
                            color: props.primaryLight,
                            gradient: {
                            type: 'linear',
                            rotation: 0,
                            colorStops: [
                                { offset: 0, color: props.primaryLight },
                                { offset: 1, color: props.primaryLight },
                            ],
                            },
                        }"
                        :background-options="{ color: props.secondaryLight }"
                        :corners-square-options="{ type: 'dot', color: props.positionLight }"
                        :corners-dot-options="{ type: undefined, color: props.positionLight }"
                        :download="false"
                    />
                </div>
                <div v-else-if="success && props.isMobileScreen" style="text-align: center">
                    <button v-if="showQRCode" 
                        style="width: 300px; height: 300px;"
                        :style="[DarkMode ? { backgroundColor: props.primaryDark, color: props.accentColor } : { backgroundColor: props.primaryLight, color: props.accentColor }]"
                        @click="clickHandler" @click.prevent="clickHandler"
                        >
                        <img width="150" :src="logoDark.length == 0 ? imageBlack : ''" />
                        <br/><br/><span v-if="!hideText">{{ t('auth.login') }}</span>
                    </button>
                </div>
                <div v-else style="text-align: center; width:300px; height: 300px;">
                    <Prelogin width="300px" :disabled="false" :dark="DarkMode" height="300px"/>
                </div>
                <div v-if="((success && !props.isMobileScreen) || !success) && !hideText" v-html="Message" style="text-align: center"></div>
            </div>
        </div>
    </div>
</template>