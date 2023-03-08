import {counterReducer} from "../counter/state/counter.reducer";
import {postsReducer} from "../posts/state/posts.reducer";


/* * Можно обойтись и без этого, и разложить этот обьект напрямую в модклу, просто этот вариант более чисто выгляит*/
export const appReducer = {
  counterInStore: counterReducer,
  postsInStore: postsReducer
}
