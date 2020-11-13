import React from 'react';
import { Image } from 'semantic-ui-react';

const smallLogo = '../images/smallLogo.png';
/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
          <Image src={smallLogo} size= 'medium' centered />
    );
  }
}

export default Landing;
