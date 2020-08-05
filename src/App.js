import React, {Component} from 'react';
import {LabelInline} from "./LabelInline";

export default class App extends Component {

    render() {
        return <div className='container-fluid'>
            <div className='col-6 mx-auto mt-5'>
                <div className='row'>
                    <div className='col-6'>

                    </div>

                    <div className='col-6 border'>
                        <div className='row'>
                            <form className='row g-3'>
                                <LabelInline label='Name:' value='The Three Picks'/>

                                <div className='col-12'>
                                    <label>Number Pag.:</label>
                                </div>

                                <div className='col-12'>
                                    <label>Price:</label>
                                </div>

                                <div className='col-12'>
                                    <label>Units Sold:</label>
                                </div>
                            </form>

                            <form className='col-12'>

                            </form>

                            <form className='col-12'>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}