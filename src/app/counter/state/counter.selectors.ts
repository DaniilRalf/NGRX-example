import {createFeatureSelector, createSelector} from "@ngrx/store";
import {StateCounterInterface} from "../../../types/interfaces";

/* * Тут возникает ситуация что при изменении всего одного элемента из стора у нас отрабатывает подписка по всем
 * * свойствам чтоб такого не происходило используем селекторы
 * * этим самым мы смотрим на изменения только тех свойств что нам нужны*/

const getCounterState = createFeatureSelector<StateCounterInterface>('counterInStore')

export const getCounter = createSelector(getCounterState, state => {
  return state.counter
})
export const getText = createSelector(getCounterState, state => {
  return state.text
})
