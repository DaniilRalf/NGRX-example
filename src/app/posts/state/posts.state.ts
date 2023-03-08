import {StatePostsInterface} from "../../../types/interfaces";

export const initialState: StatePostsInterface = {
  posts: [
    {id: 1, title: 'Sample title 1', description: 'Sample description 1'},
    {id: 2, title: 'Sample title 2', description: 'Sample description 2'}
  ]
}
