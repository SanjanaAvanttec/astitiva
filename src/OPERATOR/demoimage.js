import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserComponent = (userId) => {
  const [user, setUser] = useState (null) // initialize state as null

  useEffect (() => { // use effect hook to fetch user data
    async function getUser () { // helper function to get user data by ID
      try {
        // make a GET request to the API with the user ID
        const response = await axios.get (`/api/user/$ {userId}`)

        // check if the response has data
        if (response.data) {
          // set the user state with the response data
          setUser (response.data)
        }
      } catch (err) {
        // handle any errors
        console.error (err)
      }
    }

    getUser () // call getUser function
  }, [userId]) // run effect only when userId prop changes

  // return a JSX element to display the user data
  return (
    <div>
      {user ? ( // check if user state is not null
        <div>
          <h1>{user.name}</h1> // display user name
          <p>{user.email}</p> // display user email
          <img src= {`data:$ {user.image_type};base64,$ {user.image_data}`} /> // display user image using base64 encoding
        </div>
      ) : (
        <p>Loading...</p> // display a loading message if user state is null
      )}
    </div>
  )
}