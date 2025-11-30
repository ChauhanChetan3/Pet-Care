import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {

  userId:number;
  appointments:Appointment[]=[];
  constructor(private appointmentService:AppointmentService,private activatedRoute:ActivatedRoute,private authService:AuthService) { }


  ngOnInit(): void {
    this.getId();
    this.getMyAppointment();
  }


  public getId() {
    this.authService.isUser();
    this.userId = parseInt(this.authService.userId);
    console.log(this.userId);
  }

  public getMyAppointment(){
    this.appointmentService.getAppointmentsByUserId(this.userId).subscribe((data)=>{
      this.appointments=data;
      this.appointments = this.appointments.filter(a=>a.status != "Closed");
      console.log(data);
    })
  }


  public deleteAppointment(id:number){
    this.appointmentService.deleteAppointment(id).subscribe(data=>{
      this.getMyAppointment();
    })
  }

}
