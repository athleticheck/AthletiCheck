import React from 'react';
import { Card, Icon, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Contacts table. See pages/ListContacts.jsx. */
class Visit extends React.Component {
  render() {
    return (
        <Card fluid>
          <Card.Content>
            {this.props.cleared === true ? (
                <Label color='green' ribbon='right'>
                  CLEARED <Icon name='checkmark'/>
                </Label>
            ) : (
                <Label color='red' ribbon='right'>
                  NOT CLEARED <Icon name='x'/>
                </Label>
            )}
            <Card.Header>
              {this.props.date}
            </Card.Header>
            <Card.Meta>
              by {this.props.trainer}
            </Card.Meta>
            <Card.Description>
              {this.props.note}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Visit.propTypes = {
  date: PropTypes.string.isRequired,
  trainer: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  cleared: PropTypes.bool.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default (Visit);
