import React from 'react';
import Head from 'next/head';
import { Title, Text, Container, Grid } from '@components';
import { Button } from '@chakra-ui/react';
import { SiNextdotjs } from 'react-icons/si';
import { GetStaticProps } from 'next/types';
import { getTimeline, Post } from '@posts';

interface AboutProps {
  timeline: Post[];
}

const About = ({ timeline }: AboutProps): JSX.Element => {
  console.log(timeline);

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

      <Container width="100%" padding="4rem 15%" gridGap="3rem">
        <Title fontSize="40px" as="h2">
          My Learning Journey
        </Title>
        <Container width="100%">
          <div className="timeline-bg">
            <dl>
              {timeline.map((entry: Post, i) => {
                return (
                  <div key={i} className="timeline-entry">
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
                            {entry.data.title}
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
                            {entry.data.type}
                          </Title>
                          <Text
                            fontSize="smaller"
                            margin={0}
                            color="rgba(0, 0, 0, 0.1)"
                          >
                            {entry.data.date}
                          </Text>
                        </Grid>
                        <p className="learned">
                          Learned:
                          {entry.data.new.map((skill: String) => {
                            return (
                              <Button
                                leftIcon={<SiNextdotjs />}
                                colorScheme="gray"
                                variant="ghost"
                              >
                                {skill}
                              </Button>
                            );
                          })}
                        </p>
                        <p className="reason">{entry.data.learned}</p>
                      </Container>
                    </Grid>
                  </div>
                );
              })}
            </dl>
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let timeline = await getTimeline();
  timeline = timeline
    .filter((ele) => ele.data.journey)
    .sort((a, b) =>
      b.data.date.toString().localeCompare(a.data.date.toString()),
    );

  return {
    props: {
      timeline,
    },
  };
};

export default About;
