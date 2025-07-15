namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
    NEXT_PUBLIC_GTM_ID: string;
  }
}
