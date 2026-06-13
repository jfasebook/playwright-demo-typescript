import { TestApp } from '#support/app/TestApp';

export type PageData = {
    nombre: string;
    abrir: (app: TestApp) => Promise<void>;
};
