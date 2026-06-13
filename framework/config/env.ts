import dotenv from 'dotenv';
import path from 'path';

// Cargar variables de entorno desde el archivo .env en la raíz
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const env = {
  BASE_URL: process.env.BASE_URL || 'http://localhost:8080',
  PORT: process.env.PORT || '8080',
  CI: process.env.CI === 'true',
  TRACE: (process.env.TRACE as any) || 'on-first-retry',
  RETRIES: parseInt(process.env.RETRIES || '0', 10),
  WORKERS: process.env.WORKERS === 'undefined' ? undefined : parseInt(process.env.WORKERS || '1', 10),
};
