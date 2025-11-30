import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { AddFeedbackComponent } from './components/add-feedback/add-feedback.component';
import { AddPetsComponent } from './components/add-pets/add-pets.component';
 
 
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewPetComponent } from './components/view-pet/view-pet.component';
import { ViewMyFeedbackComponent } from './components/view-my-feedback/view-my-feedback.component';
import { ViewAppointmentsRecordsComponent } from './components/view-appointments-records/view-appointments-records.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { ViewAllFeedbackComponent } from './components/view-all-feedback/view-all-feedback.component';
import { ViewAllAppointmentsComponent } from './components/view-all-appointments/view-all-appointments.component';
import { TreatmentRecordsComponent } from './components/treatment-records/treatment-records.component';
import { RoleNavbarComponent } from './components/role-navbar/role-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { TreatmentRecordForPersonComponent } from './components/treatment-record-for-person/treatment-record-for-person.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';
import { LoggedhomeComponent } from './components/loggedhome/loggedhome.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
 
 
 
 
 
@NgModule({
  declarations: [
    AppComponent,
    AddAppointmentComponent,
    AddFeedbackComponent,
    AddPetsComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    RoleNavbarComponent,
    TreatmentRecordsComponent,
    ViewAllAppointmentsComponent,
    ViewAllFeedbackComponent,
    ViewAppointmentsComponent,
    ViewAppointmentsRecordsComponent,
    ViewMyFeedbackComponent,
    ViewPetComponent,
    TreatmentRecordForPersonComponent,
    EditPetComponent,
    EditAppointmentComponent,
    LoggedhomeComponent,
    UserhomeComponent
 
 
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }