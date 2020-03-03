import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
sub:any;
name:String;
object:Array<any>=[];
  constructor( private route: ActivatedRoute,
    private router: Router,private obj:CrudserviceService) { }

  ngOnInit(): void {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      this.name = params['name'];
    });
    this.view();
  }
view()
{
  console.log(this.name)
this.obj.viewdetails(this.name).subscribe((res:any)=>{
  this.object=res
  console.log(this.object)
})
}
back()
{
  this.router.navigateByUrl("/view");
}
}
