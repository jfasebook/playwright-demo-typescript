import { env } from './env';
import { FrameworkConfig, UserFrameworkConfig } from './interfaces';
import path from 'path';
import fs from 'fs';

export class ConfigurationLoader {
  private static readonly DEFAULT_CONFIG: FrameworkConfig = {
    baseUrl: env.BASE_URL,
    timeout: 30000,
    retries: env.RETRIES,
    workers: env.WORKERS,
    reporter: 'html',
    trace: env.TRACE as any,
    headless: true,
  };

  public static load(): FrameworkConfig {
    const userConfig = this.loadUserConfig();
    
    return {
      ...this.DEFAULT_CONFIG,
      ...userConfig,
    };
  }

  private static loadUserConfig(): UserFrameworkConfig {
    const configPath = path.resolve(process.cwd(), 'framework.config.ts');
    
    if (fs.existsSync(configPath)) {
      try {
        // En un entorno CJS/TS-Node, Playwright maneja las extensiones .ts al importar
        const config = require(configPath);
        return config.default || config;
      } catch (error) {
        console.warn(`Could not load framework.config.ts: ${error}`);
      }
    }
    
    return {};
  }
}
