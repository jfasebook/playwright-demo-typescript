import { TestApp } from '#tests/app/TestApp';

export type PageData = {
    nombre: string;
    abrir: (app: TestApp) => Promise<void>;
};
