import { Component } from 'react'
import './selector-Button.css'

class Button extends Component {

render (){
    return (
        <button
          className='dropdown_activator'
          aria-haspopup="true"
          aria-controls={`Showing "${this.props.state.currentCategory.toLowerCase()}"`}
          onClick={this.props.onClick}
          ref={this.props.refference}
        >
          {`Showing "${this.props.state.currentCategory.toLowerCase()}"`}
          {this.props.vector ?
          (
            this.props.state.isOpen ?
            (
              <svg
                height="24"
                fill="rgb(70,70,70)"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m0 0h24v24h-24z" fill="none" />
                <path d="m7.41 15.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z" />
              </svg>
            )
            :
            (
              <svg
                height="24"
                fill="rgb(70,70,70)"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m0 0h24v24h-24z" fill="none" />
                <path d="m7.41 8.59 4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
              </svg>
            )
          )
          :
            null
          }
        </button>
    )
}
}
export default Button