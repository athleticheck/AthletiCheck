import React from 'react';
import { Feed, Divider, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single comment on a visit */
class Comment extends React.Component {
  render() {
    return (
        // <Container>
        //   <Divider/>
        //   <Feed.Event>
        //     <Feed.Date as='comment-date-display'>
        //       {this.props.comment.date.toLocaleDateString('en-US')}
        //     </Feed.Date>
        //     <Feed.Content>
        //       <Feed.Summary>
        //         by <Feed.User>{this.props.comment.author}</Feed.User>
        //       </Feed.Summary>
        //       <Feed.Summary>
        //         {this.props.comment.comment}
        //       </Feed.Summary>
        //       <Feed.Extra/>
        //     </Feed.Content>
        //   </Feed.Event>
        // </Container>
        <Container>
          <Divider/>
          <Feed.Event>
            <Feed.Content className='comment-date'>{this.props.comment.date.toLocaleDateString('en-US')}</Feed.Content>
            <Feed.Content>by {this.props.comment.author}</Feed.Content>
            <Feed.Content className='black-text'>{this.props.comment.comment}</Feed.Content>
          </Feed.Event>
        </Container>
    );
  }
}

/** Require documents to be passed to this component. */
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Comment);
