declare module 'vuex-electron' {
    import { Store } from 'vuex';
    import { IpcRenderer, IpcMain } from 'electron';

    interface PersistedStateOptions {
        whitelist: Array<string> | ((mutation: string) => boolean);
        blacklist: Array<string> | ((mutation: string) => boolean);
    }

    interface SharedMutationsOptions {
        type: "main" | "renderer";
        ipcRenderer: IpcRenderer;
        ipcMain: IpcMain
    }

    export const createPersistedState: (options?: Partial<PersistedStateOptions>) =>  (store: Store<any>) => void;
    export const createSharedMutations: (options?: Partial<SharedMutationsOptions>) =>  (store: Store<any>) => void;
}