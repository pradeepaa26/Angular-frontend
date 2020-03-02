import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.css']
})
export class NewcourseComponent implements OnInit {
Levels :Array <any> =[];
categories :Array <any> =[];
  constructor(private course:CrudserviceService,private router:Router) { }

  ngOnInit(): void {
    this.viewlevelname();
    this.viewcategoryname();
    
  }


viewlevelname()
{
this.course.viewlevels().subscribe((res :any)=>{
  this.Levels=res;
  console.log(res);
});
}
viewcategoryname()
{
this.course.viewcategories().subscribe((res : any)=>{
  this.categories=res;
  console.log(res);
});
}
back(){
  this.router.navigateByUrl("/view");
}
}
