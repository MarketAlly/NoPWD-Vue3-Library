<script setup lang="ts">
import Login from './components/Login.vue'
</script>

<template>
  <div>
    <a href="https://www.nopwd.com" target="_blank">
      <img src="/assets/NOPWD.png" class="logo" alt="NoPWD logo" />
    </a>
  </div>
  <Login :isMobileScreen="false" configDev="https://localhost:7251/" :showButton="true" :isDark="true" secondary-dark="#242424" primary-dark="#ff0000" />
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
