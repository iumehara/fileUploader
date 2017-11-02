import './setup.js'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../src/App'

describe('App', () => {
	it('renders the title', () => {
		const app = shallow(<App/>)
		expect(app.find('h1').text()).toEqual('File Uploader')
	})
})