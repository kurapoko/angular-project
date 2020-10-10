import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

import { BookService } from './service/book.service';
import { UseComponent } from './use/use.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookItemComponent } from './book/book-item/book-item.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormComponent } from './form/form.component';
import { MultiComponentsComponent } from './multi-components/multi-components.component';

@NgModule({
  declarations: [
    AppComponent,
    UseComponent,
    BookComponent,
    BookListComponent,
    BookItemComponent,
    BookEditComponent,
    DatabindingComponent,
    PipeComponent,
    FormComponent,
    MultiComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
