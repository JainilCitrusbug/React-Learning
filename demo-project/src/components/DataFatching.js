import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFatching() {

    const [posts, setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPost(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(post => 
                            <tr key={post.id}>
                                <td>{post.userId}</td>
                                <td>{post.title}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DataFatching