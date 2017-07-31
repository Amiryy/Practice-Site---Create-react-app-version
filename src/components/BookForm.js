import React from 'react';
import '../styles/main.css';

class BookForm extends React.Component{
    constructor () {
        super ();
        this.state = {
            api: 'http://localhost:8000/api/Books',
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
            author: e.target.value
        });
    }
    handleGenreChange (e) {
        this.setState({
             genre : e.target.value
        });
    }
    handleReadChange () {
        this.setState({
             read : !this.state.read
        });
    }
    handleSend (event) {
        event.preventDefault();
        this.postRequest();
        this.setState({
            title : '',
            author : '',
            genre : '',
            read : false
        });
    }
    postRequest () {
        fetch(this.state.api, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              title: this.state.title,
              author: this.state.author,
              genre: this.state.genre,
              read: this.state.read
            })
        });
        let postMessage = `<p>${this.state.title} has been added.</p>`
        document.getElementById('post-message').innerHTML = postMessage;
    }
    render() {
        return(
        	<div id="book-form"
                 className={this.props.visible ? "visible" : "hidden"}>
            	<div>
                    <p>Title: <input type="text"
                                       id="title" 
                                       autoComplete="off"
                                       value={this.state.title}
                                       onChange={this.handleTitleChange.bind(this)} />
                    </p>
                    <p>Author: <input type="text"
                                       id="author" 
                                       autoComplete="off"
                                       value={this.state.author}
                                       onChange={this.handleAuthorChange.bind(this)} />
                      </p>
                      <p>Genre: <input type="text"
                                       id="genre" 
                                       autoComplete="off"
                                       value={this.state.genre}
                                       onChange={this.handleGenreChange.bind(this)} />
                      </p>
                      <p>Read? <input type="checkbox"
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