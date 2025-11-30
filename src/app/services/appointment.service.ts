import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
 
  //baseUrl:string="https://ide-bacdaddceafccefebdfdedddbdfbedbebb.premiumproject.examly.io/proxy/8080/api/appointments"

  baseUrl:string="http://localhost:8080/api/appointments"


  constructor(private httpClient:HttpClient) { }

  public getAppointments():Observable<Appointment[]>{
    return this.httpClient.get(this.baseUrl) as Observable<Appointment[]>
  }


  public getAppointmentsById(id:number):Observable<Appointment>{
    return this.httpClient.get(this.baseUrl+'/'+id) as Observable<Appointment>
  }

  public getAppointmentsByUserId(id:number):Observable<Appointment[]>{
    return this.httpClient.get(this.baseUrl+'/user/'+id) as Observable<Appointment[]>
  }

  public createAppointments(appointment:Appointment):Observable<Appointment>{
    return this.httpClient.post(this.baseUrl,appointment) as Observable<Appointment>
  }

  public updateAppointment(id:number,appointment:Appointment):Observable<Appointment>{
    return this.httpClient.put(this.baseUrl+'/'+id,appointment) as Observable<Appointment>
  }

  public deleteAppointment(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+'/'+id) as Observable<any>
  }

  updateAppointmentStatus(id: number, status: string): Observable<Appointment> {
    return this.httpClient.put<Appointment>(this.baseUrl+'/'+id, status);
  }


}
