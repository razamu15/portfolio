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
  List,
  ListItem,
} from '@chakra-ui/react';
import { getPosts, Post } from '@posts';
import { FaChevronRight, FaCaretDown, FaCaretUp } from 'react-icons/fa';

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

interface ExperienceProps {
  experiences: Post[];
}

const Experiences = ({ experiences }: ExperienceProps): JSX.Element => {
  const skills = React.useRef(null);
  const exps = React.useRef(null);

  return (
    <Container>
      <Head>
        <title>Work Experiences</title>
      </Head>
      <Container alignContent="center" alignItems="center">
        <Title fontSize={['3rem', '4rem']} as="h2">
          Up-and-Coming 👨‍💻
        </Title>
        <Container maxWidth={['100%', '720px']} marginY="2rem">
          <Text>
            I have 3+ plus years of professional experience across multiple
            roles and organizations. From developer, to
            architect to consultant, the diversity in my roles has given me an
            ability to adapt and has allowed me to learn a wide breadth of
            technical skills and domain knowledge. Scroll to:{' '}
            <a
              style={{ cursor: 'pointer' }}
              onClick={() =>
                exps.current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              💼 Work Experiences
            </a>{' '}
            or{' '}
            <a
              style={{ cursor: 'pointer' }}
              onClick={() =>
                skills.current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              💻 Skills
            </a>
            .{' '}
          </Text>
          <Text>
            (Psst) besides that ☝️ professional experience I have done many side 
            projects to explore new tech and keep up to date with current trends. 
            You can see those here:{' '}
            <a href="/projects">🔨 Projects</a> &nbsp; &nbsp;{' '}
            <a href="/extras">🎓 Extracurriculars</a>
          </Text>
        </Container>
      </Container>

      <Container
        padding="4rem 13%"
        gridGap="2rem"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        minHeight="500px"
        ref={skills}
      >
        <Title fontSize="40px" as="h2">
          Skills
        </Title>
        <Tabs
          orientation="vertical"
          variant="soft-rounded"
          colorScheme="gray"
          width="100%"
        >
          <TabList mt="4rem" mr="1rem">
            <Tab>Languages</Tab>
            <Tab>Technologies</Tab>
            <Tab>Databases</Tab>
            <Tab>Frameworks</Tab>
            <Tab>Tools</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TechPanel
                noob={['c#', 'perl', 'matlab', 'typescript', 'golang']}
                pro={[
                  'java',
                  'javascript',
                  'c',
                  'python',
                  'bash',
                  'html',
                  'css',
                ]}
              />
            </TabPanel>
            <TabPanel>
              <TechPanel
                noob={['terraform', 'azure', 'nginx', 'digitalocean']}
                pro={[
                  'firebase',
                  'netlify',
                  'graphql',
                  'kafka',
                  'docker',
                  'gcp',
                ]}
              />
            </TabPanel>
            <TabPanel>
              <TechPanel
                noob={['neo4j', 'sqlserver', 'sqlite', 'access']}
                pro={['postgres', 'mysql', 'redis', 'mongo']}
              />
            </TabPanel>
            <TabPanel>
              <TechPanel
                noob={['next', 'gatsby', 'flask']}
                pro={['node', 'jquery', 'express', 'react', 'socketio']}
              />
            </TabPanel>
            <TabPanel>
              <TechPanel
                noob={['vmware', 'jmeter', 'insomnia', 'teamcity', 'jira']}
                pro={['intellij', 'vscode', 'postman', 'git']}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>

      <Container
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        padding="2rem 10% 4rem 10%"
        gridGap="3rem"
        ref={exps}
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
  const experiences = await getPosts('t_experiences');
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
