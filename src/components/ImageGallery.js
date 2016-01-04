import React from 'react'

class ImageGallery extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    let {photos} = this.props
    return (
      <div>
        {
          photos.length > 0 ?
          photos.map((photo) => <img className="columns large-6" src={photo.img_src} />) :
          <div className="panel">Looks like the rover didn&#39;t feel like taking a picture of that</div>
        }
      </div>
    )
  }
}

export default ImageGallery
