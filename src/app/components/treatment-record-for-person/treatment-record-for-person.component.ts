import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';
 
@Component({
  selector: 'app-treatment-record-for-person',
  templateUrl: './treatment-record-for-person.component.html',
  styleUrls: ['./treatment-record-for-person.component.css']
})
export class TreatmentRecordForPersonComponent implements OnInit {
 
  records: any[] = [];
  userId : number;
  constructor(private appointMentService:AppointmentService,private authService:AuthService) { }
 
  ngOnInit(): void {
    this.getId();
    this.loadTreatmentRecords();
  }
  public getId(){
    this.authService.isUser();
    this.userId = this.authService.userId;
    console.log(this.userId);
  }
 
  loadTreatmentRecords(): void {
    this.appointMentService.getAppointmentsByUserId(this.userId).subscribe((data)=>{
      this.records=data
      this.records=this.records.filter(r=>r.status==="Closed");
      console.log(this.records);
    });
  }
   
 
}