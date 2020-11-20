import Capacitor

@objc(IosRemoteNotifications)
public class IosRemoteNotifications: CAPPlugin {
  public override func load() {
    NotificationCenter.default.addObserver(self, selector: #selector(self.handleDataMessage(notification:)), name: Notification.Name("onRemoteMessage"), object: nil)
  }

  @objc func handleDataMessage( notification: NSNotification) {
    let userInfo: [AnyHashable : Any]
    userInfo = notification.object as! [AnyHashable : Any]
    self.notifyListeners("onRemoteNotification", data: ["data":userInfo])
  }
}
