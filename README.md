# NoPWD Vue3 Library 

Easy NoPWD Authentication Library for Vue3.

NoPWD is a powerful, easy-to-use library for incorporating NoPWD based login functionality into your Vue 3 applications. It primarily focuses on leveraging QR codes for seamless and secure passwordless authentication.

## 🚀 Features

- **QR Code Integration**: Generate and display QR codes for login to the [NoPWD System](http://www.nopwd.com) platform.
- **Responsive**: Adaptable display for various screen sizes, including mobile screens.
- **Custom Theming**: Configurable themes for light and dark modes.
- **Event Emitters**: Emit events for errors, redirections, and authentication status updates.
- **Encrypted Data Transmission**: Securely handle data with encryption.
- **Vue3 Compatible**: Designed specifically for Vue 3 environments.

## 🔧 Installation

Install NoPWD with npm:

```bash
npm install @marketally/nopwd-vue3-library
```

## 🎈 Usage

To use the NoPWD Vue3 component in your project, follow the steps below:

1. **Importing and Global Registration**:

```javascript
import Vue from 'vue';
import NopwdVue3Library from '@marketally/nopwd-vue3-library';

Vue.use(NopwdVue3Library);
```

2. **Using the Component**:

```vue
<template>
  <NoPWD 
    :isMobileScreen="true"
    :showButton="true"
    :isDark="false"
    primaryDark="#c48a56"
    secondaryDark="#18181b"
    logoDark="path_to_dark_logo.png"
  />
</template>
```

3. **Listening to Events**:

You can also listen to events emitted by the component, such as `Error`, `Redirect`, and `Status` to handle different scenarios in the authentication process.

## 📃 License

NoPWD is licensed under the MIT License.

## 🎯 Support

If you need help or have any questions, please open an issue on our [GitHub page](https://github.com/MarketAlly/nopwd-vue3-library/issues).

## 🎉 About Us

NoPWD is maintained by [@MarketAlly](https://github.com/MarketAlly). We are a team of passionate developers dedicated to creating useful, high-quality software.