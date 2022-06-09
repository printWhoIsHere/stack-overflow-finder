import { createEvent, createStore } from "effector";

export const showAuthorQuestions = createEvent();
export const showPopularTags = createEvent();

const $states = createStore(
  {
    isActiveAuthorQuestions: false,
    isActivePopularTags: false,
  }
)
  .on(showAuthorQuestions, state => {
    state.isActiveAuthorQuestions = !state.isActiveAuthorQuestions;
    state.isActivePopularTags = false;})
  .on(showPopularTags, state => {
    state.isActivePopularTags = !state.isActivePopularTags;
    state.isActiveAuthorQuestions = false;
  })

export default $states;