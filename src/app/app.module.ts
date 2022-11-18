import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { StaticInformationComponent } from './components/static-information/static-information.component';
import { RoutedInformationComponent } from './components/routed-information/routed-information.component';
import { RedComponent } from './components/red/red.component';
import { BlueComponent } from './components/blue/blue.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TableDataComponent } from './components/table-data/table-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RowDetailDialogComponent } from './dialogs/row-detail-dialog/row-detail-dialog.component';
import { AddDetailsFormComponent } from './forms/add-details-form/add-details-form.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { ObservableTableDataComponent } from './components/observable-table-data/observable-table-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    StaticInformationComponent,
    RoutedInformationComponent,
    RedComponent,
    BlueComponent,
    TableDataComponent,
    RowDetailDialogComponent,
    AddDetailsFormComponent,
    ObservableTableDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
