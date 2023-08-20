<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import useNoPWD from '@/store'
import { useTranslations } from '../useTranslations';
import QRCodeVue3 from 'qrcode-vue3'
import Preloader from './Preloader.vue'
import { tryOnMounted, useStorage } from '@vueuse/core';

const emit = defineEmits<{
    (event: 'Error', args: string): void;
    (event: 'Redirect', args: string): void;
    (event: 'Status', args: number): void;
    (event: 'User', args: string): void;
}>();

const internalEmitHandler = (event: string, payload: any) => {
    if (event === 'Error') {
        emit('Error', payload)
        console.log('Error event received with payload:', payload);
    } else if (event === 'Redirect') {
        emit('Redirect', payload)
        console.log('Redirect event received with payload:', payload);
    } else if (event === 'Status') {
        emit('Status', payload)
        console.log('Status event received with payload:', payload);
    } else if (event === 'User') {
        emit('User', payload)
        console.log('User event received with payload:', payload);
    }
}

const { t } = useTranslations();
const { auth, loginQRCode, checkQRLogin, success, QRCode, is_error, Message, IDLogin, setBase, setUrls, setRoutes } = useNoPWD(internalEmitHandler);
const showQRCode = ref(false)
const defaultLocale = useStorage('locale', 'en')

import imageWhite from '@/assets/nopwd_white.png';
import imageBlack from '@/assets/nopwd_black.png';
import { Guid } from 'guid-typescript';

tryOnMounted(() => {
    setBase(props.configDev, props.configProduction)
    setRoutes(props.configApp, props.configLogin)
    setUrls(props.configRequest, props.configVerify, props.configConfirm, props.configLogout)
    if (auth.value < 2 || IDLogin.value === Guid.create().toString()) {
        loginQRCode()
    } else {
        checkQRLogin()
    }
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
    showButton: {
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
                <div @click="clickHandler" @click.prevent="clickHandler" target="_blank" v-if="success && !props.isMobileScreen" style="text-align: center; cursor: pointer;">
                    <QRCodeVue3
                        v-if="props.isDark"
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
                        v-if="!props.isDark"
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
                        :style="[props.isDark ? { backgroundColor: props.primaryDark, color: props.accentColor } : { backgroundColor: props.primaryLight, color: props.accentColor }]"
                        :href="QRCode"
                        >
                        <img width="150" :src="logoDark.length == 0 ? imageBlack : ''" />
                        <br/><br/><span>{{ t('auth.login') }}</span>
                    </button>
                </div>
                <div v-else-if="!success" style="text-align: center">
                    <Preloader width="300px" :disabled="false" :dark="props.isDark" height="300px"  />
                </div>
                <div v-html="Message" style="text-align: center"></div>
            </div>
        </div>
        <div v-if="success && !props.isMobileScreen && props.showButton" style="text-align: center">
            <br/>   
            <button v-if="showQRCode" 
                style="width: 300px; height: 120px;" 
                :style="[props.isDark ? { backgroundColor: props.primaryDark, color: props.accentColor } : { backgroundColor: props.primaryLight, color: props.accentColor }]"
                :href="QRCode"
                >
                <img width="80" :src="logoDark.length == 0 ? imageBlack : ''" />
                <br/><span>{{ t('auth.appinstalled') }}</span>
            </button>
        </div>
    </div>
</template>