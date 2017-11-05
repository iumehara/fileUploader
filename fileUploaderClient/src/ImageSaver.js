import React from 'react'
import { fetchWrapper } from './wrappers/fetchWrapper'

export default class ImageSaver extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image: ''
    }

    this.fileWasSelected = this.fileWasSelected.bind(this)
    this.uploadButtonWasClicked = this.uploadButtonWasClicked.bind(this)
  }

  fileWasSelected(event) {
    console.log('file selected', event.target.files[0])
    const image = event.target.files[0]
    this.setState({image})
  }

  uploadButtonWasClicked(event) {
    const formData  = new FormData();
    formData.append('image', this.state.image)

    const options = {
      method: 'POST',
      body: formData
    }

    fetchWrapper('http://localhost:8080/files', options)
      .then(response => {
        console.log('response')
      })
  }

  render() {
    return (
      <div style={{'border': '1px solid black'}}>
        <h2>Image Saver</h2>
        <input type='file' encType="multipart/form-data" onChange={this.fileWasSelected}/>
        <button onClick={this.uploadButtonWasClicked}>upload</button>
      </div>
    )
  }
}
