import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatBottomSheet} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit {

  constructor(private matDialog:MatDialog,private matBottomSheet:MatBottomSheet) { }

  ngOnInit(): void {
  }

  onCloseClick(){
    this.matDialog.closeAll();
    this.matBottomSheet.dismiss();
    
  }
}
