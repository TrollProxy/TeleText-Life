import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.teletext.life',
  appName: 'TeleText-Life',
  webDir: 'dist',
  server: { androidScheme: 'https' }
};

export default config;
