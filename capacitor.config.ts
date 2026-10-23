import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.newgoal.game',
  appName: 'NewGoal',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;


