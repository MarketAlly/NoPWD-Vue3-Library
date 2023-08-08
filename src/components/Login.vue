<script setup lang="ts">
import { onBeforeMount, ref, watch, watchEffect } from 'vue';
import { useAuthStore } from '@/store'
import { useI18n } from 'vue-i18n'
import { createPinia, setActivePinia, storeToRefs } from 'pinia'
import QRCodeVue3 from 'qrcode-vue3'
import Preloader from './Preloader.vue'
import { tryOnMounted, useStorage } from '@vueuse/core';

const { locale, t } = useI18n()
const store = useAuthStore()
const Auth = storeToRefs(store)
const showQRCode = ref(false)
const defaultLocale = useStorage('locale', 'en')
const QRCode = ref('')

onBeforeMount(() => {
    setActivePinia(createPinia())
})

tryOnMounted(() => {
  if (!store.IsLoggedIn) {
    store.loginQRCode()
  } else {
    store.checkQRLogin()
  }
  watchEffect(() => {
    if (Auth.success.value === true) {
      QRCode.value = Auth.QRCode.value
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
})

function clickHandler() {
    if (QRCode.value == undefined || QRCode.value == null || QRCode.value == '') {
        return
    }
    window.open(QRCode.value,'new_window');
}

watch(locale, () => {
  defaultLocale.value = locale.value
})

</script>

<template>
    <div>
        <div>
            <div style="text-align: center">
                <div @click="clickHandler" @click.prevent="clickHandler" target="_blank" v-if="store.success && !props.isMobileScreen" style="text-align: center; cursor: pointer;">
                    <QRCodeVue3
                        v-if="props.isDark"
                        :key="QRCode"
                        :width="300"
                        :height="300"
                        :value="QRCode"
                        :image="logoDark.length == 0 ? '/assets/nopwd_black.png' : ''"
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
                        :image="logoDark.length == 0 ? '/assets/nopwd_white.png' : ''"
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
                <div v-else-if="store.success && props.isMobileScreen" style="text-align: center">
                    <button v-if="showQRCode" 
                        style="width: 300px; height: 300px;"
                        :style="[props.isDark ? { backgroundColor: props.primaryDark, color: props.accentColor } : { backgroundColor: props.primaryLight, color: props.accentColor }]"
                        :href="QRCode"
                        >
                        <img width="150" :src="logoDark.length == 0 ? '/assets/nopwd_black.png' : ''" />
                        <br/><br/><span>{{ t('auth.login') }}</span>
                    </button>
                </div>
                <div v-else-if="!store.success" style="text-align: center">
                    <Preloader v-if="!store.is_error" width="300px" :disabled="false" :dark="props.isDark" height="300px"  />
                </div>
                <div v-html="store.Message" style="text-align: center"></div>
            </div>
        </div>
        <div v-if="store.success && !props.isMobileScreen && props.showButton" style="text-align: center">
            <br/>   
            <button v-if="showQRCode" 
                style="width: 300px; height: 120px;" 
                :style="[props.isDark ? { backgroundColor: props.primaryDark, color: props.accentColor } : { backgroundColor: props.primaryLight, color: props.accentColor }]"
                :href="QRCode"
                >
                <img width="80" :src="logoDark.length == 0 ? '/assets/nopwd_black.png' : ''" />
                <br/><span>{{ t('auth.appinstalled') }}</span>
            </button>
        </div>
    </div>
</template>