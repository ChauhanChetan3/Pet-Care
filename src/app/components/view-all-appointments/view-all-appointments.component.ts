// import { Component, OnInit } from '@angular/core';
// import { Appointment } from 'src/app/models/appointment.model';
// import { Pet } from 'src/app/models/pet.model';
// import { User } from 'src/app/models/user.model';
// import { AppointmentService } from 'src/app/services/appointment.service';

// @Component({
//   selector: 'app-view-all-appointments',
//   templateUrl: './view-all-appointments.component.html',
//   styleUrls: ['./view-all-appointments.component.css']
// })
// export class ViewAllAppointmentsComponent implements OnInit {

//   appointments:Appointment[]=[];

//   userObject: User = { userId: 0, email: '', password: '', username: '', mobileNumber: '', userRole: '' };
//   petObject: Pet = { petId: 0, name: '', species: '', breed: '', dateOfBirth: '', user: this.userObject, status: '' };
//   appointment : Appointment={appointmentId:0,appointmentDate:'',reason:'',status:'',pet:this.petObject,user:this.userObject};
//   toggleAppointmentStatus : string = "Pending";
//   rejectAppointmentStarus : string = "Approved";
//   constructor(private appointmentService:AppointmentService) { }

//   ngOnInit(): void {
//     this.getAllAppointments();
//   }


//   public getAllAppointments(){
//     this.appointmentService.getAppointments().subscribe((data)=>{
//       this.appointments=data;
//     })
//   }

//   approveAppointment(id: number) {
//     this.appointmentService.getAppointmentsById(id).subscribe(data=>{
//       this.appointment = data;
//       this.appointment.status = "Approved";
//       this.appointmentService.updateAppointment(id,this.appointment).subscribe(data=>{
//         console.log('Approved:', data);
//         this.getAllAppointments();
//       })
//     })

//   }

//   rejectAppointment(id: number) {
//     this.appointmentService.getAppointmentsById(id).subscribe(data=>{
//       this.appointment = data;
//       this.appointment.status = "Rejected";
      
//       this.appointmentService.updateAppointment(id,this.appointment).subscribe(data=>{
//         console.log('Rejected:', data);
//         this.getAllAppointments();
//       })
//     })
//   }

//   closeAppointment(id: number) {
//     this.appointmentService.getAppointmentsById(id).subscribe(data=>{
//       this.appointment = data;
//       this.appointment.status = "Closed";
//       this.appointmentService.updateAppointment(id,this.appointment).subscribe(data=>{
//         console.log('Closed:', data);
//         this.getAllAppointments()
//       })
//     })
//   }


// }



import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';
import { Pet } from 'src/app/models/pet.model';
import { User } from 'src/app/models/user.model';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-view-all-appointments',
  templateUrl: './view-all-appointments.component.html',
  styleUrls: ['./view-all-appointments.component.css']
})
export class ViewAllAppointmentsComponent implements OnInit {

  appointments: Appointment[] = [];

  userObject: User = { userId: 0, email: '', password: '', username: '', mobileNumber: '', userRole: '' };
  petObject: Pet = { petId: 0, name: '', species: '', breed: '', dateOfBirth: '', user: this.userObject, status: '' };
  appointment: Appointment = { appointmentId: 0, appointmentDate: '', reason: '', status: '', pet: this.petObject, user: this.userObject };

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getAllAppointments();
  }

  public getAllAppointments() {
    this.appointmentService.getAppointments().subscribe((data) => {
      this.appointments = data;
    });
  }

  approveAppointment(id: number) {
    this.appointmentService.getAppointmentsById(id).subscribe(data => {
      this.appointment = data;
      this.appointment.status = "Approved";
      this.appointmentService.updateAppointment(id, this.appointment).subscribe(data => {
        console.log('Approved:', data);
        this.getAllAppointments();
      }, error => {
        console.error('Error updating appointment:', error);
      });
    }, error => {
      console.error('Error fetching appointment:', error);
    });
  }

  rejectAppointment(id: number) {
    this.appointmentService.getAppointmentsById(id).subscribe(data => {
      this.appointment = data;
      this.appointment.status = "Rejected";
      this.appointmentService.updateAppointment(id, this.appointment).subscribe(data => {
        console.log('Rejected:', data);
        this.getAllAppointments();
      }, error => {
        console.error('Error updating appointment:', error);
      });
    }, error => {
      console.error('Error fetching appointment:', error);
    });
  }

  closeAppointment(id: number) {
    this.appointmentService.getAppointmentsById(id).subscribe(data => {
      this.appointment = data;
      this.appointment.status = "Closed";
      this.appointmentService.updateAppointment(id, this.appointment).subscribe(data => {
        console.log('Closed:', data);
        this.getAllAppointments();
      }, error => {
        console.error('Error updating appointment:', error);
      });
    }, error => {
      console.error('Error fetching appointment:', error);
    });
  }
}
