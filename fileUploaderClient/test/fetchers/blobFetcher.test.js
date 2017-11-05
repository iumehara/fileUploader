import * as fetch from '../../src/wrappers/fetchWrapper'
import { blobFetcher } from '../../src/fetchers/blobFetcher'

describe('blobFetcher', () => {
  it('works', () => {
    const blobSpy = jest.fn()
    const response = {blob: blobSpy}
    jest.spyOn(fetch, 'fetchWrapper')
      .mockReturnValue({then: (callBack) => callBack(response)})

    blobFetcher()

    expect(blobSpy).toHaveBeenCalled()
  })
})
