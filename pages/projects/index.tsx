import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import {
  Title,
  Container,
  Text,
  Button,
  Grid,
  TransparentLink,
} from '@components';
import { getPosts, Post } from '@posts';
import { useDisclosure, Collapse, List, ListItem } from '@chakra-ui/react';
import { FaChevronRight, FaCaretDown, FaCaretUp } from 'react-icons/fa';

interface ProjectProps {
  projects: Post[];
}

const Projects = ({ projects }: ProjectProps): JSX.Element => (
  <Container>
    <Head>
      <title>Projects</title>
    </Head>
    <Container alignItems="center">
      <Title>Projects</Title>
      <Text textAlign="center">
        I&apos;m always working on new projects. <br />
        You can find them on my&nbsp;
        <a href="https://github.com/razamu15">Github</a>.
      </Text>
    </Container>

    <Container
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
      padding="2rem 10% 2rem 10%"
      gridGap="3rem"
    >
      <Container width="100%">
        {projects.map((pro, i) => (
          <JobEntry key={i} job={pro} order={i + 1} />
        ))}
      </Container>
    </Container>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getPosts('t_projects');
  projects.sort((a, b) => (a.data.porder < b.data.porder ? -1 : 1));

  return {
    props: {
      projects,
    },
  };
};

export default Projects;

interface Job {
  job: Post;
  order: Number;
}

const JobEntry = ({ job, order }: Job) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <TransparentLink onClick={onToggle} key={job.data.slug}>
        <Grid
          gridTemplateColumns="1fr 4fr"
          justifyItems="flex-start"
          gridGap="1rem"
          paddingY="2rem"
          borderTop="1px solid rgba(0,0,0,0.1)"
        >
          <Container width="100%">
            <Text>{order > 9 ? order : '0' + order.toString()}</Text>
          </Container>
          <Grid width="100%" gridTemplateColumns="5fr 1fr">
            <Container width="100%" alignItems="flex-start" textAlign="start">
              <Grid
                width="100%"
                gridTemplateColumns="repeat(2, auto)"
                justifyItems="flex-start"
                justifyContent="flex-start"
                gridGap="1rem"
              >
                <Title fontSize="1.5rem" margin={0} as="h3">
                  {job.data.title}
                </Title>
              </Grid>
              <Grid
                width="100%"
                gridTemplateColumns="repeat(2, auto)"
                justifyItems="flex-start"
                justifyContent="flex-start"
                gridGap="1rem"
              >
                <Title
                  fontSize="1.1rem"
                  fontWeight="bold"
                  margin="0.5rem"
                  as="h5"
                >
                  {job.data.company}
                </Title>
                <Text fontSize="smaller" margin={0} color="rgba(0, 0, 0, 0.1)">
                  {job.data.date}
                </Text>
              </Grid>
            </Container>
            {isOpen ? (
              <FaCaretUp style={{ margin: '0px' }} />
            ) : (
              <FaCaretDown style={{ margin: '0px' }} />
            )}
          </Grid>
        </Grid>
        <Collapse className="exp-details" in={isOpen} animateOpacity>
          <List width="100%" spacing={3}>
            {job.data.description.map((bullet: string, i) => {
              return (
                <ListItem key={i} className="exp-entry">
                  <FaChevronRight style={{ margin: '0px' }} color="green.500" />
                  <p className="work">{bullet}</p>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </TransparentLink>
    </>
  );
};
