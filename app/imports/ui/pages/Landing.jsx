import React from 'react';
import { Image } from 'semantic-ui-react';

const FullImage = '../images/collage.png';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Image src={FullImage} fluid />
    );
  }
}

export default Landing;
