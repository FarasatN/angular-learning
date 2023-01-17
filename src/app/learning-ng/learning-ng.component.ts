import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-ng',
  templateUrl: './learning-ng.component.html',
  styleUrls: ['./learning-ng.component.scss']
})
export class LearningNgComponent implements OnInit {

  title?:string = "This is My Title";

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
