import axios, { AxiosError, AxiosTransformer } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import { QueryOptions } from 'react-query'
import snakecaseKeys from 'snakecase-keys'

import { TOKEN_KEY } from 'constants/localStorage'

const API_BASE_URL = process.env.REACT_APP_BASE_URL ?? '/api/v1'

/**
 * Ascertains whether the query should retry.
 * @note to only be used with react-query's `useQuery` function.
 *
 * @param failureCount the current query failure count
 * @param error the error returned
 *
 * @returns true if current failure count is below 4, and the returned error status code is not 4xx, false otherwise
 */
export const shouldRetryQuery: QueryOptions['retry'] = (
  failureCount,
  error,
) => {
  if (!axios.isAxiosError(error)) {
    return false
  }
  const status = error.response?.status
  return (
    failureCount < 4 &&
    !!status &&
    status !== 404 &&
    status < 400 &&
    status >= 500
  )
}

export const ApiService = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  transformResponse: [
    // Transform defaults required BEFORE camelizing to perform conversion of
    // JSON to object and other default transformations.
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    (data) =>
      data
        ? camelcaseKeys(data, {
            deep: true,
            // Do not camelcase hyphenated keys.
            exclude: [/(?=\S*[-])([\w-]+)/],
          })
        : data,
  ],
  transformRequest: [
    (data) => (data ? snakecaseKeys(data, { deep: true }) : data),
    // Transform defaults required AFTER snakecasing to perform conversion of
    // object to JSON and other default transformations.
    ...(axios.defaults.transformRequest as AxiosTransformer[]),
  ],
})

ApiService.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem(TOKEN_KEY) ?? 'null')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    if (config.params) {
      config.params = snakecaseKeys(config.params, { deep: true })
    }
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  },
)

ApiService.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Remove token from localStorage
      localStorage.removeItem(TOKEN_KEY)
      // Event to let useLocalStorage know that token is being deleted.
      window.dispatchEvent(new Event('local-storage'))
    }

    return Promise.reject(error)
  },
)
