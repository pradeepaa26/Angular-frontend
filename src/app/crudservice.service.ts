import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  constructor(private http:HttpClient) { 

  }
  viewcourse(){
    return this.http.get("http://localhost:9000/view");
  }
viewlevels()
{
  return this.http.get("http://localhost:9000/viewlevel");
}
viewcategories()
{
  return this.http.get("http://localhost:9000/viewcategory");
}
viewdetails(name:any)
{
  console.log(name)
  return this.http.get("http://localhost:9000/viewbyname/"+name);
}
modifystatus(id:number):Observable<any>
{
  return this.http.get("http://localhost:9000/modifystatus/"+id);
}
delete(id:number)
{
  return this.http.delete("http://localhost:9000/remove/"+id);
}
}
// addcourse(form:any,currentlychecked:any){
//   const body={
//     name:form.coursename,
//     levels:form.levels,
//     categories:form.categories,
//     tags:form.tags,
//     override:form.leveloverride,
//     enrollment:form.enrollment,
//     completion:form.completion,
//     desc:form.desc,
//     metakey:form.metakey,
//     metadesc:form.metadesc
//   }
//   return this.http.post("http://localhost:9000/viewbyname",body);
// }


