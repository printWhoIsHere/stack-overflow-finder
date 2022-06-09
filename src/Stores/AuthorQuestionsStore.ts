import { createEffect, createStore } from "effector";

interface IQuestions {
    id: number;
    link: string;
}

export const getQuestionsFx = createEffect((url: string) => fetch(url).then(req => req.json()))

export const $authorQuestions = createStore(null).on(
    getQuestionsFx.doneData, (state, result) => result, 
);