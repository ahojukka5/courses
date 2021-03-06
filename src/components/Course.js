import React from 'react';

import { Header, Segment, Table } from 'semantic-ui-react';

const Part = (props) => {
  return (
    <Table.Row>
      <Table.Cell>{props.part.name}</Table.Cell>
      <Table.Cell textAlign="center">{props.part.exercises}</Table.Cell>
    </Table.Row>
  );
};

const Content = (props) => {
  const parts = props.course.parts;
  const rows = () => {
    return parts.map((part) => <Part key={part.id} part={part} />);
  };
  return (
    <Table basic="very" fixed unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={9}>Name</Table.HeaderCell>
          <Table.HeaderCell width={3} textAlign="center">
            Exercises
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{rows()}</Table.Body>
    </Table>
  );
};

const Total = (props) => {
  const total = props.course.parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0);
  return <Header as="h4">Total number of exercises: {total}</Header>;
};

const Course = ({ course }) => {
  return (
    <>
      <Header attached="top" as="h3">
        {course.name}
      </Header>
      <Segment attached>
        <Content course={course} />
        <Total course={course} />
      </Segment>
    </>
  );
};

export default Course;
