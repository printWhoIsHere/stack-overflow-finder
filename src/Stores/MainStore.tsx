import { createEffect, createEvent, createStore } from "effector";

interface ISearchData {
    items: [];
    has_more?: boolean;
    quota_max?: number;
    quota_remaining?: number;
};

export const fetchDataFx = createEffect((url: string) => fetch(url).then(req => req.json()));

export const $store = createStore<ISearchData>({items: []}).on(
    fetchDataFx.doneData, (state, result) => result, 
);