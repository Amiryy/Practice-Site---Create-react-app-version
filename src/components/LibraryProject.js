import React from 'react';
import '../styles/main.css';
import '../styles/library.css';
import BookForm from './BookForm';
import Book from './Book';

class LibraryProject extends React.Component{
	constructor (props) {
		super (props);
		this.getData = this.getData.bind(this);
		this.state = {
			form : false,
			database : false
		}
	}
	showForm () {
		this.setState ({form : !this.state.form});			
	}
	getData (method, url) {
        return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open(method, url);
          xhr.onload = function(){
             if(this.status >= 200 && this.status < 300){
                  resolve(xhr.response);
             }else{
                  reject({
                     status : this.status,
                     statusText : xhr.statusText
                      });
                  }
              };
              xhr.onerror = function(){
               reject({
                    status : this.status,
                    statusText : xhr.statusText   
              });
            };
            xhr.send();
          });  
        };
    handleGetRequest () {
      	this.getData('GET', 'http://localhost:8000/api/Books/').then(function(data){
            let Books = JSON.parse(data);
            let output = '';
            for (let book of Books){
                output += (
                  <Book id = {book._id}
                  		title = {book.title}
                  		author = {book.author}
                  		genre = {book.genre}
                  		read = {book.read} />
                ); 
              };
              this.setState ({
              	database : true
              })
              console.log('Library loaded.')
        }).catch(function(err){
                console.log(err);
            });
    }
	render () {
		return(
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
			      		  onClick={this.handleGetRequest.bind(this)}>
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
			      <h4>Books will be shown here...</h4>
			      <Book />

			    </div>
			</div>
		)
	}
}

export default LibraryProject;