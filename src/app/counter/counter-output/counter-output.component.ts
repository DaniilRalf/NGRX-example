import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Store } from "@ngrx/store";
import {StateCounterInterface} from "../../../types/interfaces";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy{

  public counter?: number

  private counterSubscription!: Subscription

  constructor(private store: Store<{counterInStore: StateCounterInterface}>) {
  }

  ngOnInit() {
    this.counterSubscription = this.store.select('counterInStore').subscribe(data => {
      this.counter = data.counter
    })
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe()
  }

}

