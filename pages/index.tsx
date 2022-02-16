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

const BulletList = (props: { entries: String[] }) => {
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
    <Container marginTop="-2rem">
      <Container
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        // paddingY="25px"
        // paddingBottom="40px"
        padding="0px 15% 40px 15%"
        gridGap="3rem"
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

        <Container maxWidth="700px" gridGap="2rem" alignItems="center">
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
                <BulletList entries={glanceData.backend} />
              </TabPanel>
              <TabPanel>
                <BulletList entries={glanceData.frontend} />
              </TabPanel>
              <TabPanel>
                <BulletList entries={glanceData.cloud} />
              </TabPanel>
              <TabPanel>
                <BulletList entries={glanceData.admin} />
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
