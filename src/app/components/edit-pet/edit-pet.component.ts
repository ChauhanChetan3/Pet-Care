import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { PetService } from 'src/app/services/pet.service';


@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  petForm: FormGroup;
  userPetId: number;
  userObject:User={userId:0,email:'',password:'',username:'',mobileNumber:'',userRole:''};
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService
  ) {
    this.petForm = this.fb.group({
      petId: [''],
      name: ['', Validators.required],
      species: ['', Validators.required],
      breed: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      user:[this.userObject],
      status:['']
    });
  }

  ngOnInit(): void {
    this.userPetId = parseInt(this.route.snapshot.paramMap.get('id'));   
    console.log(this.userPetId);
     
    this.petService.getPetById(this.userPetId).subscribe(pet => {
      this.petForm.setValue(pet);
      console.log(pet);
    });
  }

  get name() {
    return this.petForm.get('name');
  }

  get species() {
    return this.petForm.get('species');
  }

  get breed() {
    return this.petForm.get('breed');
  }

  get dateOfBirth() {
    return this.petForm.get('dateOfBirth');
  }

  editPet() {
    if (this.petForm.valid) {
      this.petService.updatePet(this.userPetId, this.petForm.value).subscribe(() => {
        this.router.navigate(['/user/petOwner/pets/view-pet']);
      });
    }
  }
}
