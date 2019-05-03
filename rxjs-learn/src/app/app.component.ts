import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'rxjs-learn';

  ngOnInit() {
    var observable = Observable.create((observer:any)=> {
      try {
       observer.next('Hey guys ')
       observer.next('How are you ?')
       setInterval(()=> {
         observer.next('I am good')
       }, 2000)
       
      }
      catch(err) {
         observer.error(err)
      }
    });

    var observer1 = observable.subscribe(
      (x:any) => this.addItem(x+' : Observer 1 '),
      (error:any) => this.addItem(error),
      () => this.addItem('Completed') 
    ) 

    var observer2 = observable.subscribe(
      (x:any) => this.addItem(x+' : Observer 2 ')
    ) 

    observer1.add(observer2);

    setTimeout(() => {
      observer1.unsubscribe();
    },6001);
  }

   addItem(val:any){
     var node = document.createElement("li");
     var textnode = document.createTextNode(val); 
     node.appendChild(textnode);
     document.getElementById("output").appendChild(node);
   }

  
  
}
