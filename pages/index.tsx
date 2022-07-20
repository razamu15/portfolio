import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
} from '@chakra-ui/react';
import { Container, Title, Button, Grid, Link, Text } from '@components';
import styles from '@styles/Home.module.css';
import { FaChevronRight } from 'react-icons/fa';
import { GetStaticProps } from 'next/types';
import { getSummary, Post } from '@posts';

const BulletList = (props: { entries: string[] }) => {
  return (
    <List width="100%" spacing={3}>
      {props.entries.map((text, i) => {
        return (
          <ListItem className="exp-entry" key={i}>
            <FaChevronRight style={{ margin: '0px' }} color="green.500" />
            <p className="glance">{text}</p>
          </ListItem>
        );
      })}
    </List>
  );
};

interface HomeProps {
  summary: Post[];
}

const Home = ({ summary }: HomeProps): JSX.Element => {
  const glance = React.useRef(null);
  let glanceData = summary[0].data;

  return (
    <Container>
      <Container
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        // paddingY="25px"
        // paddingBottom="40px"
        padding="0px 13% 40px 13%"
        gridGap="1rem"
      >
        <Container alignItems="center" alignContent="center">
          <Image
            src="/me.jpeg"
            alt="Antoine Ordonez"
            width="120px"
            height="120px"
            objectFit="cover"
            className={styles.image}
          />
          <Title>Saad Raza</Title>
          <Title fontSize="2rem" fontWeight="500" as="h2">
            <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
              I love building things
            </span>{' '}
            🏗️
          </Title>
        </Container>

        <Container gridGap="2rem" alignItems="center" width="110%">
          {/* <Container>
            <Text textAlign="center">
              I&apos;m a developer with experience in Full-Stack, Cloud
              Architecture and a bit of DevOps and Infrastructure. <br />
              Graduating from{' '}
              <a href="https://www.utoronto.ca/">University of Toronto</a> in
              August 2022.
            </Text>
          </Container> */}
          <Grid
            gridGap="2rem"
            marginTop="2rem"
            gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
            justifyItems="stretch"
            alignItems="stretch"
          >
            <Link href="/about">
              <Button width="100%">
                <motion.span
                  initial={{ display: 'inline-block' }}
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 2.5,
                  }}
                >
                  😊
                </motion.span>{' '}
                More about me
              </Button>
            </Link>
            <Button
              width="100%"
              backgroundColor="rgb(226,232,240)"
              color="black"
              variant="secondary"
              onClick={() =>
                glance.current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <motion.span
                initial={{ display: 'inline-block' }}
                animate={{ y: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 2.5,
                }}
              >
                👇
              </motion.span>{' '}
              At a Glance
            </Button>
          </Grid>
        </Container>
      </Container>

      <Container ref={glance} alignItems="center" paddingY="3rem">
        <Container maxWidth="600px" alignItems="center" alignContent="center">
          <Title id="glance" fontSize="3rem" as="h3">
            At a Glance
          </Title>
          <Text textAlign="center">
            I&apos;m a developer with a wide variety of experiences in Backend,
            Frontend, Cloud Architecture, DevOps and Data Engineering. Please
            visit the <a href="/experiences">💼 Experiences</a> or &nbsp;
            <a href="/projects">🔨 Projects</a> page for more details.
          </Text>
          <Tabs variant="soft-rounded" colorScheme="gray" paddingY="2rem">
            <TabList justifyContent="center">
              <Tab>Backend</Tab>
              <Tab>Frontend</Tab>
              <Tab>Cloud Architecture</Tab>
              <Tab>DevOps & Infrastructure</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <BulletList entries={glanceData.backend} />
              </TabPanel>
              <TabPanel>
                <BulletList entries={glanceData.frontend} />
              </TabPanel>
              <TabPanel>
                <BulletList entries={glanceData.cloud} />
              </TabPanel>
              <TabPanel>
                <BulletList entries={glanceData.infra} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Container>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const summary = await getSummary();
  return {
    props: {
      summary,
    },
  };
};

export default Home;
