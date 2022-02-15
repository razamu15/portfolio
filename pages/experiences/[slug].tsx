import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NotionRenderer, NotionRendererProps, Code } from 'react-notion-x';
import { NotionAPI } from 'notion-client';
import Head from 'next/head';
import { getPosts, Post } from '@posts';
import { MDXRemote } from 'next-mdx-remote';
import { getPageInfo, Page, EXPERIENCES } from '@posts/notion';
import { Container } from '@components';

interface BlogProps {
  page: Page;
  recordMap: NotionRendererProps['recordMap'];
}

interface ExperienceProps {
  experiences: Post[];
}

const WebPage: NextPage<ExperienceProps> = ({
  experiences,
}: ExperienceProps) => (
  <>{experiences.map((experience) => About(experience))}</>
);

const About = ({ source, data }: Post) => (
  <Container
    width={['100%', 1200]}
    maxWidth="100vw"
    marginBottom={['1rem', '4rem']}
  >
    <Head>
      <title>{data.title}</title>
      <meta property="og:title" content={data.title} />
    </Head>
    <MDXRemote {...source} />
  </Container>
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(EXPERIENCES).map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      experiences,
    },
  };
};

export default WebPage;
