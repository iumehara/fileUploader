import React from 'react'
import { shallow } from 'enzyme'
import * as blobFetcher from '../src/fetchers/blobFetcher'
import * as URL from '../src/wrappers/urlWrapper'

import ImageGetter from '../src/ImageGetter'

describe('ImageGetter', () => {
	it('loads data from server', () => {
		const mock = jest.spyOn(blobFetcher, 'blobFetcher')
			.mockReturnValue({then: (callback) => {callback('./kitten.jpg')}})

		jest.spyOn(URL, 'createObjectURL')
			.mockReturnValue('my-image.jpg')


		const app = shallow(<ImageGetter/>)

		expect(app.find('img').props().src).toEqual('my-image.jpg')
		mock.mockRestore()
	})
})
