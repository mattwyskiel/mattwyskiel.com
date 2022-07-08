import axios from 'axios';
import request from 'graphql-request';
import useSWR from 'swr';

const axiosFetcher = url => axios.get(url).then(res => res.data);

export function useAPI(endpoint) {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_PORTFOLIO_URL + endpoint, axiosFetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: !!error,
  };
}

export const graphqlFetcher = query => request(process.env.NEXT_PUBLIC_PORTFOLIO_URL, query);

export function useGraphQLAPI(query) {
  const { data, error } = useSWR(query, graphqlFetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: !!error,
  };
}
