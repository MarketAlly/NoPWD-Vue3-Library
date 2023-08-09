import type { App } from 'vue';
import useNoPWD from '../store';
import { Login, Preloader } from '../components';
declare const NopwdVue3Library: {
    install: (app: App) => void;
};
export default NopwdVue3Library;
export { Login, Preloader, useNoPWD };
