import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-room',
  templateUrl: './play-room.component.html',
  styleUrls: ['./play-room.component.scss']
})
export class PlayRoomComponent implements OnInit {

  cards = [ 
    { name:"1/2", value: .5 },
    { name:"1", value: 1 }, 
    { name:"2", value: 2 }, 
    { name:"3", value: 3 }, 
    { name:"5", value: 5 }, 
    { name:"8", value: 8 }, 
    { name:"13", value: 13 }, 
    { name:"21", value: 21 }, 
    { name:"34", value: 34 }, 
    { name:"55", value: 55 }, 
    { name:"89", value: 89 }, 
    { name:"?", value: 999 } 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
