import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import BookList from "../components/BookList"
import SearchArea from "../components/SearchArea"
import request from "superagent"


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    };

    

    searchBook = (e) => {
        e.preventDefault();

        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {

                console.log(data.body.items);
                this.setState({ books:[...data.body.items]})
            })
    }

    handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({ searchField: e.target.value })
    }


    render() {

        return (
            <div>
                <Container>
                    <Row>
                        <h1>Google Book</h1>
                        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
                        <BookList books={this.state.books}/>

                    </Row>
                </Container>
            </div>
        )
    }
}
export default Search;