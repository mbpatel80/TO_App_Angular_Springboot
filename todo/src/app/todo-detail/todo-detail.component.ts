import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
id:number
todo:Todo

  constructor(
    private todoService:TodoDataService,
    private route:ActivatedRoute,
    private router:Router

  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.todo= new Todo(this.id,'',false,new Date());
    if(this.id!=-1){
      this.todoService.retrieveTodo('mayank',this.id).subscribe(
      data=> this.todo=data
      )
    }
  }

  saveTodo(){
    if(this.id==-1){
      console.log("savetodo");
      this.todoService.createTodo('mayank',this.todo).subscribe(
        data=>{
           console.log(data);
           this.router.navigate(['todos']);
           }
       )
    }else{
      console.log("savetodo");
      this.todoService.updateTodo('mayank',this.id,this.todo).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['todos']);
          }
      )
    }
  }
}
