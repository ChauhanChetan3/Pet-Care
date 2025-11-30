import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model';
import { Feedback } from 'src/app/models/feedback.model';
import { User } from 'src/app/models/user.model';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  feedbackForm : FormGroup
  userId:number;
  appointments:Appointment[]=[];
  appointmentId:number;
  user:User;
  constructor(private feedbackService : FeedbackService,private builder : FormBuilder,private authService:AuthService,private appointmentService:AppointmentService,private router:Router) { 
    this.feedbackForm = this.builder.group({
      message : this.builder.control("",[Validators.required,Validators.minLength(10)]),
      rating : this.builder.control("",[Validators.required,Validators.min(1),Validators.max(5)]),
      appointment:this.builder.control(""),
      user:this.builder.control("")
    })
  }

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
      console.log(data);
    })
  }

  public getappointmentId(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.appointmentId = this.appointments[selectElement.selectedIndex].appointmentId;
    console.log(this.appointmentId);
  }

  // public addFeedback() : void{
  //   if(this.feedbackForm.valid){
  //     let feedback : Feedback = this.feedbackForm.value;
  //     feedback.appointment.appointmentId=this.appointmentId;
  //     feedback.user.userId=this.userId;
  //     this.feedbackService.createFeedback(feedback).subscribe(data=>{
  //           console.log(data);
  //     })
  //   }
    
  // }

  public addFeedback() {
    if (this.feedbackForm.valid) {
      let feedback: Feedback = {
        message:this.feedbackForm.get('message')?.value,
        rating:this.feedbackForm.get('rating')?.value,
        appointment:{appointmentId:this.appointmentId},
        user:{userId:this.userId,email: '', password: '', username: '', mobileNumber: '', userRole: ''}
      };
      this.feedbackService.createFeedback(feedback).subscribe((data) => {
        this.router.navigate(['/user/petOwner/feedback/view'])
        console.log(data);
      });
    }
  }

}
