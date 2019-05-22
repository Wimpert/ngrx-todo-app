import { NgModule } from '@angular/core';
import { MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSlideToggleModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { CounterBadgeComponent } from './components/counter-badge/counter-badge.component';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { metaReducers, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    CounterBadgeComponent,
    TodoListComponent,
    TodoContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
