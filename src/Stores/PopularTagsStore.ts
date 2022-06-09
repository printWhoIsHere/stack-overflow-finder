import { createEffect, createStore } from "effector";

export const getPopularTagsFx = createEffect((url: string) => fetch(url).then(req => req.json()));

export const $popularTags = createStore(null).on(
    getPopularTagsFx.doneData, (state, result) => result
)