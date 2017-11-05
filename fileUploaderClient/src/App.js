import React from 'react'
import ImageGetter from './ImageGetter'
import ImageSaver from './ImageSaver'

export default class App extends React.Component {
  render() {
    return (
    	<div>
      	<h1>File Uploader</h1>
				<ImageGetter/>
				<ImageSaver/>
      </div>
    )
  }
}
