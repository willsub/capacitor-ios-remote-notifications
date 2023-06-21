import { registerPlugin } from '@capacitor/core'
import type { IosRemoteNotificationsPlugin } from './definitions'

const proxy = registerPlugin<IosRemoteNotificationsPlugin>(
  'IosRemoteNotifications',
  {
    web: async () =>
      import('./plugin').then(
        (module) => new module.IosRemoteNotificationsImpl()
      ),
    ios: async () =>
      import('./plugin').then(
        (module) => new module.IosRemoteNotificationsImpl()
      ),
    android: async () =>
      import('./plugin').then(
        (module) => new module.IosRemoteNotificationsImpl()
      ),
  }
)

export { proxy as IosRemoteNotifications }
export * from './definitions'
