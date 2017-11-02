import React from 'react'
import { fetchWrapper } from './wrappers/fetchWrapper'

export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			filename: ''
		}
	}

	componentWillMount() {
		fetchWrapper('http://localhost:8080/files')
			.then(jsonResponse => jsonResponse.json())
			.then(filename => this.setState({filename}))
	}

  render() {
    return (
    	<div>
      	<h1>File Uploader</h1>
      	<div className='content'>{this.state.filename}</div>
      </div>
    )
  }
}
