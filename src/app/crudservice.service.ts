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
}
