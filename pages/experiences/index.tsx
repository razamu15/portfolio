import React from 'react';
import {
  Title,
  Text,
  Container,
  Grid,
  TechPanel,
  TransparentLink,
} from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  Collapse,
  Box,
} from '@chakra-ui/react';
import { getPosts, Post } from '@posts';

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
            <Text>0{order}</Text>
          </Container>
          <Grid width="100%" gridTemplateColumns="4fr 1fr">
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
                <Text fontSize="smaller" margin={0} color="rgba(0, 0, 0, 0.1)">
                  {job.data.date}
                </Text>
              </Grid>
              <Text fontSize="1rem">{job.data.caption}</Text>
            </Container>
            <Text fontSize="1.5rem">{isOpen ? <>&darr;</> : <>&rarr;</>}</Text>
          </Grid>
        </Grid>
      </TransparentLink>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <p>som random ass thxt that doesnt matter in the slghtest</p>
        </Box>
      </Collapse>
    </>
  );
};

interface ExperienceProps {
  experiences: Post[];
}

const Experiences = ({ experiences }: ExperienceProps): JSX.Element => {
  return (
    <Container>
      <Head>
        <title>Experiences</title>
      </Head>
      <Container alignContent="center" alignItems="center">
        <Title fontSize={['3rem', '4rem']} as="h2">
          CTO & passionate
        </Title>
        <Container maxWidth={['100%', '720px']} marginY="2rem">
          <Text>I&apos;m a Full-Stack/DevOps developer living in Paris.</Text>
          <Text>
            During my free time I like going gym, doing Bench Press, make design
            and make video edits on After Effects. You can check some cool drone
            edits on my&nbsp;
            <a href="https://instagram.com/croissant2france">Instagram</a>.
          </Text>
        </Container>
      </Container>

      <Container
        paddingY="4rem"
        gridGap="2rem"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        minHeight="500px"
      >
        <Title fontSize="40px" as="h2">
          Technologies I Have Used
        </Title>
        <Tabs
          orientation="vertical"
          variant="soft-rounded"
          colorScheme="gray"
          width="100%"
        >
          <TabList mt="4rem" mr="1rem">
            <Tab>Highlights</Tab>
            <Tab>Languages</Tab>
            <Tab>Frameworks</Tab>
            <Tab>Databases</Tab>
            <Tab>Technologies</Tab>
            <Tab>Tools</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TechPanel noob={['c#']} pro={['postgres']} />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <TechPanel noob={['neo4j']} pro={['python']} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>

      <Container
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        paddingBottom="4rem"
        gridGap="3rem"
      >
        <Title fontSize="40px" as="h2">
          Work Experiences
        </Title>
        <Container width="100%">
          {experiences.map((exp, i) => (
            <JobEntry key={i} job={exp} order={i + 1} />
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      experiences,
    },
  };
};

export default Experiences;
