/*
  * Display single user details of front end users
  * extractData(): To extract the data
  * handleError(): To handle error messages.
*/
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ContactUsService {
  constructor(private http: Http,
    @Inject('apiEndPoint') private apiEndPoint: string,
    @Inject('staticJsonFilesEndPoint') private staticJsonFilesEndPoint: string
  ) { }

  coursesOffered() {
    return this.http.get(this.apiEndPoint + '/api/courses/offered')
      .map(this.extractData)
      .catch(this.handleError);
  }
  /*To extract json data*/
  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
  /* To handle error message */
  private handleError(error: Response | any) {
    return Observable.throw(error);
  }
}
