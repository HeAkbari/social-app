import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./core/authentication/auth.guard";
import { PostManagementComponent } from './features/post-management/post-management.component';

const routes: Routes = [
  { path: '', redirectTo:'post' ,pathMatch: 'full'},
  { path: 'post', component: PostManagementComponent, canActivate: [AuthGuard] },
  { path: 'post/:id', loadComponent: () => import('./features/post-management/components/post-item-container/post-item-container.component').then(m => m.PostItemContainerComponent), canActivate: [AuthGuard] },
  { path: 'about', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
