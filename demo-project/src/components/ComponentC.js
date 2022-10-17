import React, { useContext } from 'react'
import { firstNameContext, lastNameContext } from '../App'

function ComponentC() {

    const firstName = useContext(firstNameContext)
    const lastName = useContext(lastNameContext)

    return (
        <div>
            Name : {firstName} {lastName}
        </div>
    )
}

export default ComponentC