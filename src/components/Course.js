import React from 'react';

import { Header, Segment, Table } from 'semantic-ui-react';

const Part = (props) => {
  return (
    <Table.Row>
      <Table.Cell>{props.part.name}</Table.Cell>
      <Table.Cell>{props.part.exercises}</Table.Cell>
    </Table.Row>
  );
};

const Content = (props) => {
  const parts = props.course.parts;
  const rows = () => {
    return parts.map((part) => <Part key={part.id} part={part} />);
  };
  return (
    <Table basic="very" fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Exercises</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {rows()}
    </Table>
  );
};

const Total = (props) => {
  const total = props.course.parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0);
  return <Header as="h3">Total number of exercises: {total}</Header>;
};

const Course = ({ course }) => {
  return (
    <Segment>
      <Header as="h2"> {course.name} </Header>
      <Content course={course} />
      <Total course={course} />
    </Segment>
  );
};

export default Course;
