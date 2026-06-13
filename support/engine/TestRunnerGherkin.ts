import { createBdd } from 'playwright-bdd';
import { test as frameworkTest } from './TestRunner';

export const test = frameworkTest;
export const { Given, When, Then } = createBdd(test);
