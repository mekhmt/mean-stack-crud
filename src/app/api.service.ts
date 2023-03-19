import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  book_api_data =[]
  constructor(private http:HttpClient) { }

  getBook(){
    return this.http.get<any>('https://mongodb-api-lq1s.onrender.com/books/')
  }
  postBook(data:any){
    return this.http.post<any>('https://mongodb-api-lq1s.onrender.com/addbook/',data)
  }
  singleBook(id:any){
    return this.http.get<any>(`https://mongodb-api-lq1s.onrender.com/singleBook/${id}`);
  }
  edit(id:any, data:any){
    return this.http.patch<any>(`https://mongodb-api-lq1s.onrender.com/edit/${id}`,data)
  }
  delete_book(id:any){
    return this.http.delete<any>(`https://mongodb-api-lq1s.onrender.com/delete/${id}`)
  }
}
