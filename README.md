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

1. **Using the Component**:

```vue
<script setup>
import Login from '@marketally/nopwd-vue3-library';
</script>

<template>
  <Login 
    :isMobileScreen="true"
    :showButton="true"
    :isDark="false"
    primaryDark="#c48a56"
    secondaryDark="#18181b"
    logoDark="path_to_dark_logo.png"
  />
</template>
```

2. **Listening to Events**:

You can also listen to events emitted by the component, such as `Error`, `Redirect`, and `Status` to handle different scenarios in the authentication process.

## 📖 Documentation

| Property          | Type     | Default Value | Description                                                                                                                                                          |
|-------------------|----------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `isMobileScreen`  | Boolean  | `false`      | Determines if the screen size is mobile.                                                                                                                             |
| `showButton`      | Boolean  | `false`      | Determines if a button should be displayed below the QR code.                                                                                                        |
| `primaryDark`     | String   | `#c48a56`    | Primary dark color theme.                                                                                                                                            |
| `primaryLight`    | String   | `#606C38`    | Primary light color theme.                                                                                                                                           |
| `secondaryDark`   | String   | `#18181b`    | Secondary dark color theme.                                                                                                                                          |
| `secondaryLight`  | String   | `#ffffff`    | Secondary light color theme.                                                                                                                                         |
| `isDark`          | Boolean  | `false`      | Determines if dark mode is active.                                                                                                                                   |
| `positionLight`   | String   | `#000000`    | Light color for QR code position markers.                                                                                                                            |
| `positionDark`    | String   | `#ffffff`    | Dark color for QR code position markers.                                                                                                                             |
| `accentColor`     | String   | `#ffffff`    | Accent color for various UI elements.                                                                                                                                |
| `logoDark`        | String   | `''`         | URL for the dark-themed logo.                                                                                                                                        |
| `logoLight`       | String   | `''`         | URL for the light-themed logo.                                                                                                                                       |
| `configDev`       | String   | `''`         | Configuration URL for the development environment. (e.g. http://localhost:3000)                                                                                          |
| `configProduction`| String   | `''`         | Configuration URL for the production environment. (e.g. https://www.yoursite.com)                                                                                           |
| `configApp`       | String   | `''`         | App configuration URL. (e.g. '/app')                                                                                                                      |
| `configLogin`     | String   | `''`         | Login configuration URL. (e.g. '/auth/login')                                                                                                                    |
| `configRequest`   | String   | `''`         | Request configuration URL. This is used to request the code from your service which contacts the NoPWD system.                                                                                                                  |
| `configVerify`    | String   | `''`         | Verify configuration URL. Calls your service to verify the status of the request                                                                                                                   |
| `configConfirm`   | String   | `''`         | Confirmation configuration URL. oOnfirms the access is still valid                                                                                                             |
| `configLogout`    | String   | `''`         | Logout configuration URL. THe service call to your service whethr to log the user out.                                                                                                                   |

Each property can be easily customized to fit the design and functionality needs of your application. Adjust the defaults as necessary to achieve your desired look and behavior.

## 📃 License

NoPWD is licensed under the MIT License.

## 🎯 Support

If you need help or have any questions, please open an issue on our [GitHub page](https://github.com/MarketAlly/nopwd-vue3-library/issues).

## 🎉 About Us

NoPWD is maintained by [@MarketAlly](https://github.com/MarketAlly). We are a team of passionate developers dedicated to creating useful, high-quality software.