import { TestApp } from '#tests/app/TestApp';

export abstract class BaseFlow {
    constructor(protected readonly app: TestApp) {}
}
