import React, {Component} from 'react';
import {LabelInline} from "./LabelInline";

export default class App extends Component {

    render() {
        return <div className='container-fluid'>
            <div className='col-6 mx-auto mt-5 bg-light border'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={require('./img/ChildrenAtlasBook.jpg')}/>
                    </div>

                    <div className='col-6'>
                        <div className='row'>
                            <form className='row border'>
                                <LabelInline label='Name:' value='The Three Picks'/>
                                <LabelInline label='Number Pag:' value='54'/>
                                <LabelInline label='Price:' value='$ 255.0'/>
                                <LabelInline label='Units Sold:' value='3'/>
                            </form>

                            <form className='row border'>
                                <LabelInline label='Name:' value='The Martir'/>
                                <LabelInline label='Number Pag:' value='25'/>
                            </form>

                            <form className='row border'>
                                <LabelInline label='N° Books Sold' value='64'/>
                                <LabelInline label='Total Revenue' value='$ 123.2'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}