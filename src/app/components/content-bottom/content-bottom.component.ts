import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
@Component({
  selector: 'app-content-bottom',
  templateUrl: './content-bottom.component.html',
  styleUrls: ['./content-bottom.component.css']
})
export class ContentBottomComponent implements OnInit {
  public todoList:Todo[];
  constructor(private todoServcie:TodoService) { }

  ngOnInit() {
    //call service
    this.todoServcie.getTodoList2(2).subscribe((response)=>{
      this.todoList = response;
    });
  }

}

interface Todo{
  adjust_page_id:string;
  adjust_page_title:string;
  content_id:number;
  adjust_page_image_name:string,
  adjust_page_image_type:string,
  content_title:string;
  content_description:string;
  content_short_description:string;
  content_image_url:string;
}