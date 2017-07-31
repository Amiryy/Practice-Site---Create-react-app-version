import React from 'react';
import '../styles/main.css';

class CheckboxInput extends React.Component{
    constructor () {
        super ();
        this.state = {
            checked : false
        }
    }
    sendValue () {
        this.props.value(this.state.checked)
    }
    handleChange (e) {
        this.setState({
            checked : !this.state.checked
        }, this.sendValue.bind(this));
        
    }
    render() {
        return(
            <div id="check-box">
            <input 
                type="checkbox"
                id={this.props.id}
                className={this.props.className}
                value={this.state.checked} 
                checked={this.state.checked}
                onChange={this.handleChange.bind(this)}/>
            <label className={this.props.className} 
                   htmlFor={this.props.id}></label>
            </div>
		)
	}
}

export default CheckboxInput;