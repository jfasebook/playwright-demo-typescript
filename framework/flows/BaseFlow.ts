import { TestApp } from '#support/app/TestApp';

export abstract class BaseFlow {
    constructor(protected readonly app: TestApp) {}
}
