// ######################################### main works############################333

// import { Component, OnInit, defineInjectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { AuthService } from 'src/app/services/auth.service';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {
//   showLogoutPopup = false;
//   isLoggedIn = true;
//   // userRole: string | null = null;
//   // username: string = null;
//   userRole = "";
//   userName : string = "";
//   displayRole :  string = null;
//   private userSubscription: Subscription | null = null;

//   constructor(private authService : AuthService,private router:Router) { }

//   ngOnInit(): void {
//     this.defineName();
//     this.setUserRole();
    
//   }

//   public setUserRole(){
//     console.log(this.authService.isAdmin());
//     console.log(this.authService.isUser());
//     console.log(this.authService.userRole);
//     console.log(this.authService.isLoggedIn());
//     console.log(this.authService.userName);
//     this.userRole=this.authService.userRole;
//     this.userName=this.authService.userName;
//     this.isLoggedIn=this.authService.isLoggedIn();
//   }

 

//   defineName(){
//     if(this.userRole == "USER"){
//       this.displayRole = "PetOwner";
//     }else if(this.userRole == "ADMIN"){
//       this.displayRole = "HospitalAdmin";
//     }
//   }
  
  // public isLogout(){
  //   this.authService.isLogout();
  //   this.showLogoutPopup=false
  //   this.router.navigate(['/login']);
  //   this.isLoggedIn=false;
  // }

//   public goToHome(){
//     this.router.navigate(['/']);
//   }


//   public isLogout() {
//     this.authService.isLogout();
//     this.showLogoutPopup = false;
//     this.isLoggedIn = this.authService.isLoggedIn();
//     this.userRole = this.authService.userRole;
//     this.userName = this.authService.userName;
//     this.router.navigate(['/']);
//   }

// }


//##########################################################################################








import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

// 
export class NavbarComponent implements OnInit, OnDestroy{
  showLogoutPopup = false;
  isLoggedIn = false;
  userRole = '';
  userName = '';
  displayRole: string | null = null;
  private userSubscription: Subscription | null = null;
  private roleSubscription: Subscription | null = null;
  private nameSubscription: Subscription | null = null;

  constructor(private authService: AuthService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    this.roleSubscription = this.authService.userRole$.subscribe(role => {
      this.userRole = role;
      this.defineName();
    });
    this.nameSubscription = this.authService.userName$.subscribe(name => {
      this.userName = name;
    });
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userRole = this.authService.getUserRole();
    this.userName = this.authService.getUserName();

  
   
  }



  start(){
    this.userSubscription = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    this.roleSubscription = this.authService.userRole$.subscribe(role => {
      this.userRole = role;
      this.defineName();
    });
    this.nameSubscription = this.authService.userName$.subscribe(name => {
      this.userName = name;
    });
  }
  

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.roleSubscription) {
      this.roleSubscription.unsubscribe();
    }
    if (this.nameSubscription) {
      this.nameSubscription.unsubscribe();
    }
  }

  defineName() {
    if (this.userRole == "USER") {
      this.displayRole = "PetOwner";
    } else if (this.userRole == "ADMIN") {
      this.displayRole = "HospitalAdmin";
    }
  }

  public isLogout() {
    this.authService.isLogout();
    this.showLogoutPopup = false;
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userRole = this.authService.getUserRole();
    this.userName = this.authService.getUserName();
    this.router.navigate(['/']);
  }
}



