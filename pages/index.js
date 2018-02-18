import fetch from "isomorphic-unfetch";

import Layout from '../components/layout';
import Prices from '../components/prices';

const Index = (props) => (
  <Layout>
    <Prices bpi={props.bpi}/>
    <small>{props.disclaimer}</small>

    <style jsx>{`
      small {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        padding: 25px;
        text-align: center;
        color: #777;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi,
    disclaimer: data.disclaimer
  };
};

export default Index;