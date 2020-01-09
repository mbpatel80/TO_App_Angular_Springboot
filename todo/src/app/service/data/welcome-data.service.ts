import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { API_JPA_URL } from 'src/app/app.constants';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient: HttpClient

  ) { }

  executeHelloWorldBeanService(){
    return this.httpClient.get<HelloWorldBean>(`${API_JPA_URL}/hello-world-bean`);
  }

  executeHelloWorldBeanServiceWithPathVariable(name){
    return this.httpClient.get<HelloWorldBean>(`${API_JPA_URL}/hello-world-bean/${name}`);
  }
 
}
