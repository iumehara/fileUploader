import './setup.js'
import React from 'react'
import { shallow, mount } from 'enzyme'
import * as fetchWrapper from '../src/wrappers/fetchWrapper'

import App from '../src/App'

describe('App', () => {
	it('renders the title', () => {
		const mock = jest.spyOn(fetchWrapper, 'fetchWrapper').mockReturnValue({then: () => {}})
		const app = shallow(<App/>)
		
		expect(app.find('h1').text()).toEqual('File Uploader')

		mock.mockRestore()
	})

	it('loads data from server', () => {
		const mock = jest.spyOn(fetchWrapper, 'fetchWrapper').mockReturnValue({then: (callback) => {callback('my string')}})

		const app = mount(<App/>)

		expect(app.find('.content').text()).toEqual('my string')
		mock.mockRestore()
	})
})