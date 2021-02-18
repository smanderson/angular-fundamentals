import { Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { EventsListComponent, EventDetailsComponent, CreateEventComponent,
    EventRouteActivatorService, EventsListResolver } from './events/index';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: {
        events: EventsListResolver
    }},
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
]