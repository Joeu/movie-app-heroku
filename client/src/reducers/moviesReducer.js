export const moviesReducer = (state, action) => {
  const { payload } = action;

  console.log('state: ', state);
  console.log('action: ', action);

  switch (action.type) {
    case 'UPCOMING_MOVIES':
      return {
        ...state,
        movies: payload.results,
        numResults: payload.total_results,
        totalPages: payload.total_pages,
        currentPage: payload.page,
        imageBaseUrl: payload.imageBaseUrl,
        errorMessage: null
      };
    case 'GO_TO_PAGE_UPCOMING':
      return {
        ...state,
        movies: payload.results,
        currentPage: payload.page,
        errorMessage: null
      };
    case 'SEACH_BY_NAME':
      return {
        ...state,
        movies: payload.results,
        numResults: payload.total_results,
        totalPages: payload.total_pages,
        currentPage: payload.page,
        fromSearch: payload.fromSearch,
        title: payload.title,
        errorMessage: null
      };
    case 'INFO_BY_ID':
      return {
        ...state,
        movies: payload.info,
        errorMessage: null
      };
    default:
      return state;
  }
};