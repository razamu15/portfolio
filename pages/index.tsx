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

const Home = (): JSX.Element => {
  const glance = React.useRef(null);

  return (
    <Container>
      <Container
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        paddingY="25px"
        paddingBottom="40px"
        gridGap="4rem"
      >
        <Container alignItems="center" alignContent="center">
          <Image
            src="/me.jpg"
            alt="Antoine Ordonez"
            width="120px"
            height="120px"
            objectFit="cover"
            className={styles.image}
          />
          <Title>Antoine Ordonez</Title>
          <Title
            fontSize="2rem"
            color="rgba(0, 0, 0, 0.6)"
            fontWeight="500"
            as="h2"
          >
            I build cloud software.
          </Title>
        </Container>
        <Container maxWidth="700px" gridGap="3rem" alignItems="center">
          <Container>
            <Text textAlign="center">
              I&apos;m a Full Stack developer with experience in DevOps,
              Backend, Frontend and mobile development. Currently CTO of&nbsp;
              <a href="https://shareview.fr">Shareview</a> and living in Paris.
            </Text>
          </Container>
          <Grid
            gridGap="2rem"
            marginTop="2rem"
            gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
            justifyItems="stretch"
            alignItems="stretch"
          >
            <Link href="mailto:hello@shellbear.me">
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

      <Container alignItems="center" paddingY="3rem">
        <Container maxWidth="600px" alignItems="center" alignContent="center">
          <Title ref={glance} id="glance" fontSize="3rem" as="h3">
            At a Glance
          </Title>
          <Text textAlign="center">
            This is a short summary of my skills. Please look around and visit
            the <a href="/experiences">Experiences</a> or{' '}
            <a href="/projects">Projects</a> page for more details.
          </Text>
          <Tabs variant="soft-rounded" colorScheme="gray" paddingY="2rem">
            <TabList justifyContent="center">
              <Tab>Backend</Tab>
              <Tab>Frontend</Tab>
              <Tab>Cloud & Architecture</Tab>
              <Tab>Administration</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <List width="100%" spacing={3}>
                  <ListItem className="exp-entry">
                    <FaChevronRight
                      style={{ margin: '0px' }}
                      color="green.500"
                    />
                    <p className="glance">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </p>
                  </ListItem>
                  <ListItem className="exp-entry">
                    <FaChevronRight color="green.500" />
                    <p className="glance">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Lorem ipsum dolor sit amet
                    </p>
                  </ListItem>
                  <ListItem className="exp-entry">
                    <FaChevronRight color="green.500" />
                    <p className="glance">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </p>
                  </ListItem>
                  <ListItem className="exp-entry">
                    <FaChevronRight color="green.500" />
                    <p className="glance">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </p>
                  </ListItem>
                </List>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
