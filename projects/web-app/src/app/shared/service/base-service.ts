import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { inject, Injectable } from "@angular/core";
import { ApiService } from "../../core/service/api.service";
import { LoadingService } from "./loading.service";
import { HttpClient } from "@angular/common/http";
import { filter, first, pipe } from "rxjs";
import { RoutingPath } from "../models/routing.constants";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  protected apiService: ApiService;
  protected loadingService: LoadingService;

  constructor() {
    this.apiService = inject(ApiService);
    this.loadingService = inject(LoadingService);
  }

}
