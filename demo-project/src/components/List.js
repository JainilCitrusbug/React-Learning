import React, { useState } from 'react'
import Childlist from './Childlist'

function List() {

    const names = ["Jainil", "Jay", "Jack"]

  

    const nameList = names.map(name => <Childlist name={name} />)

    return (
        <div>{nameList}</div>
    )
}

export default List