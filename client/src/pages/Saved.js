import React, {useEffect, useState} from "react";
import { Header } from "semantic-ui-react";
import Container from "../components/Container";
import Row from "../components/Row";
import SavedList from "../components/SavedList"
import API from "../utils/API";

const Saved =()=>{
  const [books, setBooks] = useState([])
  
  useEffect(() => {
    loadBooks()
  }, [])

  const loadBooks =  async () => {
    var books = await API.getBooks();
    setBooks(books.data);
  };


  const deleteBook =  async (id) => {
    var books = await API.deleteBook(id);
    loadBooks(books.data);
  };

  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }
    return (
        <Container>
            <Row>
                <Header>Saved List</Header>
                {books.map((book, index) => (

                    <SavedList
                    key={index}
                    title={book.title}
                    author={book.author}
                    deleteBook={deleteBook(book._id)}
                    />
                ))}
            </Row>
        </Container>
    )

}

export default Saved