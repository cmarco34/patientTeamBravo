import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  id = '5ba8b75a2eef950010bbb5af';
  nom='';
  tel='';
  text:any;

  constructor(private http: Http) { }

  ngOnInit() {
    this.newId();
  }

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

    newId() : void {
      this.getPatient().then(
        resp => {
        this.nom = resp.name[0].family;
        this.tel = resp.telecom[1].value;
        this.text = resp.text.div
      });

}
