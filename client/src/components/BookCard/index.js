import React from 'react'
import { Card,  Image} from 'semantic-ui-react'

import API from "../../utils/API";



const BookCard =(props)=> {

 function handleFormSubmit(event) {

      API.saveBook()
      .then((response) => {
        const data = response.data;
        this.setBooks({ books: data });
        console.log('Data has been received!!');
      })
      .then(res => console.log("saved"))
      .catch(err => console.log(err));
      console.log("book saved")
  };
      return (
        <Card>
        <Image src={props.image} wrapped ui={false} />
        <Card.Content>
      <Card.Header>Title: {props.title}</Card.Header>
          <Card.Meta>
      <span className='date'>published Date: {props.publishedDate}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Description>
          Description: {props.description}
        </Card.Description>
        <Card.Content extra>
          <a>
            author: {props.author}
          </a>
        </Card.Content>
        <button href={props.previewLink} className="btn btn-outline-secondary">Link to the Book</button>

        <button className="save-btn" onClick={handleFormSubmit} >
      Save
    </button>
      </Card>
    )
  }




export default BookCard;