<script setup lang="ts">
import Login from './components/Login.vue'
import image from '@/assets/NOPWD.png';
import useNoPWD from './store';
import { ref, watch } from 'vue';

const store = useNoPWD()

const IsDark = ref(false)

function flipIt() {
  IsDark.value = !IsDark.value
}

watch(store.auth, () => {
    if (store.auth.value === 2) {
      let dave = store.user_data.value
    } else if (store.auth.value === 0) {

    }
})

</script>

<template>
  <div>
    <a href="https://www.nopwd.com" target="_blank">
      <img :src="image" class="logo" alt="NoPWD logo" />
    </a>
  </div>
  <Login :isMobileScreen="false" config-production="https://nopwd.azurewebsites.net/" configDev="https://nopwd.azurewebsites.net/" :isDark="IsDark" secondary-dark="#242424" primary-dark="#ff0000" />
  <button @click="flipIt()">Flip</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #7e7f9eaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #648a79aa);
}
</style>
