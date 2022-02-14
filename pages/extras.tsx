import React from 'react';
import { Title, Text, Container, Grid, Link, Card } from '@components';
import { GetStaticProps } from 'next';
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
import { getPosts, Post } from '@posts';
import { TransparentLink } from '@components';

interface AboutProps {
  experiences: Post[];
}

const About = ({ experiences }: AboutProps): JSX.Element => {
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
          Extra Curriculars
        </Title>
        <Container maxWidth={['100%', '720px']} marginY="2rem">
          <Text>I love getting involved in the things I care about.</Text>
          <Text>
            During my time at university, I have found plenty of opportunities
            to get involved in the community around me. I have gained a lot from
            them, especially being able to meet and talk to many people and
            seeing differnt perspectives has been the most enjoyable part.
          </Text>
        </Container>
      </Container>

      <Container
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        paddingBottom="4rem"
        gridGap="3rem"
      >
        <Container width="100%">
          {experiences.map(({ data }, i) => (
            <Grid
              key={i}
              gridTemplateColumns="1fr 4fr"
              justifyItems="flex-start"
              gridGap="1rem"
              paddingY="2rem"
              borderBottom="1px solid rgba(0,0,0,0.1)"
            >
              <Container width="100%">
                <Text>0{experiences.length - i}</Text>
              </Container>
              <Grid width="100%" gridTemplateColumns="4fr 1fr">
                <Container
                  width="100%"
                  alignItems="flex-start"
                  textAlign="start"
                >
                  <Grid
                    width="100%"
                    gridTemplateColumns="repeat(2, auto)"
                    justifyItems="flex-start"
                    justifyContent="flex-start"
                    gridGap="1rem"
                  >
                    <Title fontSize="1.5rem" margin={0} as="h3">
                      {data.post}
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
                      {data.title}
                    </Title>
                    <Text
                      fontSize="smaller"
                      margin={0}
                      color="rgba(0, 0, 0, 0.1)"
                    >
                      {data.date}
                    </Text>
                  </Grid>
                  <Text fontSize="1rem">{data.caption}</Text>
                </Container>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('extras');
  experiences.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      experiences,
    },
  };
};

export default About;