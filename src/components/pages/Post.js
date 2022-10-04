import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {

    let {category, id} = useParams();

    return (
        <>
            <h1> Post Page - {category} </h1>
            <h1> Post Page - {id} </h1>
        </>
    )
}

export default Post