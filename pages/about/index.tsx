import React from 'react';
import {
  Badge,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import Head from 'next/head';

import {
  SiGo,
  SiKubernetes,
  SiPostgresql,
  SiTypescript,
  SiAmazonaws,
  SiGooglecloud,
  SiTerraform,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiGraphql,
  SiCsharp,
  SiNeo4J,
} from 'react-icons/si';

const techIcons = {
  golang: {
    Icon: SiGo,
    url: 'https://golang.org/',
    name: 'Golang',
  },
  kubernetes: {
    Icon: SiKubernetes,
    url: 'https://kubernetes.io/',
    name: 'Kubernetes',
  },
  typescript: {
    Icon: SiTypescript,
    url: 'https://www.typescriptlang.org/',
    name: 'Typescript',
  },
  react: {
    Icon: SiReact,
    url: 'https://reactjs.org/',
    name: 'React',
  },
  graphql: {
    Icon: SiGraphql,
    url: 'https://graphql.org/',
    name: 'GraphQL',
  },
  aws: {
    Icon: SiAmazonaws,
    url: 'https://aws.amazon.com/',
    name: 'AWS',
  },
  next: {
    Icon: SiNextdotjs,
    url: 'https://nextjs.org/',
    name: 'NextJs',
  },
  gcp: {
    Icon: SiGooglecloud,
    url: 'https://cloud.google.com/',
    name: 'GCP',
  },
  terraform: {
    Icon: SiTerraform,
    url: 'https://www.terraform.io/',
    name: 'Terraform',
  },
  postgres: {
    Icon: SiPostgresql,
    url: 'https://www.postgresql.org/',
    name: 'PostgreSQL',
  },
  python: {
    Icon: SiPython,
    url: 'https://www.python.org/',
    name: 'Python',
  },
  'c#': {
    Icon: SiCsharp,
    url: 'https://www.python.org/',
    name: 'c#',
  },
  neo4j: {
    Icon: SiNeo4J,
    url: 'https://www.python.org/',
    name: 'Neo4J',
  },
  template: {
    Icon: null,
    url: 'https://www.',
    name: 'template',
  },
};

import { Title, Text, Container, Grid, Link, Card } from '@components';

export interface PanelProps {
  noob: [String];
  pro: [String];
}

function TechPanel({ noob, pro }: PanelProps) {
  console.log(techIcons);

  return (
    <Grid
      gridGap="2rem"
      gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
      justifyItems="stretch"
      alignItems="stretch"
    >
      <Container>
        <Badge
          ml="1"
          mb="1rem"
          fontSize="0.8em"
          colorScheme="green"
          borderRadius="lg"
        >
          Beginner
        </Badge>
        <div className="tech-level">
          {noob.map((tech) => {
            let Icon = techIcons[tech].Icon;
            return (
              <Card>
                <Icon size="2rem" />
              </Card>
            );
          })}
        </div>
      </Container>
      <Container>
        <Badge
          ml="1"
          mb="1rem"
          fontSize="0.8em"
          colorScheme="green"
          borderRadius="lg"
        >
          Advanced
        </Badge>
        <div className="tech-level">
          {pro.map((tech) => {
            let Icon = techIcons[tech].Icon;
            let link = techIcons[tech].url;
            return (
              <Link href={link}>
                <Card>
                  <Icon size="2rem" />
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </Grid>
  );
}

const About = (): JSX.Element => {
  return (
    <Container>
      <Head>
        <title>About</title>
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
        width="120%"
        marginLeft="-10%"
        minHeight="500px"
      >
        <Title fontSize="40px" as="h2">
          Technologies I Use
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
        paddingY="4rem"
        width="100%"
        // paddingBottom="4rem"
        gridGap="3rem"
      >
        <Title fontSize="40px" as="h2">
          My Learning Journey
        </Title>
        <Container width="100%">
          <div className="timeline-bg">
            <dl>
              <div className="timeline-entry">
                <dt>1066</dt>
                <dd>
                  {' '}
                  September. Harald Hardrada, King of Norway, invades England
                </dd>
                <dd>
                  {' '}
                  October. William of Normandy defeats and kills Harold II at
                  Hastings
                </dd>
                <dd>
                  {' '}
                  October. William of Normandy defeats and kills Harold II at
                  Hastings
                </dd>
                <dd>
                  {' '}
                  October. William of Normandy defeats and kills Harold II at
                  Hastings
                </dd>
                <dd>
                  {' '}
                  October. William of Normandy defeats and kills Harold II at
                  Hastings
                </dd>
                <dd>
                  {' '}
                  October. William of Normandy defeats and kills Harold II at
                  Hastings
                </dd>
              </div>

              <div className="timeline-entry">
                <dt>1070</dt>
                <dd> William the Conqueror subdues the north of England</dd>
                <dd> First Norman stone castle is built in Wales</dd>
              </div>

              <div className="timeline-entry">
                <dt>1076</dt>
                <dd>
                  {' '}
                  &#8216;Revolt of the Earls&#8217; ends with the execution of
                  Waltheof, Earl of Northumbria
                </dd>
              </div>

              <div className="timeline-entry">
                <dt>1077</dt>
                <dd>
                  {' '}
                  Bayeux Tapestry illustrating the Battle of Hastings is
                  completed
                </dd>
              </div>

              <div className="timeline-entry">
                <dt>1085</dt>
                <dd>
                  {' '}
                  Domesday Book is instituted to survey the English lands of
                  William the Conqueror
                </dd>
              </div>

              <div className="timeline-entry">
                <dt>1086</dt>
                <dd>
                  {' '}
                  Landholders swear loyalty to William the Conqueror at
                  Salisbury
                </dd>
              </div>

              <div className="timeline-entry">
                <dt>1087</dt>
                <dd> William the Conqueror dies at Rouen, Normandy</dd>
              </div>

              <dt>1087</dt>
              <dd> William II is crowned at Westminster Abbey</dd>
            </dl>
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export default About;
