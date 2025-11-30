import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback.model';
import { AuthService } from 'src/app/services/auth.service';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-view-my-feedback',
  templateUrl: './view-my-feedback.component.html',
  styleUrls: ['./view-my-feedback.component.css']
})
export class ViewMyFeedbackComponent implements OnInit {

  feedbacks : Feedback[]=[];
  id : number;
  userId:number;
  constructor(private feedbackService : FeedbackService,private router : Router,private activatedroute : ActivatedRoute,private authService:AuthService) { }

  ngOnInit(): void {
    this.getId();
    this.getByFeedbackId();
  }

  public getId() {
    this.authService.isUser();
    this.userId = parseInt(this.authService.userId);
    console.log(this.userId);
  }

  public getByFeedbackId(){
    this.feedbackService.getByFeedbackUserId(this.userId).subscribe(data=>{
      this.feedbacks=data;
      console.log(data);   
    })
  }

}
