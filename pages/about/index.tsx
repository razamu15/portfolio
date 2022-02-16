import React from 'react';
import Head from 'next/head';
import { Title, Text, Container, Grid } from '@components';
import { Button } from '@chakra-ui/react';
import { SiNextdotjs } from 'react-icons/si';

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

      <Container paddingY="4rem" width="100%" gridGap="3rem">
        <Title fontSize="40px" as="h2">
          My Learning Journey
        </Title>
        <Container width="100%">
          <div className="timeline-bg">
            <dl>
              <div className="timeline-entry">
                <dt />
                <Grid
                  width="100%"
                  marginTop="-30px"
                  gridTemplateColumns="7fr 1fr"
                >
                  <Container
                    width="100%"
                    alignItems="flex-start"
                    textAlign="start"
                  >
                    <Grid
                      width="100%"
                      justifyItems="flex-start"
                      justifyContent="flex-start"
                      gridGap="1rem"
                    >
                      <Title fontSize="1.5rem" margin={0} as="h3">
                        Portfolio Website
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
                        fontSize="1rem"
                        fontWeight="normal"
                        margin={0}
                        as="h5"
                      >
                        Weekend Project
                      </Title>
                      <Text
                        fontSize="smaller"
                        margin={0}
                        color="rgba(0, 0, 0, 0.1)"
                      >
                        Feb 2022
                      </Text>
                    </Grid>
                    <p className="learned">
                      Learned:
                      <Button
                        leftIcon={<SiNextdotjs />}
                        colorScheme="gray"
                        variant="ghost"
                      >
                        NextJs
                      </Button>
                    </p>
                    <p className="reason">
                      I built this because I had been thinking about a portfolio
                      for a while and heard a <br /> lot of good things about
                      NextJs so wanted to try it out!
                    </p>
                  </Container>
                </Grid>
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
