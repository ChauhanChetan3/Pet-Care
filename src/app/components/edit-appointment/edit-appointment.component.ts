import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model';
import { Pet } from 'src/app/models/pet.model';
import { User } from 'src/app/models/user.model';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  appointmentForm: FormGroup;
  pets: Pet[] = [];
  userId: number;
  petId: number;
  appointmentId:number;
  userObject: User = { userId: 0, email: '', password: '', username: '', mobileNumber: '', userRole: '' };
  petObject: Pet = { petId: 0, name: '', species: '', breed: '', dateOfBirth: '', user: this.userObject, status: '' };

  constructor(
    private appointmentService: AppointmentService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private petService: PetService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.appointmentForm = formBuilder.group({
      appointmentId:formBuilder.control(""),
      pet: formBuilder.control("", Validators.required),
      appointmentDate: formBuilder.control("", Validators.required),
      reason: formBuilder.control("", Validators.required),
      petId: formBuilder.control(""),
      userId: formBuilder.control(""),
      status:formBuilder.control("")
    });
  }

  ngOnInit(): void {
    this.getId();
    this.getPets();
    this.activatedRoute.params.subscribe(param=>{
      this.appointmentId=param['id'];
      this.appointmentService.getAppointmentsById(this.appointmentId).subscribe((data)=>{
        console.log(data);
        
        // this.appointmentForm.setValue(data);
        this.appointmentForm.patchValue({
          appointmentId: data.appointmentId,
          pet: data.pet.name, // Set the pet name for the dropdown
          appointmentDate: data.appointmentDate,
          reason: data.reason,
          petId: data.pet.petId, // Ensure petId is set
          userId: data.user.userId,
          status: data.status
        });
      })
    })
  }

  public getId() {
    this.authService.isUser();
    this.userId = parseInt(this.authService.userId);
  }

  getPets() {
    this.petService.getUserPetsById(this.userId).subscribe(data => {
      this.pets = data;
    });
  }

  public getPetId(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedPet = this.pets[selectElement.selectedIndex];
    this.petId = selectedPet.petId;
  
    // Update the petId control in the form
    this.appointmentForm.get('petId').setValue(this.petId);
  }
  

  public updateAppointment() {
    if (this.appointmentForm.valid) {
      let appointment: Appointment = {
        appointmentId: this.appointmentForm.get('appointmentId').value,
        pet: { petId: this.appointmentForm.get('petId').value },
        appointmentDate: this.appointmentForm.get('appointmentDate').value,
        reason: this.appointmentForm.get('reason').value,
        user: { userId: this.userId, email: '', password: '', username: '', mobileNumber: '', userRole: '' },
        status: this.appointmentForm.get('status').value
      };
  
      this.appointmentService.updateAppointment(this.appointmentId, appointment).subscribe((data) => {
        this.router.navigate(['/user/petOwner/appointment/view']);
      });
    }
  }

}
