<script setup lang="ts">
import { computed, PropType, ref, watch, watchEffect } from 'vue';
import useNoPWD from '@/store'
import { useTranslations } from '../useTranslations';
import QRCodeVue3 from 'qrcode-vue3'
import Prelogin from './Prelogin.vue'
import { tryOnMounted, useStorage } from '@vueuse/core';

const { t } = useTranslations();
const emit = defineEmits<{
    (event: 'error', args: string): void;
    (event: 'redirect', args: string): void;
    (event: 'status', args: number): void;
    (event: 'user', args: string): void;
}>();

const internalEmitHandler = (event: string, payload: any) => {
    console.log('Raw event received:', event, payload)
    if (event === 'error') {
        emit('error', payload)
        if (props.errorLog) {
            console.log('Error event received with payload:', payload);
        }
    } else if (event === 'redirect') {
        emit('redirect', payload)
        if (props.errorLog) {
            console.log('Redirect event received with payload:', payload);
        }
    } else if (event === 'status') {
        emit('status', payload)
        if (props.errorLog) {
            console.log('Status event received with payload:', payload);
        }
    } else if (event === 'user') {
        emit('user', payload)
        if (props.errorLog) {
            console.log('User event received with payload:', payload);
        }
    }
}

const props = defineProps({
    instanceId: {
        type: String,
        default: ''
    },
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
    },
    errorLog: {
        type: Boolean,
        default: false,
    },
    enableCheck: {
        type: Boolean,
        default: false,
    },
    interval: {
        type: Number,
        default: 1000,
    },
    accessTimeout: {
        type: Number,
        default: 20000,
    },
    store: {
        type: Object as PropType<ReturnType<typeof useNoPWD>>,
        default: undefined
    }
})

const activeStore = props.store || useNoPWD(internalEmitHandler, props.instanceId)
const { auth, loginQRCode, checkQRLogin, success, IsDark, QRCode, Message, IDLogin, setBase, reset, readMessage, setUrls, setRoutes, is_error, setMounted, mounted } = activeStore;

const instanceId = computed(() => props.instanceId)
watch(instanceId, (id) => {
  console.log('Instance:', id, 'Auth:', auth.value)
})

watch(auth, (newAuth) => {
  console.log('Instance:', instanceId.value, 'Auth changed:', newAuth)
  emit('status', newAuth)
})

const showQRCode = ref(false)
const defaultLocale = useStorage('locale', 'en')

const DarkMode = computed(() => {
    IsDark.value = props.isDark
    if (success.value === true) {
        Message.value = readMessage()
    }
    return props.isDark
})

defineExpose({
    reset: activeStore.reset,
    setMounted: activeStore.setMounted,
});

import imageWhite from '@/assets/nopwd_white.png';
import imageBlack from '@/assets/nopwd_black.png';
import { Guid } from 'guid-typescript';

const acount = ref(0)

function resetTimeout() {
    if (!mounted.value) return;
    
    if (auth.value === -1) {
        acount.value++
        if (acount.value > 3) {
            reset()
            acount.value = 0
            return
        }
        setTimeout(resetTimeout, 500)
        return
    }
    
    success.value = false
    if (auth.value < 2 || IDLogin.value === Guid.create().toString()) {
        loginQRCode()
    } else {
        checkQRLogin()
    }
}

function refreshPage() {
  window.location.reload();
}

tryOnMounted(() => {
    if (!props.store) {  // Only initialize if not provided externally
        IsDark.value = props.isDark
        setBase(props.configDev, props.configProduction, props.region, props.errorLog, props.interval, props.accessTimeout)
        setRoutes(props.configApp, props.configLogin, props.enableCheck)
        setUrls(props.configRequest, props.configVerify, props.configConfirm, props.configLogout)
        setMounted(true)
        setTimeout(resetTimeout, 500)
    }
    watchEffect(() => {
        if (success.value === true) {
            showQRCode.value = true
        } else {
            showQRCode.value = false
        }
    })
})

watch(
  [
    () => props.configRequest,
    () => props.configVerify,
    () => props.configConfirm,
    () => props.configLogout
  ],
  ([newRequest, newVerify, newConfirm, newLogout]) => {
    setUrls(newRequest, newVerify, newConfirm, newLogout)
  }
)

watch(
  [
    () => props.configDev,
    () => props.configProduction,
    () => props.region,
    () => props.errorLog,
    () => props.interval,
    () => props.accessTimeout
  ],
  ([dev, prod, region, errorLog, interval, timeout]) => {
    setBase(dev, prod, region, errorLog, interval, timeout)
  }
)

watch(
  [
    () => props.configApp,
    () => props.configLogin,
    () => props.enableCheck
  ],
  ([app, login, check]) => {
    setRoutes(app, login, check)
  }
)

watch(
  () => props.instanceId,
  (newId) => {
    const store = useNoPWD(internalEmitHandler, newId);
    auth.value = store.auth.value;
    success.value = store.success.value;
    IsDark.value = store.IsDark.value;
    QRCode.value = store.QRCode.value;
    Message.value = store.Message.value;
    IDLogin.value = store.IDLogin.value;
    is_error.value = store.is_error.value;
    setBase(props.configDev, props.configProduction, props.region, props.errorLog, props.interval, props.accessTimeout);
    setRoutes(props.configApp, props.configLogin, props.enableCheck);
    setUrls(props.configRequest, props.configVerify, props.configConfirm, props.configLogout);
  }
)

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
                <div v-if="!mounted" style="text-align: center; width:300px; height: 300px;" class="flex items-center justify-center">
                    <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <i class="fas fa-power-off text-6xl text-gray-400 dark:text-gray-600 mb-4"></i>
                        <p class="text-gray-600 dark:text-gray-400">{{ t('auth.notmounted') }}</p>
                    </div>
                </div>
                <div :title="t('auth.codelight')" @click="clickHandler" @click.prevent="clickHandler" target="_blank" v-else-if="success && !props.isMobileScreen" style="text-align: center; cursor: pointer;">
                    <QRCodeVue3
                        v-if="DarkMode"
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
                    <div @click="refreshPage" @click.prevent="refreshPage" v-if="is_error" style="width:300px;height:300px; align-items: middle;cursor: pointer;">
                        <i class="fas fa-unlink" style="font-size: 155px;color:red; padding:10px; padding-top: 60px; vertical-align: middle;" aria-hidden="true"></i>
                    </div>
                    <Prelogin width="300px" v-if="!is_error" :disabled="false" :dark="DarkMode" :mounted="mounted" height="300px"/>
                </div>
                <div v-if="((success && !props.isMobileScreen) || !success) && !hideText" v-html="Message" style="text-align: center"></div>
            </div>
        </div>
    </div>
</template>