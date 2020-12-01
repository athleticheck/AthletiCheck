import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = {
      paddingTop: '15px',
      color: 'white',
    };
    return (
        <footer className="footer">
          <div style={divStyle} className="ui center aligned container">
            <hr />
              AthletiCheck <br />
              University of Hawaii<br />
              Honolulu, HI 96822 <br />
              Visit us: <br />
            <a href="https://athleticheck.github.io/">AthletiCheck Project</a>
          </div>
        </footer>
    );
  }
}

export default Footer;
