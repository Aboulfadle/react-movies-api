import {client} from "../../client/client.js";
import {
    FETCH_MOVIES,
    FETCH_MOVIES_BY_CATEGORY, FETCH_MOVIES_BY_KEYWORD,
} from "../actionsType";

export function fetchMovies(page = 1, pathParam = "popular", totalPagesRef) {
    const pageParam = {
        params: {
            page: page
        }
    };
    return dispatch => {
        dispatch({
            type: FETCH_MOVIES,
            payload: client.get(`/movie/${pathParam}`, pageParam).then(response => {
                if (totalPagesRef) {
                    totalPagesRef.current = response.data.total_pages;
                }
                return response;
            }),
        });
    };
}

export function fetchMoviesByGenre(page = 1, categoryId = "") {
    return dispatch => {
        dispatch({
            type: FETCH_MOVIES_BY_CATEGORY,
            payload: client.get(`/genre/${categoryId}/movies`, {
                params: {
                    page: page,
                    include_adult: false,
                    sort_by: "created_at.asc"
                }
            }),
            categoryId : categoryId,
        });
    };
}

export function fetchMoviesByKeyword(page = 1, keywordId = 0, totalPagesRef) {
    console.log('keywordId = ' + keywordId)
    return dispatch => {
        dispatch({
            type: FETCH_MOVIES_BY_KEYWORD,
            payload: client.get(`/keyword/${keywordId}/movies`, {
                params: {
                    page: page,
                    include_adult: false,
                }
            }).then(response => {
                if (totalPagesRef) {
                    totalPagesRef.current = response.data.total_pages;
                }
                return response;
            }),
            categoryId : keywordId,
        });
    };
}