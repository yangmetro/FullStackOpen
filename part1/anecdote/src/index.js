import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button =(props)=> (
  <button onClick={props.handleClick}>{props.text}</button>
)
const rando =()=> {
  const rando = Math.floor(Math.random() * 6)
  return (
    rando
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const points = [0,1,2,3,4,5]
  console.log(selected)

  return (
    
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {props.anecdotes[selected]}
      </p>
      <p>{points[selected]} votes </p>
      <Button handleClick={() => (points[selected]+=1)} text="vote"/>
      <Button handleClick={() => setSelected(rando)} text="next anecdote" />
    </div>
  )
}


const anecdotes =[
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remainin 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
