import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
 
@Component({
  selector: 'app-treatment-records',
  templateUrl: './treatment-records.component.html',
  styleUrls: ['./treatment-records.component.css']
})
export class TreatmentRecordsComponent implements OnInit {

 
  records: any[] = [];
 
  constructor(private appointMentService:AppointmentService) { }
 
  ngOnInit(): void {
    this.loadTreatmentRecords();
  }
 
  loadTreatmentRecords(): void {
    this.appointMentService.getAppointments().subscribe((data) => {
        this.records = data.filter(record => record.status === 'Closed');
        console.log(this.records);
      },
      (error) => {
        console.error('Error fetching treatment records:', error);
      }
    );
  }
   
 
}
 

