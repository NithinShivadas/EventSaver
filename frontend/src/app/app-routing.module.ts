import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedEventsComponent } from './deleted-events/deleted-events.component';
import { EventPageComponent } from './event-page/event-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'eventPage', component: EventPageComponent },
  { path: 'DelEventPage', component: DeletedEventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
