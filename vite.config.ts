import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/pcatplus_zhipu/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.ZHIPU_API_KEY || '3b8de6a8f8044c94a9d1d8aebb951131.katyI652XfEWrFN8'),
        'process.env.ZHIPU_API_KEY': JSON.stringify(env.ZHIPU_API_KEY || '3b8de6a8f8044c94a9d1d8aebb951131.katyI652XfEWrFN8')
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
