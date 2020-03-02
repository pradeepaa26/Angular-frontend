import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
object: Array <any>=[];
  constructor(private obj:CrudserviceService, private router:Router) { }

  ngOnInit(): void {
  this.view();


    }
  
  view(){
    this.obj.viewcourse().subscribe((res :any)=>{
      this.object=res;
      console.log(res);
  });

}
new(){
  this.router.navigateByUrl("/course");
}
}
