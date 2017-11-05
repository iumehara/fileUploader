import { fetchWrapper } from '../wrappers/fetchWrapper'

export const blobFetcher = options => {
  return fetchWrapper(options)
    .then(response => response.blob())
}
