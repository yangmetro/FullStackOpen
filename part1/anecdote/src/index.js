import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button =(props)=> (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Anecdote =(props)=> {
  return (
    <div>
      <p>
        {props.anecdote}
      </p>
      <p> has {props.points} votes </p>
    </div>
  );
}

const rando =()=> {
  const rando = Math.floor(Math.random() * 6);
  return (
    rando
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(props.anecdotes.length).fill(0));
  const [max, setMax] = useState(0)

  const incrementPoint = () => {
    const copy = [...points];
    copy[selected] += 1;
    if (copy[max] < copy[selected]) {
      setMax(selected);
    }
    setPoints(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} points = {points[selected]} />
      <Button handleClick={() => incrementPoint()} text="vote"/>
      <Button handleClick={() => setSelected(rando)} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[max]} points = {points[max]} />
    </div>
  );
};


const anecdotes =[
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remainin 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
