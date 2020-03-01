import { fetchPage } from '../api/apiService';
import { useMoviesContext } from './useMoviesContext';

export const usePagination = () => {
  const { state, dispatch } = useMoviesContext();

  const fetchMoviesFromPage = async (page, fromSearch, title) => {
    const payload = await fetchPage(page, fromSearch, title);
    dispatch({
      type: 'GO_TO_PAGE_UPCOMING',
      payload: {
        ...payload,
        title: payload.title,
      }
    });
  }

  const { totalPages, fromSearch, title, currentPage } = state;

  return {
    totalPages,
    fromSearch,
    title,
    currentPage,
    goToPage: fetchMoviesFromPage
  }

}