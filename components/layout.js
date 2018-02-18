import Navbar from './navbar';
import Head from 'next/head';

/**
 * A wrapper component for each page.
 * @param {*} props 
 */
const Layout = (props) => (
  <div>
    <Head>
      <title>BlitzPrice</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Navbar />
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;