import { type INoPWDStore } from './interface';
type EmitType = {
    (event: 'error', args: string): void;
    (event: 'redirect', args: string): void;
    (event: 'status', args: number): void;
    (event: 'user', args: string): void;
};
export default function useNoPWD(emit?: EmitType | undefined): INoPWDStore;
export {};
