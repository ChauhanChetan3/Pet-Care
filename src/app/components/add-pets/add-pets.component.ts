import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pet } from 'src/app/models/pet.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {

  petForm:FormGroup
  userId:number;
  userObject:User={userId:0,email:'',password:'',username:'',mobileNumber:'',userRole:''};
  constructor(private petService:PetService,private formBuilder:FormBuilder,private router:Router,private authService:AuthService) {
   this.petForm=formBuilder.group({
      name :formBuilder.control("",Validators.required),
      species :formBuilder.control("",Validators.required),
      breed :formBuilder.control("",Validators.required),
      dateOfBirth :formBuilder.control("",Validators.required),
      user:formBuilder.control(this.userObject),
      status :formBuilder.control("Pending")
   })
   }

  ngOnInit(): void {
    this.getId();
  }

  public getId(){
    this.authService.isUser();
    this.userId = this.authService.userId;
    console.log(this.userId);
  }



  public get name(){
    return this.petForm.get('name');
  }
  public get species(){
    return this.petForm.get('species');
  }
  public get breed(){
    return this.petForm.get('breed');
  }
  public get dateOfBirth(){
    return this.petForm.get('dateOfBirth');
  }



  addNewPet(){
    if(this.petForm.valid){
      let p:Pet=this.petForm.value;
      p.user.userId=this.userId;
      // console.log(p);
      this.petService.createPet(this.petForm.value).subscribe(data=>{
        // console.log(data);
        this.router.navigate(['user/petOwner/pets/view-pet']);
        this.petForm.reset();
      })

    }

  }

}
