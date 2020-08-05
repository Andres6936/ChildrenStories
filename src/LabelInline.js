import React, {Component} from "react";

export class LabelInline extends Component {

    render() {
        return <div className='row'>
            <div className='col-6'>
                <label className='col-form-label'>{this.props.label}</label>
            </div>
            <div className='col-6'>
                <input type='text' className='form-control-plaintext'
                       readOnly={true} value={this.props.value}/>
            </div>
        </div>
    }
}