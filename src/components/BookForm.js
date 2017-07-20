import React from 'react';
import '../styles/main.css';

class BookForm extends React.Component{
    constructor () {
        super ();
        this.state = {
            title : '',
            author : '',
            genre : '',
            read : false
        }
    }
    handleTitleChange (e) {
        this.setState({
            title : e.target.value
        });
    }
    handleAuthorChange (e) {
        this.setState({
            author : e.target.value
        });
    }
    handleGenreChange (e) {
        this.setState({
            genre : e.target.value
        });
    }
    handleReadChange (e) {
        this.setState({
            read : e.target.checked
        });
    }
    handleSend (event) {
        event.preventDefault();
        this.setState({
            title : '',
            author : '',
            genre : '',
            read : false
        });
    }
    render() {
        return(
        	<div id="book-form"
                 className={this.props.visible ? "visible" : "hidden"}>
            	<div>
                    <p>Title: <input 
                                    type="text" 
                                    id="title" 
                                    autoComplete="off"
                                    value={this.state.title}
                                    onChange={this.handleTitleChange.bind(this)} />
                    </p>
                    <p>Author: <input 
                                    type="text" 
                                    id="author" 
                                    autoComplete="off"
                                    value={this.state.author}
                                    onChange={this.handleAuthorChange.bind(this)} />
                      </p>
                      <p>Genre: <input 
                                    type="text" 
                                    id="genre" 
                                    autoComplete="off"
                                    value={this.state.genre}
                                    onChange={this.handleGenreChange.bind(this)} />
                      </p>
                      <p>Read? <input 
                                    type="checkbox" 
                                    id="read"
                                    value={this.state.read} 
                                    checked={this.state.read}
                                    onChange={this.handleReadChange.bind(this)}/>
                                <label htmlFor="read"></label>
                      </p>
                </div>
                <button id="book-send" 
                        onClick={this.handleSend.bind(this)}>
                        Send
                </button>
                <div id="post-message"></div>
          	</div>
   			
		)
	}
}

export default BookForm;