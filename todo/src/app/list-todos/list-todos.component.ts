import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = []
  message:string='';
  constructor(
    private todoservice:TodoDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoservice.retriveAllTodos('mayank').subscribe(
      response=>{
        this.todos=response;
      }
    )

  }
  deleteTodo(id){
    this.todoservice.deleteTodo('mayank', id).subscribe(
      response=>{
        console.log(response);
        this.message=`Delete of todo ${id} Successful`;
        this.refreshTodos();
      }
    )
   
  }

  updateTodo(id){
    this.router.navigate(['tododetail',id]);
  }

  addTodo(){
    console.log("add todo");
    this.router.navigate(['tododetail',-1]);
  }

}
