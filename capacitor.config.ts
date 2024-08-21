import { CapacitorConfig } from '@capacitor/cli';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const isDemo = process.env.NODE_ENV === 'demo';

const config: CapacitorConfig = {
  appId: 'com.overreact.littlemartian',
  appName: 'Little Martian',
  webDir: isDemo ? 'dist-demo' : 'dist-full',
  server: {
    androidScheme: 'https'
  }
};

export default config;
