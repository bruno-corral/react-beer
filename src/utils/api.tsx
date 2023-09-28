import axios from 'axios';

export const request = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
});

export const requestPunk = axios.create({
    baseURL: 'https://api.punkapi.com/v2/'
});

export const api = {
    signup: async (name: string, email: string, password: string) => {
        const response = await request.post('user/signup', { name, email, password });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        const response = await request.post('user/signin', { email, password });
        return response.data;
    },
    logout: async () => {
        return { status: true };
    },
    validateToken: async (token: string) => {
        return {
            user: { id: 2, name: 'Bruno', email: 'bruno@gmail.com' }
        }
    }
}

export const punkApi = {
    getBeers: async () => {
        const response = await requestPunk.get('beers');
        return response.data
    },
    getSearchBeer: async (search: string | undefined) => {
        const response = await requestPunk.get(`beers?beer_name=${search}`);
        return response.data;
    },
    getBeer: async (id: string | undefined) => {
        const response = await requestPunk.get(`beers/${id}`);
        return response.data;
    }
}