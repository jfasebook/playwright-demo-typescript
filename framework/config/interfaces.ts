export interface FrameworkConfig {
  baseUrl?: string;
  timeout?: number;
  retries?: number;
  workers?: number;
  reporter?: string;
  trace?: 'on' | 'off' | 'on-first-retry' | 'retain-on-failure';
  headless?: boolean;
  projects?: {
    name: string;
    use?: any;
  }[];
}

export type UserFrameworkConfig = Partial<FrameworkConfig>;
