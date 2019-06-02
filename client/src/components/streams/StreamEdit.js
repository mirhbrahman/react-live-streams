import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, _.pick(formValues, ['title', 'description']));
  }

  render() {
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={this.props.stream}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStatetoProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStatetoProps, { fetchStream, editStream })(StreamEdit);