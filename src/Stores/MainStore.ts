import { createEffect, createStore } from "effector";

interface IData {
  items: [];
  has_more?: boolean;
  quota_max?: number;
  quota_remaining?: number;
};

// Стор и эффект для постов (Получение данных о постах и заполнение их в стор)
export const getSearchDataFx = createEffect((searchData: string) => 
  fetch(`http://api.stackexchange.com/2.3/search?intitle=${searchData}&site=stackoverflow`)
    .then(req => req.json()));
export const $postStore = createStore<IData>({items: []})
  .on(getSearchDataFx.doneData, (state, payload) => payload)

// Стор и эффект для популярных тегов (Получение данных о вопросах по тегу и заполнение их в стор)
export const getPopularTagsFx = createEffect((tag: string) => 
  fetch(`http://api.stackexchange.com/2.3/tags/${tag}/faq?site=stackoverflow`)
    .then(req => req.json()));
export const $popularTagsStore = createStore<IData>({items: []})
  .on(getPopularTagsFx.doneData, (state, payload) => payload)
  
// Стор и эффект для вопросов автора (Получение данных о вопросах автора и заполнение их в стор)
export const getAuthorQuestionsFx = createEffect((userId: string) => 
  fetch(`http://api.stackexchange.com/2.3/users/${userId}/questions?site=stackoverflow`)
    .then(req => req.json()))
export const $authorQuestionsStore = createStore<IData>({items: []})
  .on(getAuthorQuestionsFx.doneData, (state, payload) => payload)