<script setup lang="ts">
import { onMounted, watchEffect, ref } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '10px',
  },
  mobileWidth: String,
  mobileHeight: String,
  disabled: Boolean,
  dark: Boolean,
});

const isDark = ref(props.dark ?? false)
const mobileWidthValue = ref(props.mobileWidth ?? props.width)
const mobileHeightValue = ref(props.mobileHeight ?? props.height)

const loader = ref<InstanceType<typeof HTMLDivElement> | null>(null)

onMounted(() => {
  watchEffect(() => {
    if (props.disabled) return
    if (loader.value !== null) {
      let duration = 1.5; // initial duration in seconds

      let speedUp = setInterval(function() {
        duration -= 0.1; // decrease duration by 0.1 seconds each time
        if (loader.value !== null) {
          loader.value.style.animationDuration = duration + 's';
        
          if (duration <= 0.8) { // stop speeding up when duration is 0.5 seconds
            clearInterval(speedUp);
          }        
        }
      }, 10000); // speed up every 10 seconds
    }
  });
})

</script>

<template>
  <div ref="loader"
    :class="[isDark && 'skeleton-loader_dark', !isDark && 'skeleton-loader']"
  ></div>
</template>

<style>

.skeleton-loader {
  width: v-bind('props.width');
  height: v-bind('props.height');
  display: block;
  background-color: #e0e0e0;
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 20%,
      rgba(255, 255, 255, 0.7) 50%,
      rgba(255, 255, 255, 0.4) 80%,
      rgba(255, 255, 255, 0) 100%
    );
  background-repeat: no-repeat;
  background-size: 200% 100%;
  animation: shine 1.5s infinite, flash-light 1s infinite;
  border-radius: 10px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
}

@keyframes shine {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

.skeleton-loader_dark {
  width: v-bind('props.width');
  height: v-bind('props.height');
  display: block;
  background-color: #282828;
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 20%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 80%,
      rgba(255, 255, 255, 0) 100%
    );
  background-repeat: no-repeat;
  background-size: 200% 100%;
  animation: shine 1.5s infinite, flash-dark 1s infinite;
  border-radius: 10px;
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1); /* This makes the animation speed up over time */
  border: 2px solid #282828;
  border-radius: 10px;
}

@keyframes flash-dark {
  25%, 75% {
    border-color: #4d4d4d;
  }
  0%, 50% {
    border-color: transparent;
  }
}

@keyframes flash-light {
  25%, 75% {
    border-color: #c1c0c0;
  }
  0%, 50% {
    border-color: transparent;
  }
}

@media (width <= 767px) {
  .skeleton-loader {
    width: v-bind(mobileWidthValue);
    height: v-bind(mobileHeightValue);
  }
  .skeleton-loader_dark {
    width: v-bind(mobileWidthValue);
    height: v-bind(mobileHeightValue);
  }
}
</style>
