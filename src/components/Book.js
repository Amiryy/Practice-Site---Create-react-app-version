import React from 'react';
import '../styles/library.css';

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
            info: this.props.info,
            editTitle: this.props.title,
            editAuthor: this.props.author,
            editGenre: this.props.genre,
            editRead: this.props.read,
            editInfo: this.props.info
        };
        this.handleChange = this.handleChange.bind(this);
        this.extractRootDomain = this.extractRootDomain.bind(this);
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
            editRead: this.props.read,
            editInfo: this.props.info
        })
    }
    saveBook () {
        this.setState({
            edit: false,
            title: this.state.editTitle,
            author: this.state.editAuthor,
            genre: this.state.editGenre,
            read: this.state.editRead,
            info: this.state.editInfo
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
    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleReadChange () {
        this.setState({
             editRead : !this.state.editRead
        });
    }
    extractHostname(url) {
        let hostname;
        //find & remove protocol (http, ftp, etc.) and get hostname
        if (url.indexOf("://") > -1) {
            hostname = url.split('/')[2];
        }
        else {
            hostname = url.split('/')[0];
        }
        //find & remove port number
        hostname = hostname.split(':')[0];
        //find & remove "?"
        hostname = hostname.split('?')[0];
        return hostname;
    }
    extractRootDomain(url) {
        let domain = this.extractHostname(url),
            splitArr = domain.split('.'),
            arrLen = splitArr.length;

        //extracting the root domain here
        if (arrLen > 2) {
            domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        }else if(this.state.info === '' ){
            return 'No Source';
        }
        return domain;
    }
    render() {
        return(
            <li key={this.props.id}
                className={(this.state.edit ? 'edit' : '') + (this.state.deleted ? 'hidden' : '')} >
                <p><span className="noedit title">{this.state.title}</span>
                    <input type="text" className="edit title"
                           name="editTitle"
                           value={this.state.editTitle} 
                           onChange={this.handleChange}/>
                </p>
                <p>Author: <span className="noedit author">{this.state.author}</span>
                    <input type="text" className="edit author"
                           name="editAuthor"
                           value={this.state.editAuthor} 
                           onChange={this.handleChange}/>
                </p>
                <p>Genre: <span className="noedit genre">{this.state.genre}</span>
                    <input type="text" className="edit genre"
                           name="editGenre"
                           value={this.state.editGenre} 
                           onChange={this.handleChange}/>
                </p>
                <p className="info">About: <a href={this.state.info==='' ? '#' : this.state.info}
                                              rel="noopener noreferrer"
                                              target={this.state.info==='' ? '_self' : '_blank'}
                                              className="noedit info">{this.extractRootDomain(this.state.info)}</a>
                    <input type="text" className="edit info"
                           name="editInfo"
                           value={this.state.editInfo}
                           onChange={this.handleChange}/>
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