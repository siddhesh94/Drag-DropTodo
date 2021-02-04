import { Component ,OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CommonService } from './common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TodoList';
  
  constructor(private common:CommonService){}
  todoData: any;
  inProgress: any;
  isCompleted:any;
  
   ngOnInit():void{
      this.common.getTodoData().subscribe((res)=>{
        this.todoData = res;
      });

      this.common.getWorkInProgressData().subscribe((res)=>{
        this.inProgress = res;
      });

      this.common.getCompletedData().subscribe((res)=>{
        this.isCompleted = res;
      })
   }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


  onChange(){

  }
}
