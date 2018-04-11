import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  public title='introduction';
  public data;
  public index;
  constructor(private dataService: DataService) { 
    this.dataService.getJavaData(this.title)
      .subscribe(data => {
        this.data = data;
      });
  }

  onTitleClick(index) {
    this.dataService.getJavaData(index)
      .subscribe(data => {
        this.data = data;
      });
  }

  ngOnInit() {
    this.dataService.getIndexData()
      .subscribe(data => {
        this.index = data;
      })
  }

}
