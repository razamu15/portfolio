import React from 'react';
import { Badge } from '@chakra-ui/react';

import {
  SiGo,
  SiKubernetes,
  SiPostgresql,
  SiTypescript,
  SiAmazonaws,
  SiGooglecloud,
  SiTerraform,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiGraphql,
  SiCsharp,
  SiNeo4J,
} from 'react-icons/si';

const techIcons = {
  golang: {
    Icon: SiGo,
    url: 'https://golang.org/',
    name: 'Golang',
  },
  kubernetes: {
    Icon: SiKubernetes,
    url: 'https://kubernetes.io/',
    name: 'Kubernetes',
  },
  typescript: {
    Icon: SiTypescript,
    url: 'https://www.typescriptlang.org/',
    name: 'Typescript',
  },
  react: {
    Icon: SiReact,
    url: 'https://reactjs.org/',
    name: 'React',
  },
  graphql: {
    Icon: SiGraphql,
    url: 'https://graphql.org/',
    name: 'GraphQL',
  },
  aws: {
    Icon: SiAmazonaws,
    url: 'https://aws.amazon.com/',
    name: 'AWS',
  },
  next: {
    Icon: SiNextdotjs,
    url: 'https://nextjs.org/',
    name: 'NextJs',
  },
  gcp: {
    Icon: SiGooglecloud,
    url: 'https://cloud.google.com/',
    name: 'GCP',
  },
  terraform: {
    Icon: SiTerraform,
    url: 'https://www.terraform.io/',
    name: 'Terraform',
  },
  postgres: {
    Icon: SiPostgresql,
    url: 'https://www.postgresql.org/',
    name: 'PostgreSQL',
  },
  python: {
    Icon: SiPython,
    url: 'https://www.python.org/',
    name: 'Python',
  },
  'c#': {
    Icon: SiCsharp,
    url: 'https://www.python.org/',
    name: 'c#',
  },
  neo4j: {
    Icon: SiNeo4J,
    url: 'https://www.python.org/',
    name: 'Neo4J',
  },
  template: {
    Icon: null,
    url: 'https://www.',
    name: 'template',
  },
};

import { Container, Grid, Link, Card } from '@components';

export interface PanelProps {
  noob: [String];
  pro: [String];
}

function TechPanel({ noob, pro }: PanelProps) {
  return (
    <Grid
      gridGap="2rem"
      gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
      justifyItems="stretch"
      alignItems="stretch"
    >
      <Container>
        <Badge
          ml="1"
          mb="1rem"
          fontSize="0.8em"
          colorScheme="green"
          borderRadius="lg"
        >
          Beginner
        </Badge>
        <div className="tech-level">
          {noob.map((tech, i) => {
            let Icon = techIcons[tech].Icon;
            return (
              <Card key={i}>
                <Icon size="2rem" />
              </Card>
            );
          })}
        </div>
      </Container>
      <Container>
        <Badge
          ml="1"
          mb="1rem"
          fontSize="0.8em"
          colorScheme="green"
          borderRadius="lg"
        >
          Advanced
        </Badge>
        <div className="tech-level">
          {pro.map((tech, i) => {
            let Icon = techIcons[tech].Icon;
            let link = techIcons[tech].url;
            return (
              <Link href={link} key={i}>
                <Card>
                  <Icon size="2rem" />
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </Grid>
  );
}

export default TechPanel;
