import React from 'react';

import { Container, Divider, Icon, Header, Grid } from 'semantic-ui-react';

import Course from './components/Course';
import courses from './data/courses';

const App = () => {
  const rows = () => {
    return courses.map((course) => <Course key={course.id} course={course} />);
  };
  return (
    <Container text style={{ paddingTop: '1em', paddingBottom: '1em' }}>
      <Grid textAlign="left" columns={1}>
        <Grid.Column style={{ maxWidth: 500 }}>
          <Header as="h2">
            <Icon name="student" />
            <Header.Content> Web development curriculum </Header.Content>
          </Header>
          <Divider />
          {rows()}
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default App;
