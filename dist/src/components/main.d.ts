import type { App } from 'vue';
import useNoPWD from '../../src/store';
import { Login, Prelogin } from '../../src/components';
declare const NoPWDVue3Library: {
    install: (app: App) => void;
};
export default NoPWDVue3Library;
export { Login, Prelogin, useNoPWD };
