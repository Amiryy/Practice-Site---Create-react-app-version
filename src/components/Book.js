import React from 'react';
import '../styles/main.css';

class Book extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            api: 'http://localhost:8000/api/Books',
            edit: false,
            deleted: false,
            title: this.props.title,
            author: this.props.author,
            genre: this.props.genre,
            read: this.props.read,
            editTitle: this.props.title,
            editAuthor: this.props.author,
            editGenre: this.props.genre,
            editRead: this.props.read
        }
    }
    deleteBook () {
        fetch(this.state.api + '/' + this.props.id, {
            method: 'DELETE'
          })
          .then(response => response.text()
            .then(text => console.log(text, this.state.title,' has been deleted')));
          this.setState({
            deleted: true
          })
    }
    editBook () {
        this.setState({
            edit: true
        })
    }
    cancelEdit () {
        this.setState({
            edit: false,
            editTitle: this.props.title,
            editAuthor: this.props.author,
            editGenre: this.props.genre,
            editRead: this.props.read
        })
    }
    saveBook () {
        this.setState({
            edit: false,
            title: this.state.editTitle,
            author: this.state.editAuthor,
            genre: this.state.editGenre,
            read: this.state.editRead
        });
        fetch(this.state.api + '/' + this.props.id, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'PATCH',                                                              
            body: JSON.stringify({
                title: this.state.editTitle,
                author: this.state.editAuthor,
                genre: this.state.editGenre,
                read: this.state.editRead
            })                                        
        })
    }
    handleTitleChange (e) {
        this.setState({
            editTitle : e.target.value
        });
    }
    handleAuthorChange (e) {
        this.setState({
            editAuthor: e.target.value
        });
    }
    handleGenreChange (e) {
        this.setState({
             editGenre : e.target.value
        });
    }
    handleReadChange () {
        this.setState({
             editRead : !this.state.editRead
        });
    }
    render() {
        return(
            <li key={this.props.id}
                className={(this.state.edit ? 'edit' : '') + (this.state.deleted ? 'hidden' : '')} >
                <p><span className="noedit title">{this.state.title}</span>
                    <input type="text" className="edit title"
                           value={this.state.editTitle} 
                           onChange={this.handleTitleChange.bind(this)}/>
                </p>
                <p>Author: <span className="noedit author">{this.state.author}</span>
                    <input type="text" className="edit author"
                           value={this.state.editAuthor} 
                           onChange={this.handleAuthorChange.bind(this)}/>
                </p>
                <p>Genre: <span className="noedit genre">{this.state.genre}</span>
                    <input type="text" className="edit genre"
                           value={this.state.editGenre} 
                           onChange={this.handleGenreChange.bind(this)}/>
                </p>
                <p>Read: <span className="noedit read">{this.state.read ? "Yes":"No"}</span>
                    <input type="checkbox" 
                           className="edit read" 
                           value={this.state.editRead}
                           checked={this.state.editRead}
                           onChange={this.handleReadChange.bind(this)}/>
                </p>
                <button className='remove'
                        onClick={this.deleteBook.bind(this)}>Delete</button>
                <button className="editBook noedit"
                        onClick={this.editBook.bind(this)}>Edit</button>
                <button className="saveEdit edit"
                        onClick={this.saveBook.bind(this)}>Save</button>
                <button className="cancelEdit edit"
                        onClick={this.cancelEdit.bind(this)}>Cancel</button> 
            </li>
        )  
	}
}

export default Book;