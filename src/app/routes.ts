import { Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { LandingComponent } from "./landing/landing.component";
import { HomeComponent } from "./panel/home/home.component";
import { PanelComponent } from "./panel/panel.component";
import { PlayRoomComponent } from "./panel/play-room/play-room.component";

export const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: '',
        component: PanelComponent,
        children: [
            { path:'home', component:HomeComponent},
            { path:'play-room', component:PlayRoomComponent},
            { path: '**', redirectTo: 'home'}
        ]
    },
    {
        path: '**',
        redirectTo: '',
    },
];