import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
object: Array <any>=[];
  constructor(private obj:CrudserviceService) { }

  ngOnInit(): void {
  this.view();


    }
  
  view(){
    this.obj.view().subscribe((res :any)=>{
      this.object=res;
      console.log(res);
  });

}}
