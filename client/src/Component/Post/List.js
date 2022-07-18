import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import {ListDiv, ListItem  } from '../../Style/ListCSS.js';

function List(props) {

  const [PostList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .post('/api/post/list')
      .then((response) => {
        console.log(response.data);
        if(response.data.success){
          setPostList([...response.data.postList]);
        }        
      })
      .catch((error) => {
        console.log(error);
      });    
  }, []);

   return (
    <ListDiv>
      {PostList.map((post, idx) => {
        return(        
        <ListItem key={idx}>
          <Link to={`/post/${post.postNum}`}>
            <p className='title'> {post.title} </p>
            <p> {post.content}</p>
            <hr />
          </Link>
        </ListItem>
        );
      })}
    </ListDiv>
  )
}

export default List;