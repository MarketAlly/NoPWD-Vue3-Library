import type { App } from 'vue';
import useNoPWD from '../../src/store'
import { Login, Prelogin } from '../../src/components';

const NoPWDVue3Library = {
  install: (app: App) => {
    app.component('Login', Login);
    app.component('Prelogin', Prelogin);
  },
};

export default NoPWDVue3Library;
export { Login, Prelogin, useNoPWD };
