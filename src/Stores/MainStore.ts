import { createEffect, createStore } from "effector";

interface IData {
  items: [];
  has_more?: boolean;
  quota_max?: number;
  quota_remaining?: number;
};

const startUrl = 'http://api.stackexchange.com/2.3';

// Стор и эффект для постов (Получение данных о постах и заполнение их в стор)
export const getSearchDataFx = createEffect((searchData: string) => 
  fetch(`${startUrl}/search?intitle=${searchData}&site=stackoverflow`)
    .then(req => req.json()));
export const $postStore = createStore<IData>({items: []})
  .on(getSearchDataFx.doneData, (state, payload) => payload)

// Стор и эффект для популярных тегов (Получение данных о вопросах по тегу и заполнение их в стор)
export const getPopularTagsFx = createEffect((tag: string) => 
  fetch(`${startUrl}/tags/${tag}/faq?site=stackoverflow`)
    .then(req => req.json()));
export const $popularTagsStore = createStore<IData>({items: []})
  .on(getPopularTagsFx.doneData, (state, payload) => payload)
  
// Стор и эффект для вопросов автора (Получение данных о вопросах автора и заполнение их в стор)
export const getAuthorQuestionsFx = createEffect((userId: string) => 
  fetch(`${startUrl}/users/${userId}/questions?site=stackoverflow`)
    .then(req => req.json()))
export const $authorQuestionsStore = createStore<IData>({items: []})
  .on(getAuthorQuestionsFx.doneData, (state, payload) => payload)

// Стор и эффект для подробной информации о посте (Получение данных для отображения поробной информации)
export const getDetailPostsFx = createEffect((questionId: number) =>
  fetch(`${startUrl}/questions/${questionId}/answers?&site=stackoverflow`)
    .then(req => req.json()))
export const $detailPostsStore = createStore<IData>({items: []})
  .on(getDetailPostsFx.doneData, (state, payload) => payload)