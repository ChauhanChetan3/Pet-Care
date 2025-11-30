import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewPetComponent } from './components/view-pet/view-pet.component';
import { AddPetsComponent } from './components/add-pets/add-pets.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { TreatmentRecordsComponent } from './components/treatment-records/treatment-records.component';
import { ViewMyFeedbackComponent } from './components/view-my-feedback/view-my-feedback.component';
import { ViewAllAppointmentsComponent } from './components/view-all-appointments/view-all-appointments.component';
import { ViewAllFeedbackComponent } from './components/view-all-feedback/view-all-feedback.component';
import { TreatmentRecordForPersonComponent } from './components/treatment-record-for-person/treatment-record-for-person.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';
import { AddFeedbackComponent } from './components/add-feedback/add-feedback.component';
import { LoggedhomeComponent } from './components/loggedhome/loggedhome.component';
import { UserhomeComponent } from './components/userhome/userhome.component';

const routes: Routes = [

  {path: 'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'loggedinhome',component:LoggedhomeComponent},
  {path:'userhome',component:UserhomeComponent},


  {
    path:'user/petOwner/pets/view-pet',
    component:ViewPetComponent,

  },

  {
    path:'user/petOwner/pets/add-pet',
    component:AddPetsComponent,
    
  },
  {
    path:'user/petOwner/appointment/add',
    component:AddAppointmentComponent,

  },

  {
    path:'user/petOwner/appointment/view',
    component:ViewAppointmentsComponent,

  },

  {
    path:'user/petOwner/view-treatment-record',
    component:TreatmentRecordForPersonComponent,

  },

  {
    path:'user/petOwner/feedback/view',
    component:ViewMyFeedbackComponent,

  },

  {
    path:'user/petOwner/feedback/add',
    component:AddFeedbackComponent,

  },

  {
    path:'admin/hospital/manage-appointment',
    component:ViewAllAppointmentsComponent,

  },

  {
    path:'admin/hospital/feedback/view',
    component:ViewAllFeedbackComponent,
   
  },

  {
    path:'admin/hospital/view-treatment-records',
    component:TreatmentRecordsComponent,

  },

  {
    path: 'user/petOwner/editpet/:id',
    component:EditPetComponent,
  },
  
  {
    path: 'user/petOwner/editAppointment/:id',
    component:EditAppointmentComponent,
  },
  {path:'', component: HomeComponent},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
