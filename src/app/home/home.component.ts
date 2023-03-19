import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private api:ApiService, private rout:Router){}
  public book_data:any=[]
  ngOnInit(): void {
      this.api.getBook().subscribe((res)=>{
        this.book_data = res
        
      });
  }
  ondelete(id:any){
    this.api.delete_book(id).subscribe((res)=>{
      if(res.success){
        window.location.reload()
      }
      window.location.reload()
    });
  }


  onedit(data:any){
    this.rout.navigate([`/addbook/${data}`])
    
  }

}
