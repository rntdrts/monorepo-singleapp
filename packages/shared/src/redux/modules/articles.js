import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { fetchArticles } from '../../clients/geekuendo';

const FETCH_ARTICLES_FULFILLED = 'FETCH_ARTICLES_FULFILLED';
const FETCH_ARTICLES = 'FETCH_ARTICLES';

const fetchArticlesFulfilled = payload => ({
  type: FETCH_ARTICLES_FULFILLED,
  payload
});

const articles = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_FULFILLED:
      return {
        ...state,
        // `login` is the username
        articles: action.payload.data
      };

    default:
      return state;
  }
};

export const fetchArticlesEpic = action$ =>
  action$.pipe(
    ofType(FETCH_ARTICLES),
    mergeMap(() =>
      fetchArticles()
        .pipe(catchError(error => console.log(error)))
        .pipe(map(fetchArticlesFulfilled))
    )
  );

export default articles;
