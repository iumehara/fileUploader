import React from 'react'
import { blobFetcher } from './fetchers/blobFetcher'
import { createObjectURL } from './wrappers/urlWrapper'

export default class ImageGetter extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			imageSrc: ''
		}
	}

	componentWillMount() {
		blobFetcher('http://localhost:8080/files/photo')
			.then(blob => {
				const imageSrc = createObjectURL(blob)
				this.setState({imageSrc})
			})
	}

  render() {
    return <img src={this.state.imageSrc} width='300px'/>
  }
}
