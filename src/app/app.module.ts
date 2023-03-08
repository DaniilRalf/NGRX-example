import { NgModule, isDevMode } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { RouterOutlet } from "@angular/router"
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { CounterComponent } from './counter/counter/counter.component'
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component'
import { CounterOutputComponent } from './counter/counter-output/counter-output.component'
import { counterReducer } from "./counter/state/counter.reducer";
import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component'
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './shared/components/header/header.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import {postsReducer} from "./posts/state/posts.reducer";
import {appReducer} from "./store/app.state";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,

    /* * Тут два варианта, либо создать отдельный файл где сосздать обьект со всеми Состояниями которые есть в приложении
     * * либо разложить их прям тут как обьект, воспользуемся первым вариантом поскольку он более чистый */
    StoreModule.forRoot(appReducer),
    // StoreModule.forRoot({counterInStore: counterReducer, postsInStore: postsReducer}),

    /* * StoreDevtoolsModule работает в связке с расширение Redux chrome extension*/
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: isDevMode()}),

    EffectsModule.forRoot([]),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
