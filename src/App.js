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


    render() {
        return <div className='container-fluid'>
            <div className='col-12 col-md-10 col-xl-5 mx-lg-auto mt-5 bg-light border'>
                <div className='row'>
                    <div className='col-12 col-md-6 gx-xl-1 col-xl-6'>
                        <img className='img-fluid' src={require('./img/ChildrenAtlasBook.jpg')}/>
                    </div>

                    <div className='col-12 col-md-6 col-xl-6'>
                        <div className='row'>
                            <form className='row mb-2 border-bottom'>
                                <LabelInline label='Name:' value={dataBooks[this.state.index].name}/>
                                <LabelInline label='Number Pag:' value='54'/>
                                <LabelInline label='Price:' value='$ 255.0'/>
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
                                <button className='btn btn-primary'>Prev</button>
                                <button className='btn btn-danger'>Buy</button>
                                <button className='btn btn-primary'>Next</button>
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