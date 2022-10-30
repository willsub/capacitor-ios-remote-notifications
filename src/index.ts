import { registerPlugin } from '@capacitor/core';
import { IosRemoteNotificationsPlugin } from './definitions';

export const IosRemoteNotifications = registerPlugin<IosRemoteNotificationsPlugin>('IosRemoteNotifications', {
  web: async () => {
    import('./plugin').then((module) => new module.IosRemoteNotificationsImpl());
  },
  ios: async () => {
    import('./plugin').then((module) => new module.IosRemoteNotificationsImpl());
  },
  android: async () => {
    import('./plugin').then((module) => new module.IosRemoteNotificationsImpl());
  },
});

export * from './definitions';
