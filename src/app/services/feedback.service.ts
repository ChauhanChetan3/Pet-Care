import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

 // apiUrl : string ="https://ide-bacdaddceafccefebdfdedddbdfbedbebb.premiumproject.examly.io/proxy/8080/api/feedback"
 
  apiUrl : string ="http://localhost:8080/api/feedback"

  constructor(private httpClient : HttpClient) { }

  public createFeedback(feedback : Feedback) : Observable<Feedback>{
    return this.httpClient.post(this.apiUrl,feedback) as Observable<Feedback>;
  }

  public getAllFeedBack() : Observable<Feedback[]>{
    return this.httpClient.get(this.apiUrl) as Observable<Feedback[]>;
  }
  
  public getByFeedbackId(feedbackId : number) : Observable<Feedback>{
    return this.httpClient.get(this.apiUrl+"/"+feedbackId) as Observable<Feedback>
  }

  public getByFeedbackUserId(feedbackId : number) : Observable<Feedback[]>{
    return this.httpClient.get(this.apiUrl+"/user/"+feedbackId) as Observable<Feedback[]>
  }


}
