import type { App } from 'vue';
import useNoPWD from '../store';
import { Login, Preloader } from '../components';
declare const NoPWDVue3Library: {
    install: (app: App) => void;
};
export default NoPWDVue3Library;
export { Login, Preloader, useNoPWD };
