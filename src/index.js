import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import { Container, Divider, Icon, Header } from 'semantic-ui-react';

import Course from './components/Course';
import courses from './data/courses';

const App = () => {
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
