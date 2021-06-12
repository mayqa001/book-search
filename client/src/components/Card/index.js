import React from "react";

import Title from "../Title";
import "./style.css";
import API from "../../utils/API";
import SaveBtn from "../SaveBtn"

function Card(props) {
  return (
    
    <tr>
          <th scope="col">{props.items.id}</th>
          <td scope="col"><img src={props.imageLinks.smallThumbnail} /></td>
          <td scope="col">{props.items.title} {props.items.authors} {props.items.description}</td>
          <td scope="col">{props.dob}</td>
          <SaveBtn>Save</SaveBtn>
        </tr>
    
  );
}

export default Card;
