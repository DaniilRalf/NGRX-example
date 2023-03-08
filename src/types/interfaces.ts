
export interface AppState {
  counter: StateCounterInterface,
  posts: StatePostsInterface,
}

// ========================================

export interface StateCounterInterface {
  counter: number,
  text: string
}

// ========================================

export interface StatePostsInterface {
  posts: Post[]
}
export interface Post {
  id: number,
  title: string,
  description: string,
}
