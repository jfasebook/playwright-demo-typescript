import { IDriver } from '#framework/engine/interfaces/IDriver';

export abstract class BaseComponent {
    constructor(protected driver: IDriver) {}
}