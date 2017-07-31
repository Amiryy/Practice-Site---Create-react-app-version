import React from 'react';
import '../styles/main.css';
import '../styles/library.css';
import BookForm from './BookForm';
import BooksList from './BooksList';

class LibraryProject extends React.Component{
	constructor (props) {
		super (props);
		this.state = {
			form : false,
			displayBooks: false,
			updateBooks: false
		}
	}
	showForm () {
		this.setState ({form : !this.state.form});			
	}
    handleSearch () {
    	this.setState({
    		displayBooks : true,
    		updateBooks : !this.state.updateBooks
    	});
    }

	render () {
		return (
			<div>
				<div className="intro">
			       <h1>Library</h1>
			       <h3>
			           <br />
			           Welcome to the Library page. Here you will find a library of books.
			           I have created this library using a database, which stores data of books and then representing it here, by request.
			           <br />
			           feel free to search, post and update my library.
			       </h3>
			    </div>

			    <div className="book-filter">
			      <button id="search-books"
			      		  onClick={this.handleSearch.bind(this)}>
			      		  Search for books
			      </button>
			      <button id="post-books"
			      		  onClick={this.showForm.bind(this)}>
			      		  Post a book
			      </button>
			    </div>
			    
			    <div id="post-form">
			    	<BookForm visible={this.state.form} />
			    </div>
			    
			    <div id="database">
			    	<BooksList display={this.state.displayBooks}
			    			   update={this.state.updateBooks} />
			    </div>
			</div>
		)
	}
}

export default LibraryProject;