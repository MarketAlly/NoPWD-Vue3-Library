import { type INoPWDStore } from './interface';
type EmitType = {
    (event: 'Error', args: string): void;
    (event: 'Redirect', args: string): void;
    (event: 'Status', args: number): void;
    (event: 'User', args: string): void;
};
export default function useNoPWD(emit?: EmitType | undefined): INoPWDStore;
export {};
