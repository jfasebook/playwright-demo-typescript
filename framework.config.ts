import { UserFrameworkConfig } from '#framework/config/interfaces';

const config: UserFrameworkConfig = {
  baseUrl: 'http://localhost:3000',
  timeout: 45000,
  retries: 2,
  // Aquí el usuario puede añadir override de proyectos, reportes, etc.
};

export default config;
