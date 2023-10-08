import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { MainComponent } from "./system/layout/main/main.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { SocialEnvironment } from "./shared/models/environment";
import { environment } from "../environments/environment";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SideMenuComponent } from "./system/layout/side-menu/side-menu.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { SWService } from "./shared/service/sw.service";
import { CommonModule } from "@angular/common";
import { ApiInterceptor } from "./core/interceptor/api.interceptor";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from "./state/posts/post.effects";
import { reducers } from "./state/reducer";
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MainComponent,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added,
    SideMenuComponent,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000",
    }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(PostEffects)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    {
      provide: SocialEnvironment,
      useValue: environment,
    },
    SWService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

