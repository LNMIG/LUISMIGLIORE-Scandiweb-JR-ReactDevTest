import { Component } from "react";
import { connect } from "react-redux";
import postPaginationData from '../../redux/actions/postPaginationData'
import './pagination.css'

class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            currentpage: 1,
            itemsPerPage: 6,
            numberOfPages: 0,
            localProductsByCategory: [],
            previous: false,
            next: false,
        }
    }

    onSlice = (iPP,cP,lPBC) => {
        let sliceStart = iPP * (cP - 1)
        let sliceEnd   = iPP * cP
        let postData = lPBC.slice(sliceStart, sliceEnd)
        this.props.postPaginationData(postData)
    }

    onClick = (selected) => {
        if(selected.target.name === 'next') this.setState(state => ({...state, currentpage: this.state.currentpage + 1}))
        if(selected.target.name === 'prev') this.setState(state => ({...state, currentpage: this.state.currentpage - 1}))
    }

    componentDidUpdate (prevProps, prevState) {
        if(this.props.productsByCategory !== prevProps.productsByCategory) {
            this.setState(state => ({...state,  
                counter: this.state.counter +1,
                currentpage: 1,
                numberOfPages: 0,
                localProductsByCategory: this.props.productsByCategory,
                previous: false,
                next: false,
            }))
            this.setState(state => ({...state,
                numberOfPages: Math.ceil(this.props.productsByCategory.length / this.state.itemsPerPage)
            }))
        }

        if (this.state.counter !== prevState.counter) {
            this.onSlice(this.state.itemsPerPage, this.state.currentpage, this.state.localProductsByCategory)
            if (this.state.currentpage !== this.state.numberOfPages) this.setState(state=> ({...state, next: true}))
        }

        if (this.state.currentpage !== prevState.currentpage && this.state.counter === prevState.counter) {
            if(this.state.currentpage === 1) this.setState(state => ({...state, previous: false, next: true}))
            if(this.state.currentpage === this.state.numberOfPages) this.setState(state => ({...state, next: false, previous: true}))
            this.onSlice(this.state.itemsPerPage, this.state.currentpage, this.state.localProductsByCategory)
        }
    }

    componentWillUnmount () {
        this.setState(state => ({...state, counter: 0}))
    }

    render () {
        return (
            <div className="pagination_wrapper">
                <button
                    name='prev'
                    className={this.state.previous ? "clickEnable" : "clickDisable"}
                    disabled={!this.state.previous}
                    onClick={this.onClick}
                >
                    {'<'}
                </button>
                <div className="page">
                    {`${this.state.currentpage}/${this.state.numberOfPages}`}
                </div>
                <button
                    name='next'
                    className={this.state.next ? "clickEnable" : "clickDisable"}
                    disabled={!this.state.next}
                    onClick={this.onClick}
                >
                    {'>'}
                </button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      productsByCategory: state.productsByCategory,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      postPaginationData: (paginationData) => dispatch(postPaginationData(paginationData)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Pagination);