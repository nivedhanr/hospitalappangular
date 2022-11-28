import { Component } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  name=""
  id=""
  address=""
  phnno=""
  doa=""
  image=""
  drname=""

  
 readValues=()=>
  {
    let data:any={"name":this.name,"id":this.id,"address":this.address,"phnno":this.phnno,"doa":this.doa,"image":this.image,"drname":this.drname}
    console.log(data)
  }

}
