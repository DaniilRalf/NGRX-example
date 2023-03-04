import { Component, OnInit } from '@angular/core'
import { Store } from "@ngrx/store"
import { decrement, increment, reset } from "../state/counter.actions"
import {StateCounterInterface} from "../../../types/interfaces";


@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit{

  constructor(private store: Store<{counterInStore: StateCounterInterface}>) {
  }

  ngOnInit() { }

  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
}
