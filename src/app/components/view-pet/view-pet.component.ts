import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/models/pet.model';
import { AuthService } from 'src/app/services/auth.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-view-pet',
  templateUrl: './view-pet.component.html',
  styleUrls: ['./view-pet.component.css']
})
export class ViewPetComponent implements OnInit {

  pets:Pet[]=[];
  userId:number;
  constructor(private petService:PetService,private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.getId();
    this.getPets();
    console.log(this.pets);
  }


  public getId(){
    this.authService.isUser();
    this.userId = parseInt(this.authService.userId);
    console.log(this.userId);
  }


  getPets(){
    console.log(this.userId);
    
    this.petService.getUserPetsById(this.userId).subscribe(data=>{
      console.log(data);
      this.pets=data;
    })
  }

  deletePet(petId:number){
    this.petService.deletePet(petId).subscribe(data=>{
      this.getPets();
    })
  }

  editPet(id:number){
    this.router.navigate(['/user/petOwner/editpet',id])
  }




}
