import { Component } from "react";
import './imagesSlider.css'

class ImagesSlider extends Component {

    constructor(props) {
        super(props);
        this.state={
            gallery: [],
            galleryLength: 0,
            currentImageIndex: 0,
            next: false,
            previous: false,
        }
    }
    onClick = (selected) => {
        if (selected.target.name === 'next') {
            this.setState(state => ({...state, currentImageIndex: this.state.currentImageIndex + 1 }))
        } else {
            this.setState(state => ({...state, currentImageIndex: this.state.currentImageIndex - 1 }))
        }
        
    }
    componentDidMount(){
        this.setState(state => ({...state, gallery: this.props.gallery, galleryLength: this.props.gallery.length }))
    }
    componentDidUpdate(_prevProps, prevState) {
        if(this.state.gallery !== prevState.gallery) {
            if(this.state.currentImageIndex === 0) this.setState(state => ({...state, previous: false, next: true}))
            if(this.state.currentImageIndex === this.state.galleryLength-1) this.setState(state => ({...state, next: false}))

        }

        if(this.state.currentImageIndex !== prevState.currentImageIndex) {
            if(this.state.currentImageIndex === 0) this.setState(state => ({...state, previous: false}))
            if(this.state.currentImageIndex === this.state.galleryLength-1) this.setState(state => ({...state, next: false}))
            if(this.state.currentImageIndex !== 0 && this.state.currentImageIndex !== this.state.galleryLength-1) this.setState(state => ({...state, next: true, previous: true}))
        }
    }

render () {
    return (
        <div className="sliderContainer" >
            <img src={this.state.gallery[this.state.currentImageIndex]} alt="view here" className='imageItself'/>
            <div className="buttonsContainer">
                <button
                    name='previous'
                    className={this.state.previous ? "clickEnable" : "clickDisable"}
                    disabled={!this.state.previous}
                    onClick={this.onClick}
                >
                    {'<'}
                </button>
                <button
                    name='next'
                    className={this.state.next ? "clickEnable" : "clickDisable"}
                    disabled={!this.state.next}
                    onClick={this.onClick}
                >
                        {'>'}
                </button>
            </div>
        </div>
    )
}
}
export default ImagesSlider