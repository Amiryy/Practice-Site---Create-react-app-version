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
            read : false,
            info: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (e) {
        this.setState({
            [e.target.id] : e.target.value
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
            read : false,
            info: '',
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
              read: this.state.read,
              info: this.state.info
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
                                       onChange={this.handleChange} />
                    </p>
                    <p>Author: <input type="text"
                                       id="author" 
                                       autoComplete="off"
                                       value={this.state.author}
                                       onChange={this.handleChange} />
                    </p>
                      <p>Genre: <input type="text"
                                       id="genre" 
                                       autoComplete="off"
                                       value={this.state.genre}
                                       onChange={this.handleChange} />
                    </p>
                    <p>Information source:
                        <input type="text"
                               id="info"
                               autoComplete="off"
                               value={this.state.info}
                               onChange={this.handleChange} />
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