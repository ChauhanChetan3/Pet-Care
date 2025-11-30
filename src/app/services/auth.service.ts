// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { User } from '../models/user.model';
// import { Observable } from 'rxjs';
// import { Loginresponsedto } from '../models/loginresponsedto.model';
// import { Router } from '@angular/router';
// import { Login } from '../models/login.model';



// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
 
//   private apiUrl ="https://ide-bacdaddceafccefebdfdedddbdfbedbebb.premiumproject.examly.io/proxy/8080";
//    role:String ="";
//    userRole: any ;
//    userName : any;
//    userId:any;
//   constructor(private httpClient : HttpClient,private router:Router) { }
 
//   public register(user:User):Observable<User>{
   
//     return this.httpClient.post(this.apiUrl+"/api/register",user) as Observable<User>;
//   }
 
//   public getUsers() : Observable<User[]>{
//     return this.httpClient.get<User[]>(this.apiUrl+"/api");
//   }
 
//   public getUserById(userId : number) : Observable<User>{
//     return this.httpClient.get<User>(this.apiUrl+"/api/user"+userId);
//   }
 
//   public deleteUser(userId : number) : Observable<void>{
//     return this.httpClient.delete<void>(this.apiUrl+"/api/deleteUser"+userId);
//   }
 
//   // public login(login : Login) : Observable<any>{
//   //   return this.httpClient.post(this.apiUrl+"/api/login",login) as Observable<any>;
//   // }
 
//   public login(user : Login,callback : any){
//     this.httpClient.post(this.apiUrl+"/api/login",user).subscribe((data : Loginresponsedto)=>{
//       // console.log("kkd"+data);
//       localStorage.setItem("jwttoken",data.jwtToken);
//       localStorage.setItem("username", data.username);
//       this.userName = data.username;
//       localStorage.setItem("userId",data.userId+"");
//       this.userId=data.userId
//       localStorage.setItem("role", data.role);
//       this.userRole = data.role;
//       console.log("Login successful");
//       alert("Login Successfull");
//       console.log(data);
//       if(data.role == "ADMIN"){
//         this.router.navigate(['/home']);
//         this.role = new String("ADMIN")
//       }
//       else{
//         this.router.navigate(['/home']);
//         this.role = new String("USER")
//       }
//       console.log("++++++++++++++++"+this.role);
//       callback(true);
//     },error =>{
//       callback(false);
//     });
//   }
 
//   public isLoggedIn() : boolean {
//     let jwttoken = localStorage.getItem("jwttoken")
//     if(jwttoken || jwttoken){
//       return true;
//     }
//     else
//       return false;
//   }
 
//   public isAdmin(){
//     if(this.isLoggedIn() && localStorage.getItem("role")=="ADMIN"){
//       this.userRole = "ADMIN";
//       this.userName =localStorage.getItem("username");
//       this.userRole=localStorage.getItem("role");
//       this.userId=localStorage.getItem("userId");
//       return true;
//     }
//     else
//       return false;
//   }
 
//   public isUser(){
//     if(this.isLoggedIn() && localStorage.getItem("role")=="USER"){
//       this.userRole = "USER";
//       this.userName=localStorage.getItem("username");
//       this.userRole=localStorage.getItem("role");
//       this.userId=localStorage.getItem("userId");
//       return true;
//     }
//     else
//       return false;
//   }
 
 
 
//   public updateUser(userId : number,User : User) : Observable<User>{
//     return this.httpClient.put<User>(this.apiUrl+"/"+userId,User);
//   }

//   public isLogout(){
//     localStorage.removeItem("jwttoken");
//     localStorage.removeItem("username");
//     localStorage.removeItem("role");
//     localStorage.removeItem("userId");
//   }
 
  
 
// }









import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Loginresponsedto } from '../models/loginresponsedto.model';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 // private apiUrl = "https://ide-bacdaddceafccefebdfdedddbdfbedbebb.premiumproject.examly.io/proxy/8080";
  private apiUrl = "http://localhost:8080";

  private userRoleSubject = new BehaviorSubject<string>('');
  private userNameSubject = new BehaviorSubject<string>('');
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  userRole$ = this.userRoleSubject.asObservable();
  userName$ = this.userNameSubject.asObservable();



  userRole: string = ''; // Initialize userRole with an empty string
  userName: string = ''; // Initialize userName with an empty string
  userId: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  public register(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl + "/api/register", user);
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl + "/api");
  }

  public getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(this.apiUrl + "/api/user/" + userId);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + "/api/deleteUser/" + userId);
  }

  public login(user: Login, callback: any) {
    this.httpClient.post<Loginresponsedto>(this.apiUrl + "/api/login", user).subscribe(data => {
      localStorage.setItem("jwttoken", data.jwtToken);
      localStorage.setItem("username", data.username);
      this.userName = data.username;
      localStorage.setItem("userId", data.userId + "");
      this.userId = data.userId
      localStorage.setItem("role", data.role);
      this.userRole = data.role;

      if (data.role == "ADMIN") {
        this.router.navigate(['/loggedinhome']);
      } else {
        this.router.navigate(['/loggedinhome']);
      }
      this.isLoggedInSubject.next(true);
      this.userRoleSubject.next(this.userRole);
      this.userNameSubject.next(this.userName);
      callback(true);
    }, error => {
      callback(false);
    });
  }

  public isLoggedIn(): boolean {
    let jwttoken = localStorage.getItem("jwttoken");
    return !!jwttoken;
  }

  // public isAdmin(): boolean {
  //   return this.isLoggedIn() && localStorage.getItem("role") === "ADMIN";
  // }


  
  public isAdmin(){
    if(this.isLoggedIn() && localStorage.getItem("role")=="ADMIN"){
      this.userRole = "ADMIN";
      this.userName =localStorage.getItem("username");
      this.userRole=localStorage.getItem("role");
      this.userId=localStorage.getItem("userId");
      return true;
    }
    else
      return false;
  }

  // public isUser(): boolean {
  //   return this.isLoggedIn() && localStorage.getItem("role") === "USER";
  // }


  public isUser(){
    if(this.isLoggedIn() && localStorage.getItem("role")=="USER"){
      this.userRole = "USER";
      this.userName=localStorage.getItem("username");
      this.userRole=localStorage.getItem("role");
      this.userId=localStorage.getItem("userId");
      return true;
    }
    else
      return false;
  }

  public updateUser(userId: number, user: User): Observable<User> {
    return this.httpClient.put<User>(this.apiUrl + "/" + userId, user);
  }

  public isLogout() {
    localStorage.removeItem("jwttoken");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    this.isLoggedInSubject.next(false);
    this.userRoleSubject.next('');
    this.userNameSubject.next('');
  }

  public getUserRole(): string | null {
    return localStorage.getItem("role");
  }
  
  public getUserName(): string | null {
    return localStorage.getItem("username");
  }
  
}


 