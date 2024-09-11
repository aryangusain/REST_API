import React from 'react'

function Header({setActive}) {
  return (
    <div className='header'>
        <h1 onClick={() => setActive("home")}>REST API</h1>
        <ul>
            <li onClick={() => setActive("fetch")}>Fetch</li>
            <li onClick={() => setActive("create")}>Create</li>
            <li onClick={() => setActive("search")}>Search</li>
            <li onClick={() => setActive("update")}>Update</li>
            <li onClick={() => setActive("delete")}>Delete</li>
        </ul>
    </div>
  )
}

export default Header