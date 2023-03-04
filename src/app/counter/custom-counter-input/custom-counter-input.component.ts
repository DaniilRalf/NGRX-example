import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {StateCounterInterface} from "../../../types/interfaces";
import {customIncrement} from "../state/counter.actions";

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit{

  public value!: number

  constructor(private store: Store<{counterInStore: StateCounterInterface}>) {
  }

  ngOnInit() {
  }

  onAdd() {
    this.store.dispatch(customIncrement({count: this.value}))
  }

}
