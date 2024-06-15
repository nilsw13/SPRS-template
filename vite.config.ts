import { UserConfigFn } from 'vite';
import { overrideVaadinConfig } from './vite.generated';
import path from "path";

const customConfig: UserConfigFn = (env) => ({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/main/frontend'),
        },
    },
});

export default overrideVaadinConfig(customConfig);

