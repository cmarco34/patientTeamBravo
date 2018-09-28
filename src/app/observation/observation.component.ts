import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent implements OnInit {
  id_observation='';
  test='';
  text_observation:any;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }

  getObservation(): Promise<any> {
    let url =
   "https://fhir.eole-consulting.io/api/observation?subject.reference=Patient/"+this.id_observation;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
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

}
