import React from 'react';
import { Badge, Text } from '@chakra-ui/react';

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
  SiJava,
  SiC,
  SiJavascript,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiGatsby,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiNodedotjs,
  SiNginx,
  SiNetlify,
  SiDigitalocean,
  SiApachekafka,
  SiGnubash,
  SiExpress,
  SiFirebase,
  SiLinux,
  SiJquery,
  SiFlask,
  SiGit,
  SiMicrosoftsqlserver,
  SiSqlite,
  SiSocketdotio,
  SiPostman,
  SiInsomnia,
  SiIntellijidea,
  SiVisualstudiocode,
  SiApachejmeter,
  SiAzuredevops,
  SiVmware,
  SiJirasoftware,
  SiTeamcity,
  SiWebrtc,
  SiMicrosoftaccess,
  SiDotnet,
  SiMaterialui,
  SiBulma,
  SiAzurefunctions,
  SiTwilio,
  SiContentful,
  SiChakraui,
  SiGithubactions,
  SiUbuntu,
} from 'react-icons/si';
import { AiOutlinePartition } from 'react-icons/ai';
import { IoGameControllerSharp } from 'react-icons/io5';
import { GiCamel } from 'react-icons/gi';
import { BsCode } from 'react-icons/bs';
import { VscAzure } from 'react-icons/vsc';

export interface PanelProps {
  noob: string[];
  pro: string[];
}

