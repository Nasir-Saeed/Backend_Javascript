import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/jokes')
      .then((response) => {
        setjokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  })
  return (
    <>
      <h1>Vite + React</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => {
          <div key={joke.id}>
            <h3>{joke.type}</h3>
            <p>{joke.content}</p>
            <p>{joke.punchline}</p>
          </div>
        })
      }
    </>
  )
}

export default App
