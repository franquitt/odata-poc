import React from 'react';
import BookItemList from './BookItemList';
import AddBookItem from './AddBookItem';
import './App.css';
import EditBookItem from './EditBookItem';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            id: null,
            book: '',
            cost: '',
            description: '',
            bookItem: {},
            bookItems: [],
            editing: false
        };
        this.host = "http://localhost:3000";

        this.handleInputChange = this.handleInputChange.bind(this);
        this.deleteBookItem = this.deleteBookItem.bind(this);
        this.addBookItem = this.addBookItem.bind(this);
        this.editBookItem = this.editBookItem.bind(this);
        this.setEditing = this.setEditing.bind(this);
        this.updateBookItem = this.updateBookItem.bind(this);
    }

    componentDidMount() {
        fetch(this.host + '/books')
            .then(res => res.json())
            .then((data) => {
                this.setState({bookItems: data.value})

            })
            .catch(console.log)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    addBookItem(event) {
        event.preventDefault()
        if (!this.state.book) return;
        const bookItem = {
            book: this.state.book,
            cost: eval(this.state.cost),
            description: this.state.description
        };

        console.log(bookItem);
        fetch(this.host + '/books', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bookItem),
        }).then(res => res.json())
            .then((data) => {
                console.log(data)

                this.setState({
                    book: '',
                    cost: '',
                    description: '',
                    bookItem: bookItem,
                    bookItems: [...this.state.bookItems, data]
                });
            })
            .catch(console.log);

    }

    deleteBookItem(id) {
        const bookItems = this.state.bookItems.filter(item => item.id !== id);
        this.setState({bookItems: bookItems});
        if (this.state.editing === true) {
            window.location.reload();
        }
    }

    editBookItem(bookItem) {
        this.setEditing(true);
        this.setState({
            book: bookItem.book,
            cost: eval(bookItem.cost),
            description: bookItem.description,
            bookItem: bookItem
        });
        console.log(bookItem);
    }

    setEditing(value) {
        if (typeof value !== 'boolean') {
            throw " This value must either be true or false"
        }
        this.setState({
            editing: value
        })

        if (!value) {
            this.setState({book: '', cost: '', description: ''});
        }
    }

    updateBookItem(event) {
        event.preventDefault();
        const updatedBook = this.state.book;
        const updatedCost = this.state.cost;
        const updatedDesc = this.state.description;
        const updatedObj = {
            book: updatedBook,
            cost: updatedCost,
            description: updatedDesc
        };
        const updatedBookItem = Object.assign({}, this.state.bookItem, updatedObj);
        fetch(this.host + '/books('+this.state.bookItem.id+')', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedObj),
        }).then(res => res.json())
            .then(()=> {
                const bookItems = this.state.bookItems.map((bookItem) => (bookItem.id === this.state.bookItem.id ? updatedBookItem : bookItem));
                this.setState({book: '', cost: '', description: '', bookItems: bookItems});
            })
            .catch(console.log);

    }

    render() {
        const {cost, book, bookItems, editing} = this.state;
        return (
            <div className="App">

                <div className="row App-main">
                    {
                        editing ? (
                            <EditBookItem
                                book={this.state.book}
                                cost={this.state.cost}
                                description={this.state.description}
                                handleInputChange={this.handleInputChange}
                                setEditing={this.setEditing}
                                updateBookItem={this.updateBookItem}
                            />
                        ) : (
                            <AddBookItem
                                book={this.state.book}
                                cost={this.state.cost}
                                description={this.state.description}
                                handleInputChange={this.handleInputChange}
                                addBookItem={this.addBookItem}
                            />
                        )
                    }
                </div>
                <div className="row App-main">
                    <BookItemList
                        bookItems={bookItems}
                        deleteBookItem={this.deleteBookItem}
                        boughtBookItem={this.boughtBookItem}
                        editBookItem={this.editBookItem}
                    />
                </div>
            </div>
        );
    }
}


/*function App(data) {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}*/

export default App;
