import React from 'react'
import { blobFetcher } from './fetchers/blobFetcher'
import { createObjectURL } from './wrappers/urlWrapper'

export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			filename: '',
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
    return (
    	<div>
      	<h1>File Uploader</h1>
      	<div className='content'>{this.state.filename}</div>
				<img src={this.state.imageSrc} width='300px'/>
      </div>
    )
  }
}
