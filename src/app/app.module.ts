// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
// import { counterReducer } from './counter.reducer';
// import { booksReducer } from './state/books.reducer';
// import { collectionReducer } from './state/collection.reducer';
// import { StoreModule } from '@ngrx/store';

// import { AppComponent } from './app.component';
// import { HeaderComponent } from './components/header/header.component';
// import { ButtonComponent } from './components/button/button.component';
// import { TasksComponent } from './components/tasks/tasks.component';
// import { TaskItemComponent } from './components/task-item/task-item.component';
// import { AddTaskComponent } from './components/add-task/add-task.component';
// import { AboutComponent } from './components/about/about.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { MyCounterComponent } from './components/my-counter/my-counter.component';
// import { BookCollectionComponent } from './book-collection/book-collection.component';
// import { BookListComponent } from './book-list/book-list.component';


// const appRoutes: Routes = [
//   { path: '', component: TasksComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'counter', component: MyCounterComponent }
// ]
// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     ButtonComponent,
//     TasksComponent,
//     TaskItemComponent,
//     AddTaskComponent,
//     AboutComponent,
//     FooterComponent,
//     MyCounterComponent,
//     BookListComponent,
//     BookCollectionComponent,
//   ],
//   imports: [
//     BrowserModule,
//     FontAwesomeModule,
//     HttpClientModule,
//     FormsModule,
//     RouterModule.forRoot(appRoutes, { enableTracing: true }),
//     StoreModule.forRoot({ count: counterReducer, books: booksReducer, collection: collectionReducer }, {})
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { HttpClientModule } from '@angular/common/http';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { StoreModule } from '@ngrx/store';
 
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
 
@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    HttpClientModule,
  ],
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
