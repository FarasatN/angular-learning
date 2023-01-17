import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { GreetingsComponent } from './greetings/greetings.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ownedAnimals = [
    "Dog",
    "Cat",
    "Fish",
    "Turtle"
  ];


  stepOne?: FormGroup;

  title = 'ng_learning';
  firstName = "Farasat";
  myVariable="2";
  percent = 70;

  open = false;
  completed = false;

  constructor(
    private matDialog:MatDialog,
    private matBottomSheet:MatBottomSheet){
    // this.stepOne = builder.group(
    //   {
    //     isNotEmpty: [
    //       '',
    //       Validators.compose(
    //         [Validators.required]
    //       )
    //     ]
    //   }
    // );
  }

  onSubClick(){
    this.open = true;
  }

  completeStep(){
    this.completed = true;
  }

  openDialogClick(){
    this.matDialog.open(GreetingsComponent);
  }

  // onCloseClick(){
  //   this.matDialog.close(GreetingsComponent);
  // }

  onTriggerSheetClick(){
    this.matBottomSheet.open(GreetingsComponent);
  }
}
