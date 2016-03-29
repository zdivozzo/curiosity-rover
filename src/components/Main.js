require('normalize.css');
require('styles/App.css');
require('styles/foundation.min.css');

import React from 'react'
import FormInput from './FormInput'
import ImageGallery from './ImageGallery'
import store from '../store'
import { connect } from 'react-redux'
import { createStore } from 'redux'
import { getImages } from '../actions/index'

class Container extends React.Component {
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(getImages('FHAZ','2015-01-01'))
  }
  render(){
    const { dispatch,state } = this.props
    return(
      <section className='row'>
        <h1>Curiosity Rover</h1>
        <FormInput href="#" handleSubmit={(camera,date)=>dispatch(getImages(camera,date))} />
        <ImageGallery photos={state.photos} />
      </section>
      )
  }
}
function mapStateToProps(state){
  return {
    state
  }
}

export default connect(mapStateToProps)(Container)
