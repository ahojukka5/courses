import React from 'react';

const Header = props => {
  return <h2>{props.course.name}</h2>;
};

const Part = props => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = props => {
  const parts = props.course.parts;
  const rows = () => {
    return parts.map(part => <Part key={part.id} part={part} />);
  };
  return <div>{rows()}</div>;
};

const Total = props => {
  const total = props.course.parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0);
  return (
    <p>
      <b>Total number of exercises {total}:</b>
    </p>
  );
};

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course
