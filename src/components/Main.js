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






























































// import { visibility,update,add } from '../actions/index'
//
// class TodoList extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     const { todos,dispatch } = this.props
//     return(
//       <div className="panel">
//         <AddTodo addNew = {(todoItem)=>dispatch(add(todoItem))} />
//         {
//           todos.generate.map(function(todo){
//             if(todos.visibilityFilter == 'all' || (todos.visibilityFilter == 'complete' && todo.status==1) || (todos.visibilityFilter == 'incomplete' && todo.status==0)){
//               return <Todo todoItem={todo.todo} currentStatus={todo.status} id={todo.id} resolve={(currentStatus,id,e) => { e.preventDefault(); dispatch(update(currentStatus,id))}}/>
//             }
//           })
//         }
//         <Filters filter={(toFilterBy) => dispatch(visibility(toFilterBy))} />
//       </div>
//       )
//   }
// }
//
// class AddTodo extends React.Component {
//     constructor(props, context) {
//       super(props, context)
//     }
//     render(){
//       return <input type="text" ref="newTodo" onKeyDown={this.handleSubmit.bind(this)}></input>
//     }
//
//     handleSubmit(e){
//       const text = this.refs.newTodo.value;
//       if(e.which == 13){
//         this.props.addNew(text);
//       }
//     }
// }
//
// const Todo = ({todoItem,resolve,currentStatus,id}) => (
//   <div>
//     <a href="#" className={currentStatus ? 'button alert' : 'button success'} onClick={resolve.bind(null,!currentStatus,id)}>{todoItem}</a>
//   </div>
// )
//
// const Filters = ({filter}) => (
//   <div>
//     (<a href="#" onClick={filter.bind(null,'incomplete')}>Show Incomplete Only</a>)
//     (<a href="#" onClick={filter.bind(null,'complete')}>Show Completed Only</a> )
//     (<a href="#" onClick={filter.bind(null,'all')}>Show All</a>)
//   </div>
// )
