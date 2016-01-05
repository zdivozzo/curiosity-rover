import store from '../store'
import $ from 'jquery'

const apiKey = 'DEMO_KEY'

export function getImages(camera,date){
  let searchString = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+date+'&camera='+camera+'&api_key='+apiKey+'';
  return dispatch => {
    $.get(searchString,function(result){
      console.log(result)
      dispatch(sendImages(camera,date,result.photos))
    })
    .fail(() => dispatch(sendImages(camera,date,[])))
  }
}

export function sendImages(camera,date,photos){
  console.log(photos)
  return {type:'sendImages',camera:camera,date:date,photos:photos}
}
