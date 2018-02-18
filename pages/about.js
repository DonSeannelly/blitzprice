import Layout from '../components/layout';

const About = () => (
  <Layout>
    <h1>About BlitzPrice</h1>
    <br />
    <p>
      BlitzPrice was made as part of my 2018 App Development Challenge.
      Topics explored in development include:
    </p>
    <ul>
      <li><a href="https://reactjs.org/">React</a> for building user interfaces</li>
      <li>Server-rendered React applications via <a href="https://github.com/zeit/next.js/">Next.js</a></li>
      <li>Isolated, scoped CSS via <a href="https://www.npmjs.com/package/styled-jsx">styled-jsx</a></li>
    </ul>
  </Layout>
);

export default About;