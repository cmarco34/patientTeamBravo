import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fhir';

  exempleIdAppointment='APP01NTM3NT01';

  id = '';
  nom='';
  tel='';
  text:any;

  id_observation='';
  test='';
  text_observation:any;

  reponse:any;

  id_appointment='';
  debut='';
  fin='';
  id_patient='';
  nom_patient='';
   id_medecin='';
  nom_medecin='';
   id_lieu='';
  nom_lieu='';

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }

    getPatient(): Promise<any> {
    let url =
   "https://fhir.eole-consulting.io/api/patient/"+this.id;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
    }

    getObservation(): Promise<any> {
    let url =
   "https://fhir.eole-consulting.io/api/observation?subject.reference=Patient/"+this.id_observation;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
    }

    getAppointmentType(): Promise<any> {
    let url =
   "https://fhir.eole-consulting.io/api/Appointment/"+this.exempleIdAppointment;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
    }

/*    postAppointmentType(): Observable<response> {
    let url =
   "https://fhir.eole-consulting.io/api/Appointment";
    return this.http.post(url, this.reponse[0])
    .catch(this.handleError('addrdv'));
    }
    */

    /*updatePatient(): Promise<Response> {
      return this.http.put("https://fhir.eole-consulting.io/api/patient/"+this.id)
    }*/

  newId() : void {
    this.getPatient().then(
      resp => {
      this.nom = resp.name[0].family;
      this.tel = resp.telecom[1].value;
      this.text = resp.text.div
    });
}

newIdObservation() : void {
  this.getObservation().then(
    resp => {
    /*for(int i = 0; i < resp.lenght; i++){
      this.test += resp[i].issued;
    }*/
    this.test=resp[0].issued;
    this.text_observation=resp[0].text.div
  });
}

newAppointment(): void {
  this.getAppointmentType().then(
    resp => {
    this.reponse[0] = resp;

    this.reponse[0].id = this.id_appointment;
    this.reponse[0].servicetype.coding.display = this.text_observation;
    this.reponse[0].start = this.debut;
    this.reponse[0].end = this.fin;
    this.reponse[0].paritcipant.actor[0].reference = this.id_patient;
    this.reponse[0].paritcipant.actor[0].display = this.nom_patient;
    this.reponse[0].paritcipant.actor[1].reference = this.id_medecin;
    this.reponse[0].paritcipant.actor[1].display = this.nom_medecin;
    this.reponse[0].paritcipant.actor[2].reference = this.id_lieu;
    this.reponse[0].paritcipant.actor[2].display = this.nom_lieu;

  });
}

}

