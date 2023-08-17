import { type INoPWDStore } from './interface';
type EmitType = {
    (event: 'Error', args: string): void;
    (event: 'Redirect', args: string): void;
    (event: 'Status', args: number): void;
};
export default function useNoPWD(emit: EmitType | undefined): INoPWDStore;
export {};
