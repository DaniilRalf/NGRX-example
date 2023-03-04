import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Store } from "@ngrx/store";
import {StateCounterInterface} from "../../../types/interfaces";
import {Subscription} from "rxjs";
import {getCounter} from "../state/counter.selectors";

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
    /* * Два способа  Смотреть в файле селекторов почему так*/
    // this.counterSubscription = this.store.select('counterInStore')
    //   .subscribe(data => {
    //     console.warn('Counter count change')
    //     this.counter = data.counter
    // })
    this.counterSubscription = this.store.select(getCounter)
      .subscribe(data => {
        console.warn('Counter count change')
        this.counter = data
      })
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe()
  }

}

