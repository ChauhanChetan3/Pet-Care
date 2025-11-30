import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-role-navbar',
  templateUrl: './role-navbar.component.html',
  styleUrls: ['./role-navbar.component.css']
})
export class RoleNavbarComponent implements OnInit {
  selectOptPet : string = "";
  selectOptAppointment : string = "";
  selectOptFeedback : string = "";
  checkLogIn : boolean;
  checkRole : string;
  constructor(private router : Router, private navbarComponent : NavbarComponent) { 
    
  }

  ngOnInit(): void {
    this.setStatus();
  }

  setStatus(){
    this.checkLogIn = this.navbarComponent.isLoggedIn;
    this.checkRole = this.navbarComponent.userRole;
  }


  onSelectChangePet(){
    if(this.selectOptPet){
      this.router.navigate(['/user/petOwner/pets/',this.selectOptPet]);
    }
  }

  onSelectChangeAppointment(){
    if(this.selectOptAppointment){
      this.router.navigate(['/user/petOwner/appointment/',this.selectOptAppointment]);
    }
  }

  onSelectChangeFeedback(){
    if(this.selectOptFeedback){
      this.router.navigate(['/user/petOwner/feedback/',this.selectOptFeedback]);
    }
  }
}


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { NavbarComponent } from '../navbar/navbar.component';

// @Component({
//   selector: 'app-role-navbar',
//   templateUrl: './role-navbar.component.html',
//   styleUrls: ['./role-navbar.component.css']
// })
// export class RoleNavbarComponent implements OnInit {
//   selectOptPet: string = "";
//   selectOptAppointment: string = "";
//   selectOptFeedback: string = "";
//   checkLogIn: boolean;
//   checkRole: string;
//   constructor(private router: Router, private navbarComponent: NavbarComponent) { }

//   ngOnInit(): void {
//     this.setStatus();
//   }

//   setStatus() {
//     this.checkLogIn = this.navbarComponent.isLoggedIn;
//     this.checkRole = this.navbarComponent.userRole;
//   }

//   onSelectChangePet(option: string) {
//     this.selectOptPet = option;
//     if (option) {
//       this.router.navigate(['/user/petOwner/pets/', option]);
//     }
//   }

//   onSelectChangeAppointment(option: string) {
//     this.selectOptAppointment = option;
//     if (option) {
//       this.router.navigate(['/user/petOwner/appointment/', option]);
//     }
//   }

//   onSelectChangeFeedback(option: string) {
//     this.selectOptFeedback = option;
//     if (option) {
//       this.router.navigate(['/user/petOwner/feedback/', option]);
//     }
//   }
// }



