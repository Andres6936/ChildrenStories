import React, {Component} from 'react';
import {LabelInline} from "./LabelInline";
import {dataBooks} from "./data";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state ={
            index : 0,
        }
    }

    prevBook = () => {
        if (this.state.index === 0){
            this.setState({index: dataBooks.length - 1})
        } else {
            this.setState({index: this.state.index - 1})
        }
    }

    nextBook = () => {
        if (this.state.index === dataBooks.length - 1){
            this.setState({index: 0})
        } else {
            this.setState({index: this.state.index + 1})
        }
    }

    getCoverCurrentBook(){
        return dataBooks[this.state.index].cover;
    }

    getNameCurrentBook(){
        return dataBooks[this.state.index].name;
    }

    getPagesCurrentBook(){
        return dataBooks[this.state.index].pages;
    }

    getPriceCurrentBook(){
        return dataBooks[this.state.index].price;
    }

    render() {
        return <div className='container-fluid'>
            <div className='col-12 col-md-10 col-xl-5 mx-lg-auto mt-5 bg-light border'>
                <div className='row'>
                    <div className='col-12 col-md-6 gx-xl-1 col-xl-6'>
                        <img className='img-fluid' src={this.getCoverCurrentBook()} alt='Cover' />
                    </div>

                    <div className='col-12 col-md-6 col-xl-6'>
                        <div className='row'>
                            <form className='row mb-2 border-bottom'>
                                <LabelInline label='Name:' value={this.getNameCurrentBook()}/>
                                <LabelInline label='Number Pag:' value={this.getPagesCurrentBook()}/>
                                <LabelInline label='Price:' value={this.getPriceCurrentBook()}/>
                                <LabelInline label='Units Sold:' value='3'/>
                            </form>

                            <form className='row mb-2 border-bottom'>
                                <LabelInline label='Name:' value='The Martir'/>
                                <LabelInline label='Number Pag:' value='25'/>
                            </form>

                            <form className='row mb-2 border-bottom'>
                                <LabelInline label='N° Books Sold' value='64'/>
                                <LabelInline label='Total Revenue' value='$ 123.2'/>
                            </form>
                        </div>

                        <div className='row mx-auto mr-4 mt-4'>
                            <div className='btn-group'>
                                <button className='btn btn-primary' onClick={this.prevBook}>Prev</button>
                                <button className='btn btn-danger'>Buy</button>
                                <button className='btn btn-primary' onClick={this.nextBook}>Next</button>
                            </div>
                        </div>

                        <div className='row mx-auto mr-4 mt-4'>
                            <div className='btn-group'>
                                <button className='btn btn-primary'>Option 0</button>
                                <button className='btn btn-primary'>Option 1</button>
                                <button className='btn btn-primary'>Option 2</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}