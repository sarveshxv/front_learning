import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {

  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();


  appointments: Appointment[] = []
  
  addAppointment(){
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
    }
  } 
  
  
  // {
  //   id: 1,
  //   title: "Take dog for a walk",
  //   date: new Date('2023-07-30')
  // };

}
