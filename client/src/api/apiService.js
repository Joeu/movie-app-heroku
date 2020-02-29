import { SERVER_BASE_URL } from '../utils/constants';

export const fetchUpcomingMovies = async () =>
  await fetch(`${SERVER_BASE_URL}/upcoming`)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));


export const searchByName = async searchText =>
  await fetch(`${SERVER_BASE_URL}/search?title=${searchText}`)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));


export const fetchPage = async (page, fromSeach, title) =>
  await fetch(`${SERVER_BASE_URL}/pagination?page=${page}&fromSearch=${fromSeach}&title=${title}`)
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch(err => console.log(err));
