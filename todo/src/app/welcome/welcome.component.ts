import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name:string='';
  constructor(private route:ActivatedRoute,
    private service: WelcomeDataService) { }

    welcomeMessageFromService:string;
  ngOnInit() {
   this.name= this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    );
  }

   getWelcomeMessageWithPathVariable(){
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService=response.message;
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService=error.error.message;
  }
}
