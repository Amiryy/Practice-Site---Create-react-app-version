import React from 'react';
import '../styles/main.css';
import Book from './Book';

class BooksList extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            api: 'http://localhost:8000/api/Books',
            display: this.props.display,
            content: [],
            getError: false,
            updateContent: this.props.update
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.display !== this.state.display) {
            this.setState({ display: nextProps.display });
        }
        if (nextProps.update !== this.state.update) {
            this.setState({ update: nextProps.update });
            this.componentDidMount();
        }
    }
    componentDidMount () {
        fetch(this.state.api)
            .then(response => {
                if (!response.ok) {
                    throw Error('Network request failed.')
                }
                return response;
            })
            .then(data => data.json())
            .then(data => {
                this.setState({
                    content: data
                });
                console.log('Library Loaded', data);
                
            }, (ex) => {
                this.setState({
                    getError : true
                });
                console.log('parsing failed', ex)
            })
    }
    render() {
        return (
            <div>
                {this.state.display ? 
                    this.state.content.map((book)=>
                       <Book key={book._id}
                             id={book._id}
                             title={book.title}
                             author={book.author}
                             genre={book.genre}
                             read={book.read}
                             info={book.info}/>
                    )
                : <h4>Books will be shown here...</h4>}
   			    {this.state.getError ? <h4>Failed to get the data. Please check the log for errors.</h4> : ''}
            </div>
		)
	}
}

export default BooksList;