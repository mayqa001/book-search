import React from 'react'
import {Item} from 'semantic-ui-react'



const SavedList = (props) => {

  return(
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />

      <Item.Content>
<Item.Header as='a'>Title: {props.title}</Item.Header>
        <Item.Meta>Author: {props.author}</Item.Meta>
      </Item.Content>

      <button onClick={props.deleteBook}>Delete</button>
    </Item>
  </Item.Group>
  )}

export default SavedList