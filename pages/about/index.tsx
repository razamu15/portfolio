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
  SiElixir,
  SiPostgresql,
  SiTypescript,
  SiAmazonaws,
  SiGooglecloud,
  SiTerraform,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiGraphql,
} from 'react-icons/si';

import { Title, Text, Container, Grid, Link, Card } from '@components';

function TechPanel() {
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
          <Card>
            <SiGo size="2rem" />
          </Card>
          <Card>
            <SiKubernetes size="2rem" />
          </Card>
          <Card>
            <SiKubernetes size="2rem" />
          </Card>
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
          <Link href="google.ca">
            <Card>
              <SiGo size="2rem" />
            </Card>
          </Link>
          <Link href="google.ca">
            <Card>
              <SiKubernetes size="2rem" />
            </Card>
          </Link>
          <Link href="google.ca">
            <Card>
              <SiKubernetes size="2rem" />
            </Card>
          </Link>
          <Link href="google.ca">
            <Card>
              <SiKubernetes size="2rem" />
            </Card>
          </Link>
          <Link href="google.ca">
            <Card>
              <SiKubernetes size="2rem" />
            </Card>
          </Link>
          <Link href="google.ca">
            <Card>
              <SiKubernetes size="2rem" />
            </Card>
          </Link>
          <Link href="google.ca">
            <Card>
              <SiKubernetes size="2rem" />
            </Card>
          </Link>
        </div>
      </Container>
    </Grid>
  );
}

const About = (): JSX.Element => {
  const stacks = React.useMemo(
    () => [
      {
        Icon: SiGo,
        url: 'https://golang.org/',
      },
      {
        Icon: SiKubernetes,
        url: 'https://kubernetes.io/',
      },
      {
        Icon: SiTypescript,
        url: 'https://www.typescriptlang.org/',
      },
      {
        Icon: SiReact,
        url: 'https://reactjs.org/',
      },
      {
        Icon: SiGraphql,
        url: 'https://graphql.org/',
      },
      {
        Icon: SiAmazonaws,
        url: 'https://aws.amazon.com/',
      },
      {
        Icon: SiNextdotjs,
        url: 'https://nextjs.org/',
      },
      {
        Icon: SiElixir,
        url: 'https://elixir-lang.org/',
      },
      {
        Icon: SiGooglecloud,
        url: 'https://cloud.google.com/',
      },
      {
        Icon: SiTerraform,
        url: 'https://www.terraform.io/',
      },
      {
        Icon: SiPostgresql,
        url: 'https://www.postgresql.org/',
      },
      {
        Icon: SiPython,
        url: 'https://www.python.org/',
      },
    ],
    [],
  );

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
              <TechPanel />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <TechPanel />
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
