import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {CalendarComponent} from './components/calendar/calendar.component';
import {AccountComponent} from './components/account/account.component';
import {TaskComponent} from './components/task/task.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'task/:id',
    component: TaskComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
