import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import { playwrightBaseConfig } from '#framework/config/playwrightBridge';

// Configuración de BDD
const bddConfig = defineBddConfig({
  paths: ['tests/features/*.feature'],
  steps: ['support/steps/*.steps.ts', 'support/engine/TestRunnerGherkin.ts'],
  outputDir: '.features-gen',
});

export default defineConfig(playwrightBaseConfig, {
  // Sobrescribimos o añadimos configuraciones específicas para el soporte dual
  projects: [
    // Proyecto para los Specs tradicionales
    {
      name: 'specs',
      testDir: 'tests/specs',
      use: { ...devices['Desktop Chrome'] },
    },
    // Proyecto para los tests Gherkin
    {
      name: 'gherkin',
      testDir: '.features-gen',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

