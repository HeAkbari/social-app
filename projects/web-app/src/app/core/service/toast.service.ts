import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ToastService {

  constructor(private toastServcie: ToastrService) {}
  successNotify(message: string, option?: NotificationOption) {
    this.toastServcie.success(message)
  }
  warningNotify(message: string, option?: NotificationOption) {
    this.toastServcie.warning(message)    }
  errorNotify(message: string, option?: NotificationOption) {
    this.toastServcie.error(message)   }
}

export interface AppNotificationData extends NotificationOption {
  message: string;
  classes: string[];
  icon: string;
}
export interface NotificationOption {
  timeOut?: number;
  extra?: string | (() => void);
  messageDetail?: string;
}
export enum NotificationType {
  info,
  success,
  warning,
  danger,
}

