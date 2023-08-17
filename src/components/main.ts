import type { App } from 'vue';
import useNoPWD from '@/store'
import { Login, Preloader } from '@/components';

const NoPWDVue3Library = {
  install: (app: App) => {
    app.component('Login', Login);
    app.component('Preloader', Preloader);
  },
};

export default NoPWDVue3Library;
export { Login, Preloader, useNoPWD };
