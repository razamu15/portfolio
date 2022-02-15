import React from 'react';
import Head from 'next/head';
import { Title, Text, Container } from '@components';

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
