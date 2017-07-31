import React from 'react';
import '../styles/main.css';

class TextInput extends React.Component{
    constructor () {
        super ();
        this.state = {
            text : ''
        }
    }
    sendValue () {
        this.props.value(this.state.text)
    }
    handleChange (e) {
        this.setState({
            text : e.target.value
        }, this.sendValue.bind(this));
        
    }
    render() {
        return(
             <input 
                type="text"
                className={this.props.className} 
                id={this.props.id} 
                autoComplete="off"
                value={this.state.text}
                placeholder={this.props.placeholder}
                onChange={this.handleChange.bind(this)} />
		)
	}
}

export default TextInput;