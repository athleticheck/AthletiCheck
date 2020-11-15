import React from 'react';
import { Header, Image, Grid, Container, List } from 'semantic-ui-react';

export default class AboutUs extends React.Component {

  render() {
    return (
        <Container>
          <Grid columns={2} >
          <Grid.Column id='about-left'>
            <Header as='h1'>ABOUT US</Header>
            <h3>AthletiCheck is an application that allows users to: </h3>
            <List bulleted>
            <List.Item> Effectively communicate between Athletic Trainers and Athletes</List.Item>
              <List.Item>Update personal treatments, rehab and notes for Athletes</List.Item>
              <List.Item>Easy access to all Athletes</List.Item>
            </List>
            <h3>Our Goal</h3>
            <p>Ever since the transition to electronic medical record systems for athletic staff at university sports programs, a tremendous amount of time has been spent on
              recording athletes’ data due to the fact that most EMR systems do not provide a user friendly interface and are not easily accessible, so athletic trainer
              often record data and then copy it into the system at the end of the day. How do I aswsume that? Over the summer my colleague and me have concluded
              around 80 interviews with different athletic trainers in U.S. colleges, ranging from D1 to Junior level programs, and the collected data shows that ATs
              spend anywhere from 2-4 hours a day on documentation. This holds true for the ATs at UH as well. My proposed solution to this problem is an easily accessible
              web application for the UH athletics community where data can be entried and received
              easily on both ends to save time on documentation and make up more time to actually treat UH’s athletes.</p>
            <h3>Our Team:</h3>
            <p>Anna Campainha</p>
            <p>Robert Lemon</p>
            <p>Andy Yu</p>
            <p>Franz Adam</p>
          </Grid.Column>
            <Grid.Column>
              <Image src='https://www.cui.edu/Portals/0/uploadedimages/AcademicPrograms/Undergraduate/Majors/Athletic-Training/Athletic_Training_Thumbnail_2.jpg' />
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}
