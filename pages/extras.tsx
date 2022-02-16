import React from 'react';
import { Title, Text, Container, Grid } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPosts, Post } from '@posts';

interface ExtraCurrProps {
  extras: Post[];
}

const Extracurriculars = ({ extras }: ExtraCurrProps): JSX.Element => {
  return (
    <Container>
      <Head>
        <title>Extracurriculars</title>
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
          {extras.map(({ data }, i) => (
            <Grid
              key={i}
              gridTemplateColumns="1fr 4fr"
              justifyItems="flex-start"
              gridGap="1rem"
              paddingY="2rem"
              borderBottom="1px solid rgba(0,0,0,0.1)"
            >
              <Container width="100%">
                <Text>0{extras.length - i}</Text>
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
  const extras = await getPosts('extras');
  extras.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      extras,
    },
  };
};

export default Extracurriculars;
