import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.idle',
  appName: 'idle',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    'url': 'http://192.168.0.104:5173',
    "cleartext": true
  }
};

export default config;
