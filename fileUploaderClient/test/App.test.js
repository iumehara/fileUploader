import React from 'react'
import { shallow } from 'enzyme'
import * as blobFetcher from '../src/fetchers/blobFetcher'
import * as URL from '../src/wrappers/urlWrapper'

import App from '../src/App'

describe('App', () => {
	it('renders ImageGetter', () => {
		const app = shallow(<App/>)

		expect(app.find('ImageGetter').length).toBe(1)
	})
})
