import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import article, { fetchArticlesEpic } from './articles';

export const rootEpic = combineEpics(fetchArticlesEpic);

export const rootReducer = combineReducers({ article });
