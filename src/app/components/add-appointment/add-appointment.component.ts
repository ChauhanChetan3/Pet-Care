// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Appointment } from 'src/app/models/appointment.model';
// import { Pet } from 'src/app/models/pet.model';
// import { User } from 'src/app/models/user.model';
// import { AppointmentService } from 'src/app/services/appointment.service';
// import { AuthService } from 'src/app/services/auth.service';
// import { PetService } from 'src/app/services/pet.service';

// @Component({
//   selector: 'app-add-appointment',
//   templateUrl: './add-appointment.component.html',
//   styleUrls: ['./add-appointment.component.css']
// })
// export class AddAppointmentComponent implements OnInit {

//   appointmentForm:FormGroup;
//   pets:Pet[]=[];
//   userId:number;
//   petId:number;
//   userObject:User={userId:0,email:'',password:'',username:'',mobileNumber:'',userRole:''};
//   petObject:Pet={petId:0,name:'',species:'',breed:'',dateOfBirth:'',user:this.userObject,status:''};
//   constructor(private appointmentService:AppointmentService,private formBuilder:FormBuilder,private authService:AuthService,private petService:PetService) { 
//     this.appointmentForm=formBuilder.group({
//       pet:formBuilder.control("",Validators.required),
//       appointmentDate:formBuilder.control("",Validators.required),
//       reason:formBuilder.control("",Validators.required),
//       petId : formBuilder.control(""),
//       userId :formBuilder.control("")
//     })
//   }

//   ngOnInit(): void {
//     this.getId();
//     this.getPets();
//     // console.log(this.pets);
//   }

//   public getId(){
//     this.authService.isUser();
//     this.userId = parseInt(this.authService.userId);
//     console.log(this.userId);
    
//   }


//   getPets(){
//     this.petService.getUserPetsById(this.userId).subscribe(data=>{
//       this.pets = data;    
//       console.log(this.pets);
//     })
//   }

//   // public getPetId(id:number){
//   //   this.petId=id;
//   //   console.log(this.petId);
    
//   // }

//   public getPetId(event: Event) {
//     const selectElement = event.target as HTMLSelectElement;
//     this.petId = this.pets[selectElement.selectedIndex].petId;
//     console.log(this.petId);
//   }

//   public addAppointment() {
//     if (this.appointmentForm.valid) {
//       console.log(this.appointmentForm.value);
//       let appointment: Appointment = this.appointmentForm.value;
//       appointment.pet.petId = this.petId;
//       appointment.user.userId = this.userId;
//       this.appointmentService.createAppointments(appointment).subscribe((data) => {
//         // Handle response or show notification
//         console.log(data);
//       });
//     }
//   }

// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model';
import { Pet } from 'src/app/models/pet.model';
import { User } from 'src/app/models/user.model';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  appointmentForm: FormGroup;
  pets: Pet[] = [];
  userId: number;
  petId: number;
  userObject: User = { userId: 0, email: '', password: '', username: '', mobileNumber: '', userRole: '' };
  petObject: Pet = { petId: 0, name: '', species: '', breed: '', dateOfBirth: '', user: this.userObject, status: '' };

  constructor(
    private appointmentService: AppointmentService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private petService: PetService,
    private router:Router
  ) {
    this.appointmentForm = formBuilder.group({
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
  }

  public getId() {
    this.authService.isUser();
    this.userId = parseInt(this.authService.userId);
    console.log(this.userId);
  }

  getPets() {
    this.petService.getUserPetsById(this.userId).subscribe(data => {
      this.pets = data;
      console.log(this.pets);
    });
  }

  public getPetId(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.petId = this.pets[selectElement.selectedIndex].petId;
    console.log(this.petId);
  }

  public addAppointment() {
    if (this.appointmentForm.valid) {
      let appointment: Appointment = {
        pet: { petId: this.petId },
        appointmentDate: this.appointmentForm.get('appointmentDate')?.value,
        reason: this.appointmentForm.get('reason')?.value,
        user:{userId:this.userId,email: '', password: '', username: '', mobileNumber: '', userRole: ''},
        status:"Pending"
        // user: { userId: this.userId }
      };
      this.appointmentService.createAppointments(appointment).subscribe((data) => {
        // Handle response or show notification
        this.router.navigate(['/user/petOwner/appointment/view'])
        console.log(data);
      });
    }
  }
}
