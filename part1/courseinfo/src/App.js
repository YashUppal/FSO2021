import React from 'react'

const App = () => {

  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
       part1={part1} exercises1={exercises1}
       part2={part2} exercises2={exercises2}
       part3={part3} exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

const Header = ({course}) => {
  return(
  <div>
    <h1>{course}</h1>
  </div >
  )
}

// Alternate solution
// const Content = (props) => {
//   return (
//     <div>
//       < Part1 part1={props.part1} exercises1={props.exercises1} />
//       < Part2 part2={props.part2} exercises2={props.exercises2}/>
//       < Part3 part3={props.part3} exercises3={props.exercises3}/>
//     </div>
//   )
// }

const Content = ({ part1,exercises1,part2,exercises2,part3,exercises3 }) => {
  return (
    <div>
      < Part1 part1={part1} exercises1={exercises1} />
      < Part2 part2={part2} exercises2={exercises2}/>
      < Part3 part3={part3} exercises3={exercises3}/>
    </div>
  )
}

const Total = ({ exercises1, exercises2, exercises3 }) => {
  
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const Part1 = ({part1,exercises1}) => {
  return (
    <div>
      {part1} {exercises1}
    </div>
  )
}

const Part2 = ({part2,exercises2}) => {
  return (
    <div>
      {part2} {exercises2}
    </div>
  )
}

const Part3 = ({part3,exercises3}) => {
  return (
    <div>
      {part3} {exercises3}
    </div>
  )
}


export default App;
