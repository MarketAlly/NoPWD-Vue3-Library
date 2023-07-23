import type { App } from 'vue';
import { HelloWorld, MyButton, Login } from "@/components";

export default {
  install: (app: App) => {
    app.component('HelloWorld', HelloWorld);
    app.component('MyButton', MyButton);
    app.component('Login', Login);
  }
};

export { HelloWorld, MyButton };
