import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFatchingTwo() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButtonClick])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={handleClick}>Get</button>
            <div>
                <b>Post Id</b>: {post.id} <br/>
                <b>Title</b>: {post.title} <br/>
                <b>Body</b>: {post.body} <br/>
            </div>
        </div>
    )
}

export default DataFatchingTwo