const techIcons = {
  template: {
    Icon: null,
    url: '',
    name: 'template',
  },
  ubuntu: {
    Icon: SiUbuntu,
    url: 'https://ubuntu.com/',
    name: 'Ubuntu',
  },
  githubactions: {
    Icon: SiGithubactions,
    url: 'https://github.com/features/actions',
    name: 'Github Actions',
  },
  chakra: {
    Icon: SiChakraui,
    url: '',
    name: 'Chakra UI',
  },
  contentful: {
    Icon: SiContentful,
    url: 'https://www.contentful.com/',
    name: 'Contentful',
  },
  ai: {
    Icon: AiOutlinePartition,
    url: 'https://en.wikipedia.org/wiki/Neural_network',
    name: 'Neural Networks',
  },
  twilio: {
    Icon: SiTwilio,
    url: 'https://www.twilio.com/',
    name: 'Twilio Video',
  },
  cloudfunc: {
    Icon: SiAzurefunctions,
    url: 'https://cloud.google.com/functions',
    name: 'Cloud Functions',
  },
  bulma: {
    Icon: SiBulma,
    url: 'https://bulma.io/',
    name: 'Bulma CSS',
  },
  materialui: {
    Icon: SiMaterialui,
    url: 'https://mui.com/',
    name: 'Material UI',
  },
  gamedev: {
    Icon: IoGameControllerSharp,
    url: 'https://phaser.io/',
    name: 'Game Dev',
  },
  dotnet: {
    Icon: SiDotnet,
    url: 'https://dotnet.microsoft.com/en-us/',
    name: 'Dot NET',
  },
  access: {
    Icon: SiMicrosoftaccess,
    url: 'https://www.microsoft.com/en-ca/microsoft-365/access',
    name: 'Access',
  },
  webrtc: {
    Icon: SiWebrtc,
    url: 'https://webrtc.org/',
    name: 'Web RTC',
  },
  teamcity: {
    Icon: SiTeamcity,
    url: 'https://www.jetbrains.com/teamcity/',
    name: 'Teamcity',
  },
  jira: {
    Icon: SiJirasoftware,
    url: 'https://www.atlassian.com/software/jira',
    name: 'Jira',
  },
  vmware: {
    Icon: SiVmware,
    url: 'https://www.vmware.com/ca.html',
    name: 'Vmware',
  },
  azuredevops: {
    Icon: SiAzuredevops,
    url: 'https://azure.microsoft.com/en-us/services/devops/#overview',
    name: 'Azure Devops',
  },
  jmeter: {
    Icon: SiApachejmeter,
    url: 'https://jmeter.apache.org/',
    name: 'Apache Jmeter',
  },
  vscode: {
    Icon: SiVisualstudiocode,
    url: 'https://code.visualstudio.com/',
    name: 'VsCode',
  },
  insomnia: {
    Icon: SiInsomnia,
    url: 'https://insomnia.rest/',
    name: 'Insomnia',
  },
  intellij: {
    Icon: SiIntellijidea,
    url: 'https://www.jetbrains.com/idea/',
    name: 'Intellij',
  },
  postman: {
    Icon: SiPostman,
    url: 'https://www.postman.com/',
    name: 'Postman',
  },
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
    name: 'Google Cloud Platform',
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
    url: 'https://www.microsoft.com/en-us/download/details.aspx?id=7029',
    name: 'C#',
  },
  neo4j: {
    Icon: SiNeo4J,
    url: 'https://neo4j.com/',
    name: 'Neo4J',
  },
  perl: {
    Icon: GiCamel,
    url: 'https://www.perl.org/',
    name: 'Perl',
  },
  matlab: {
    Icon: BsCode,
    url: 'https://www.mathworks.com/products/matlab.html',
    name: 'Matlab',
  },
  java: {
    Icon: SiJava,
    url: 'https://www.java.com/en/',
    name: 'Java',
  },
  javascript: {
    Icon: SiJavascript,
    url: 'https://www.javascript.com/',
    name: 'Javascript',
  },
  c: {
    Icon: SiC,
    url: 'https://en.wikipedia.org/wiki/C_(programming_language)#:~:text=C%20(%2F%CB%88si%CB%90%2F,efficiently%20to%20typical%20machine%20instructions.',
    name: 'C',
  },
  html: {
    Icon: SiHtml5,
    url: 'https://html.spec.whatwg.org/',
    name: 'HTML',
  },
  css: {
    Icon: SiCss3,
    url: 'https://www.w3.org/Style/CSS/Overview.en.html',
    name: 'CSS',
  },
  nginx: {
    Icon: SiNginx,
    url: 'https://www.nginx.com/',
    name: 'NGINX',
  },
  netlify: {
    Icon: SiNetlify,
    url: 'https://www.netlify.com/',
    name: 'Netlify',
  },
  digitalocean: {
    Icon: SiDigitalocean,
    url: 'https://www.digitalocean.com/',
    name: 'DigitalOcean',
  },
  azure: {
    Icon: VscAzure,
    url: 'https://azure.microsoft.com/en-ca/',
    name: 'Azure',
  },
  kafka: {
    Icon: SiApachekafka,
    url: 'https://kafka.apache.org/',
    name: 'Kafka',
  },
  bash: {
    Icon: SiGnubash,
    url: 'https://www.gnu.org/software/bash/',
    name: 'Bash',
  },
  linux: {
    Icon: SiLinux,
    url: 'https://www.linux.org/',
    name: 'Linux',
  },
  firebase: {
    Icon: SiFirebase,
    url: 'https://firebase.google.com/',
    name: 'Firebase',
  },
  docker: {
    Icon: SiDocker,
    url: 'https://www.docker.com/',
    name: 'Docker',
  },
  redis: {
    Icon: SiRedis,
    url: 'https://redis.io/',
    name: 'Redis',
  },
  mongo: {
    Icon: SiMongodb,
    url: 'https://www.mongodb.com/',
    name: 'MongoDB',
  },
  mysql: {
    Icon: SiMysql,
    url: 'https://www.mysql.com/',
    name: 'MySQL',
  },
  node: {
    Icon: SiNodedotjs,
    url: 'https://nodejs.org/en/',
    name: 'NodeJS',
  },
  express: {
    Icon: SiExpress,
    url: 'https://expressjs.com/',
    name: 'ExpressJS',
  },
  jquery: {
    Icon: SiJquery,
    url: 'https://jquery.com/',
    name: 'jQuery',
  },
  gatsby: {
    Icon: SiGatsby,
    url: 'https://www.gatsbyjs.com/',
    name: 'GatsbyJS',
  },
  flask: {
    Icon: SiFlask,
    url: 'https://flask.palletsprojects.com/en/2.0.x/',
    name: 'Flask',
  },
  git: {
    Icon: SiGit,
    url: 'https://git-scm.com/',
    name: 'Git',
  },
  sqlserver: {
    Icon: SiMicrosoftsqlserver,
    url: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019',
    name: 'SQL Server',
  },
  sqlite: {
    Icon: SiSqlite,
    url: 'https://sqlite.org/index.html',
    name: 'Sqlite',
  },
  socketio: {
    Icon: SiSocketdotio,
    url: 'https://socket.io/',
    name: 'Socket.io',
  },
};

import { Container, Grid, Link, Card } from '@components';

export interface PanelProps {
  noob: string[];
  pro: string[];
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
          borderRadius="lg"
          colorScheme="cyan"
        >
          Novice
        </Badge>
        <div className="tech-level">
          {noob.map((tech, i) => {
            let tecObj = techIcons[tech];
            return (
              <Link href={tecObj.url} key={i}>
                <Card key={i}>
                  <tecObj.Icon size="2rem" />
                  <Text fontSize="xs" marginTop="3px">
                    {tecObj.name}
                  </Text>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
      <Container>
        <Badge
          ml="1"
          mb="1rem"
          fontSize="0.8em"
          colorScheme="purple"
          borderRadius="lg"
        >
          Advanced
        </Badge>
        <div className="tech-level">
          {pro.map((tech, i) => {
            let tecObj = techIcons[tech];
            return (
              <Link href={tecObj.url} key={i}>
                <Card key={i}>
                  <tecObj.Icon size="2rem" />
                  <Text fontSize="xs" marginTop="3px">
                    {tecObj.name}
                  </Text>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </Grid>
  );
}

function getIcons(stack: string[]) {
  let result: string[] = [];
  stack.forEach((tech) => {
    result.push(techIcons[tech]);
  });
  return result;
}

export { TechPanel, getIcons };
