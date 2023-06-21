import { WebPlugin } from '@capacitor/core'
import type { IosRemoteNotificationsPlugin } from './definitions'

// eslint-disable-next-line import/prefer-default-export
export class IosRemoteNotificationsImpl
  extends WebPlugin
  implements IosRemoteNotificationsPlugin {}
