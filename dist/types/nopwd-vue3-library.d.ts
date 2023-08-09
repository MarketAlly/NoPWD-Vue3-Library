// nopwd-vue3-library.d.ts
import { type INoPWDStore } from '../interface'
import { App, Component } from 'vue';

// Assuming useNoPWD is a custom composition function, you can define its return type here
export function useNoPWD(): INoPWDStore; // Replace 'any' with the actual type

// Define types for components
export const Login: Component;
export const Preloader: Component;

// Define the main export type
export interface NopwdVue3Library {
  install: (app: App) => void;
}

declare const NopwdVue3Library: NopwdVue3Library;

export default NopwdVue3Library;
