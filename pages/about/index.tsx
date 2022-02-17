import React from 'react';
import Head from 'next/head';
import { Title, Text, Container, Grid, getIcons } from '@components';
import { Button } from '@chakra-ui/react';
import { GetStaticProps } from 'next/types';
import { getTimeline, Post } from '@posts';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const sorter = (a, b) => {
  if (a.year !== b.year) {
    return a.year - b.year;
  } else {
    return months.indexOf(a.month) - months.indexOf(b.month);
  }
};

interface AboutProps {
  timeline: Post[];
}

const About = ({ timeline }: AboutProps): JSX.Element => {
  const journey = React.useRef(null);

  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <Container alignContent="center" alignItems="center">
        <Title fontSize={['3rem', '4rem']} as="h2">
          Lifelong Learner
        </Title>
        <Container maxWidth={['100%', '720px']} marginY="2rem">
          <Text>
            I absolutely love learning new technologies. I am always building
            something new, trying out a UI Library or framework, or creating a
            side project with the latest and greated cloud architecture and
            trends.
          </Text>
          <Text>
            Personally, sticking to the same tech stack and doing the same thing
            repeatedly gets boring; and I&apos;m blessed to be in software,
            because there is always something new to learn or try out. &nbsp; My
            goal as a professional is to be in a role where I can learn and grow
            everyday while working on a product that I truly care about. &nbsp;
            <a
              style={{ cursor: 'pointer' }}
              onClick={() =>
                journey.current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              What im learning 👇
            </a>
          </Text>
        </Container>
      </Container>

      <Container width="100%" padding="4rem 15%" gridGap="3rem">
        <Title ref={journey} fontSize="40px" as="h2">
          My Learning Journey
        </Title>
        <Container width="100%">
          <div className="timeline-bg">
            <dl>
              {timeline.map((entry: Post, i) => {
                return (
                  <div key={i} className="timeline-entry">
                    <dt />
                    <Grid width="100%" marginTop="-30px">
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
                          marginTop="0.5rem"
                          gridGap="2rem"
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
                          New Tech:
                          {getIcons(entry.data.new).map((tecObj) => {
                            return (
                              <Button
                                leftIcon={<tecObj.Icon />}
                                colorScheme="gray"
                                variant="ghost"
                              >
                                {tecObj.name}
                              </Button>
                            );
                          })}
                        </p>
                        <p className="reason">
                          <span
                            style={{ fontWeight: '500', marginRight: '10px' }}
                          >
                            Learned:
                          </span>{' '}
                          {entry.data.learned}
                        </p>
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
    .sort((a, b) => {
      let x = {
        month: a.data.date.split(' ')[0],
        year: parseInt(a.data.date.split(' ')[1]),
      };
      let y = {
        month: b.data.date.split(' ')[0],
        year: parseInt(b.data.date.split(' ')[1]),
      };
      return sorter(y, x);
    });

  return {
    props: {
      timeline,
    },
  };
};

export default About;
