<template>
    <div>
        <div>
            <div style="text-align: center">
                <div v-if="store.success && !isMobileScreen" style="text-align: center">
                    <QRCodeVue3
                        v-if="DarkIt"
                        :key="QRCode"
                        :width="300"
                        :height="300"
                        :value="QRCode"
                        image="/images/logoWhiteSmall.png"
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
                        color: '#c48a56',
                        gradient: {
                            type: 'linear',
                            rotation: 0,
                            colorStops: [
                            { offset: 0, color: '#c48a56' },
                            { offset: 1, color: '#c48a56' },
                            ],
                        },
                        }"
                        :background-options="{ color: '#18181b' }"
                        :corners-square-options="{ type: 'dot', color: '#ffffff' }"
                        :corners-dot-options="{ type: undefined, color: '#ffffff' }"
                        :download="false"
                    />
                    <QRCodeVue3
                    v-if="!DarkIt"
                    :key="QRCode"
                    :width="300"
                    :height="300"
                    :value="QRCode"
                    image="/images/logoBlackSmall.png"
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
                        color: '#606C38',
                        gradient: {
                        type: 'linear',
                        rotation: 0,
                        colorStops: [
                            { offset: 0, color: '#606C38' },
                            { offset: 1, color: '#606C38' },
                        ],
                        },
                    }"
                    :background-options="{ color: '#ffffff' }"
                    :corners-square-options="{ type: 'dot', color: '#000000' }"
                    :corners-dot-options="{ type: undefined, color: '#000000' }"
                    :download="false"
                    />
                </div>
                <div v-else-if="store.success && isMobileScreen" style="text-align: center">
                    <!-- <button v-if="showQRCode" 
                    style="width: 300px; height: 300px;"
                    :href="QRCode"
                    color="primary"
                    role="menuitem"
                    raised
                    >
                        <img width="150" src="/images/logoWhiteSmall.png" />
                        <br/><br/><span>Click to Login</span>
                    </VButton> -->
                </div>
                <div v-else-if="!store.success" style="text-align: center">
                    <!-- <VPlaceload width="300px" height="300px"  /> -->
                </div>
                {{ store.Message }}
            </div>
        </div>
        <div v-if="store.success && !isMobileScreen" style="text-align: center">
            <br/>   
            <button class="button-2" role="button">Button 2</button> 
            <!-- <Button v-if="showQRCode" 
                style="width: 300px; height: 120px;"
                :href="QRCode"
                color="primary"
                role="menuitem"
                raised
                >
                    <img width="80" src="/images/logoWhiteSmall.png" />
                    <br/><br/><span>App installed locally? Click here</span>
                </Button> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/store'
import { storeToRefs } from 'pinia'
import QRCodeVue3 from 'qrcode-vue3'

const props = defineProps({
    isMobileScreen: {
        type: Boolean,
        default: false
    },
    SignupURL: {
        type: String,
        default: 'No description provided',
    },
})

const store = useAuthStore()
const Auth = storeToRefs(store)
const showQRCode = ref(false)
const QRCode = ref('')
const DarkIt = ref(false)
</script>

<style>

.button-2 {
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
</style>