import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'booksList',
        component: BookListComponent
      },
      {
        path: 'bookDetail/:id',
        component: BookDetailsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
