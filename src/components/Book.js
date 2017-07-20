import React from 'react';
import '../styles/main.css';

class Book extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            edit : false
        }
    }
    render() {
        return(
        	<li data-id={this.props.id}>
                    <p><span className="noedit title">{this.props.title}</span>
                    <input type="text" className="edit title"/>
                    </p>
                    <p>Author: <span className="noedit author">{this.props.author}</span>
                    <input type="text" className="edit author"/>
                    </p>
                    <p>Genre: <span className="noedit genre">{this.props.genre}</span>
                    <input type="text" className="edit genre"/></p>
                    <p>Read: <span className="noedit read">{this.props.read?"Yes":"No"}</span>
                    <input type="checkbox" className="edit read" 
                           value={this.props.read?"true":"false"}/>
                    </p>
                    <button data-id={this.props.id} className='remove'>Delete</button>
                    <button className="editBook noedit">Edit</button>
                    <button className="saveEdit edit">Save</button>
                    <button className="cancelEdit edit">Cancel</button> 
                  </li>
   			
		)
	}
}

export default Book;