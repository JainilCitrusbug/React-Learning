import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    post: {},
    error: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "FATCHING_DATA":
            return {
                loading: false,
                post: action.payload,
                error: ""
            }
        case "FATCHING_ERROR":
            return {
                loading: false,
                post: {},
                error: "Something is wrong!"
            }
        default:
            break;
    }
}

function DataFatchingThree() {

    const [state, dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => {
                dispatch({
                    type: "FATCHING_DATA",
                    payload: response.data,
                })
            })
            .catch(error => {
                dispatch({
                    type: "FATCHING_ERROR"
                })
            })
    })

    return (
        <div>
            {state.loading?"Loading":state.post.title}
            {state.error?state.error:null}
        </div>
    )
}

export default DataFatchingThree