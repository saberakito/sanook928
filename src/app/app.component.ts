import { Component,ViewChild } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { NgImageSliderComponent } from 'ng-image-slider';
import { CookieService } from 'ngx-cookie-service';
import { TodoService } from 'src/app/service/todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'casino';
 



  constructor(private todoServcie:TodoService,private _authService:AuthService, private _router:Router, private cookie:CookieService){}
  @ViewChild('nav') slider: NgImageSliderComponent;
  public close_popup = "0";
  public adjust_page_image_name:string;
  public adjust_page_image_type:string;
  imageObject: Array<object> = [{
      image: '/assets/images/content/slide1.jpg',
      thumbImage: '/assets/images/content/slide2.jpg'
  }, {
      image: '/assets/images/content/slide2.jpg',
      thumbImage: '/assets/images/content/slide1.jpg',
      //title: 'Image with title' //Optional: You can use this key if you want to show title
  },{
      image: '/assets/images/content/slide3.jpg',
      thumbImage: '/assets/images/content/slide3.jpg',
      //title: 'Image with title' //Optional: You can use this key if you want to show title
  }
  ];
  prevImageClick() {
      this.slider.prev();
  }

  nextImageClick() {
      this.slider.next();
  }

  closePopup() {
    this.cookie.set("close_popup", "1",1);
    this.close_popup = '1';
  }

  ngOnInit() {
    this.todoServcie.getPopup().subscribe((response)=>{
     this.adjust_page_image_name = response.adjust_page_image_name;
     this.adjust_page_image_type = response.adjust_page_image_type
     if(this.adjust_page_image_name==''||this.adjust_page_image_name==null){
      this.close_popup = '1';
     }
    });
    var close_popup_value =  this.cookie.get("close_popup");
    if(close_popup_value=='1'){
      this.close_popup = '1';
    }
    document.body.classList.add('bg-img');
    if(localStorage.getItem('web_status')=='2'){
      this._router.navigate(['/404']);
      return false;
    }
      
  }
}

