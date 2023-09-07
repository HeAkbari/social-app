import { ApplicationRef, Injectable } from '@angular/core';
import {
  SwUpdate,
  VersionDetectedEvent,
  VersionEvent,
} from '@angular/service-worker';
import {
  BehaviorSubject,
  catchError,
  first,
  interval,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { ToastService } from '../../core/service/toast.service';

@Injectable({
  providedIn: 'root',
})
export class SWService {
  private newVersionSubject = new BehaviorSubject<boolean>(false);
  public newVersionAvailable$ = this.newVersionSubject.asObservable();

  constructor(
    private appRef: ApplicationRef,
    private swUpdate: SwUpdate,
    private toastService: ToastService
  ) {
    console.log('SWService is created');
    if (swUpdate.isEnabled) {
      this.checkForUpdate();
    }
  }

  checkForUpdate() {
    interval(30000).subscribe(async () => {
      const updateFound = await this.swUpdate.checkForUpdate();
      console.log(
        updateFound
          ? 'A new version is available.'
          : 'Already on the latest version.'
      );
      if (updateFound) {
        this.toastService.warningNotify('نسخه جدید در دسترس است', {
          extra: () => {
            location.reload();
          },
        });
        this.newVersionSubject.next(true);
      }
    });
  }

  public subscribeToUpdateApp() {
    this.swUpdate.versionUpdates.subscribe((evt) => {
      switch (evt.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version: ${evt.version.hash}`);
          break;
        case 'VERSION_READY':
          console.log(`Current app version: ${evt.currentVersion.hash}`);
          console.log(
            `New app version ready for use: ${evt.latestVersion.hash}`
          );
          this.toastService.warningNotify('نسخه جدید در دسترس است');
          break;
        case 'VERSION_INSTALLATION_FAILED':
          console.log(
            `Failed to install app version '${evt.version.hash}': ${evt.error}`
          );
          break;
      }
    });
  }
}
