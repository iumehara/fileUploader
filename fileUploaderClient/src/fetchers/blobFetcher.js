import { fetchWrapper } from '../wrappers/fetchWrapper'

export const blobFetcher = (url, options) => {
  return fetchWrapper(url, options)
    .then(response => response.blob())
}
