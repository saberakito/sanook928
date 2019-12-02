import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.css']
})
export class CasinoComponent implements OnInit {
  public todoList:Todo[];
  constructor(private todoServcie:TodoService) { }
  public pageNews = "";
  ngOnInit() {
    //call service
    this.todoServcie.getTodoList(6).subscribe((response)=>{
     // console.log(response);
      this.todoList = response;
    });
  }


}

interface Todo{
  adjust_page_id:number;
  adjust_page_type:string;
  adjust_page_title:string;
  adjust_page_description:string;
  adjust_page_short_description:string;
  adjust_page_image_name:string;
  adjust_page_image_type:string;
}