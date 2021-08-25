import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { index } from '../src/api/products'

class IndexBooks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: [],
      loading: false
    }
  }

  componentDidMount () {
    index()
      // .then((response) => console.log(response))
      .then((response) =>
        this.setState({
          books: response.data.books,
          loading: false
        })
      )
      .catch(console.error)
    console.log(this.state)
  }

  render () {
    const books = this.state.books.map((book) => (
      <li key={book._id}>
        <Link to={`/books/${book._id}`}>{book.title}</Link>
      </li>
    ))
    return (
      <div>
        <h4> Books </h4>
        <p>{this.state.loading && 'loading...'}</p>
        <ul>{books}</ul>
      </div>
    )
  }
}

export default IndexBooks
