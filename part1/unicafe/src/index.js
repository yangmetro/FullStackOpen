import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {
  var value1 = (props.good - props.bad) / props.all
  value1 = value1.toFixed(2)
  var value2 = props.good / props.all * 100
  value2 = value2.toFixed(2)
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <tbody>
      <Statistics text="good" value={props.good}/>
      <Statistics text="neutral" value={props.neutral}/>
      <Statistics text="bad" value={props.bad}/>
      <Statistics text="all" value={props.all}/>
      <Statistics text="average" value={value1}/>
      <Statistics text="positive" value={value2} option="%"/>
      </tbody>
    </table>
  )
}

const Statistics =(props) => {
  return (
    <tr>
      <td>{props.text} </td>
      <td>{props.value} {props.option}</td>
    </tr>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good ,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <History good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)