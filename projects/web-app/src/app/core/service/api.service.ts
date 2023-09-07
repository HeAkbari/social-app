import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, tap, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { LoadingService } from "../../shared/service/loading.service";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  private formatErrors(error: any) {
    return throwError(() => error.error);
  }

  getFullPath(path: string): string {
    return `${environment.apiURL}${path}`;
  }

  get<T = any>(
    path: string,
    params: HttpParams = new HttpParams(),
    getOptions = {
      needErrorNotify: true,
      needLoader: true,
    }
  ): Observable<any> {
    const obs$ = this.http
      .get<T>(this.getFullPath(path), { params })
      .pipe(catchError(this.formatErrors));
    if (getOptions.needLoader)
      return this.loadingService.showLoaderUntilCompelete(obs$);
    return obs$;
  }

  put(
    path: string,
    body = {},
    params?: HttpParams,
    getOptions = {
      needErrorNotify: true,
      needLoader: true,
    }
  ): Observable<any> {
    const obs$ = this.http
      .put(this.getFullPath(path), body, { params })
      .pipe(catchError(this.formatErrors));

    if (getOptions.needLoader)
      return this.loadingService.showLoaderUntilCompelete(obs$);
    return obs$;
  }

  patch(path: string, params?: HttpParams): Observable<any> {
    return this.http
      .patch(
        this.getFullPath(path),
        { params },
        {
          observe: "response",
        }
      )
      .pipe(catchError(this.formatErrors));
  }

  post<T = any>(
    path: string,
    body: any,
    params?: HttpParams,
    getOptions = {
      needErrorNotify: true,
      needLoader: true,
    }
  ): Observable<any> {
    const obs$ = this.http
      .post<T | ArrayBuffer | any>(this.getFullPath(path), body, { params })
      .pipe(catchError(this.formatErrors));

    if (getOptions.needLoader)
      return this.loadingService.showLoaderUntilCompelete(obs$);
    return obs$;
  }
  delete<T = any>(
    path: string,
    params?: HttpParams,
    getOptions = {
      needErrorNotify: true,
      needLoader: true,
    }
  ): Observable<any> {
    const obs$ = this.http
      .delete<T>(this.getFullPath(path), { params })
      .pipe(catchError(this.formatErrors));

    if (getOptions.needLoader)
      return this.loadingService.showLoaderUntilCompelete(obs$);
    return obs$;
  }
}
