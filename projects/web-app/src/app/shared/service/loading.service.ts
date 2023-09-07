import {Injectable} from '@angular/core';
import {catchError, concatMap, delay, finalize, Observable, of, tap, throwError} from 'rxjs';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
    providedIn: 'root'
})

export class LoadingService {

  constructor() { }

  public loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  private retryLoadingSubject = new BehaviorSubject<boolean>(false);
  retryLoading$ = this.retryLoadingSubject.asObservable();
  showLoaderUntilCompelete<T>(obs$: Observable<T>): Observable<T> {
    return of(null)
      .pipe(
        tap(() => this.loadingOn()),
        concatMap(() => obs$),
        finalize(() => this.loadingOff()),
        catchError(error => throwError(error))
      );
  }

  private loadingOn() {
    this.retryLoadingOff();
    this.loadingSubject.next(true);
  }
  private loadingOff() {
    this.loadingSubject.next(false);
  }
  retryLoadingOn() {
    this.retryLoadingSubject.next(true);
  }
  retryLoadingOff() {
    this.retryLoadingSubject.next(false);
  }
}
