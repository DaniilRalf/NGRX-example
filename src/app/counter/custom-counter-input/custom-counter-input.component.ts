import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {StateCounterInterface} from "../../../types/interfaces";
import {changeText, customIncrement} from "../state/counter.actions";
import {getCounter, getText} from "../state/counter.selectors";

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit{

  public value!: number
  public text!: string

  constructor(private store: Store<{counterInStore: StateCounterInterface}>) {
  }

  ngOnInit() {
    /* * Два способа  Смотреть в файле селекторов почему так*/
    // this.store.select('counterInStore')
    //   .subscribe((data) => {
    //     console.warn('Counter text change')
    //     this.text = data.text
    //   })
    this.store.select(getText)
      .subscribe((data) => {
        console.warn('Counter text change')
        this.text = data
      })
  }

  onAdd() {
    this.store.dispatch(customIncrement({count: +this.value}))
  }

  onChangeText() {
    this.store.dispatch(changeText({textNew: 'New test text'}))
  }

}
