import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit{
constructor(private api:ApiService, private route:Router,private arout:ActivatedRoute){}
id:any=null;
total:Number = 0;
data:any={
  book_title:'',
  description:'',
  author_name:'',
  price:null
}
ngOnInit(): void {
  this.api.getBook().subscribe((res)=>{
    this.total = res.length
    console.log(this.total)
  });


  this.id = this.arout.snapshot.paramMap.get('id')
  
  if(this.id){
    this.api.singleBook(this.id).subscribe((res)=>{
      this.data=res[0]
      
    });
  }
}

onsubmit(){
  if(this.id){
    this.api.edit(this.id,this.data).subscribe((res)=>{
      this.route.navigate(['/'])
    });
  }else{
    

    if(this.total>4){
      alert("Total 5 rows only allow ")
      this.route.navigate(['/'])
    }else{
      this.api.postBook(this.data).subscribe((res)=>{
        this.route.navigate(['/'])
      });
    }
    
    
  }
 

}
}
