# NoPWD Vue3 Library 

Easy NoPWD Authentication Library for Vue3

NoPWD is a powerful, easy-to-use library for incorporating NoPWD based login functionality into your Vue 3 applications.

## 🚀 Features

- Generate QR codes for login to to the [NoPWD System](www.nopwd.com platform)
- Scan QR codes and return access
- Secure, encrypted data transmission
- Compatible with Vue3 environments

## 🔧 Installation

Install NoPWD with npm:

```bash
npm install @marketally/nopwd-vue3-library
```

## 🎈 Usage

Here's a basic example of how to use

```javascript
import { createApp } from 'vue'
import App from './App.vue'

import plugin from '@marketally/nopwd-vue3-library'

createApp(App)
  .use(plugin)
  .mount('#app')

<template>
  <Login />
</template>

```

## 📃 License
NoPWD is licensed under the MIT License.

## 🎯 Support
If you need help or have any questions, please open an issue on our GitHub page.

## 🎉 About Us
NoPWD is maintained by [@MarketAlly](https://github.com/MarketAlly). We are a team of passionate developers dedicated to creating useful, high-quality software.
