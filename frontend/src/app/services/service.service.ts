import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}
  
//------------Login Account---------------------------

  login(Email: any, Password: any) {
    const logData = { Email, Password };

    return this.http.post('http://localhost:3000/login', logData);
  }

  //---------------Register Account---------------------

  register(Name:any,Email: any, dob:any, Password: any) {
    const regData = { Name,Email, dob, Password };

    return this.http.post('http://localhost:3000/register', regData);
  }

  //--------------------Adding Event----------------

  adEvent(userEmail:any,eventName:any,EventDate: any,eventOwner:any, priority: any) {
    const eventData = { userEmail,eventName,EventDate, eventOwner, priority };

    return this.http.post('http://localhost:3000/api/AddEvent', eventData);
  }

 
  //--------------------Get Event Data--------------------
  getEventData(){
    return this.http.get('http://localhost:3000/api/getEvent')
  }



  //--------------------Get Deledet Event Data--------------------
  getDelEventData(){
    return this.http.get('http://localhost:3000/api/getDelEvent')
  }



}
