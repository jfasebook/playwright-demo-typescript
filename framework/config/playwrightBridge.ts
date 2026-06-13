import { defineConfig, devices } from '@playwright/test';
import { ConfigurationLoader } from './loader';
import path from 'path';

const frameworkConfig = ConfigurationLoader.load();

export const playwrightBaseConfig = defineConfig({
  testDir: path.resolve(__dirname, '../../tests'),
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: frameworkConfig.retries,
  workers: frameworkConfig.workers,
  reporter: frameworkConfig.reporter as any,
  use: {
    baseURL: frameworkConfig.baseUrl,
    trace: frameworkConfig.trace,
    headless: frameworkConfig.headless,
  },
  timeout: frameworkConfig.timeout,

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run serve',
    url: frameworkConfig.baseUrl,
    reuseExistingServer: !process.env.CI,
  },

  projects: frameworkConfig.projects || [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
