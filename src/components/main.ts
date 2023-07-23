import type { App } from 'vue';
import { Login, Preloader } from "@/components";

export default {
  install: (app: App) => {
    app.component('Login', Login);
    app.component('Preloader', Preloader);
  }
};

export { Login, Preloader };
