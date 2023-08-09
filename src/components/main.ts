import type { App } from 'vue';
import useNoPWD from '@/store'
import { Login, Preloader } from '@/components';

const NopwdVue3Library = {
  install: (app: App) => {
    app.component('Login', Login);
    app.component('Preloader', Preloader);
  },
};

export default NopwdVue3Library;
export { Login, Preloader, useNoPWD };
