import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import { Container, Divider, Icon, Header } from 'semantic-ui-react';

import Course from './components/Course';

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const rows = () => {
    return courses.map((course) => <Course key={course.id} course={course} />);
  };
  return (
    <Container text>
      <Divider hidden />
      <Header as="h1">
        <Icon name="student" />
        <Header.Content> Web development curriculum </Header.Content>
      </Header>
      <Divider />
      {rows()}
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
