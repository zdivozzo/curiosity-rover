import {combineReducers} from 'redux'

let initialState = {
  camera: 'FHAZ',
  date:'2015-01-01',
  photos: []
}

export default function visibility(state=initialState,action){
    switch (action.type){
      case 'sendImages':
        console.log(state)
        return Object.assign({},state,{
          camera:action.camera,
          date:action.date,
          photos:action.photos
        })
      default:
        return state
    }
}
