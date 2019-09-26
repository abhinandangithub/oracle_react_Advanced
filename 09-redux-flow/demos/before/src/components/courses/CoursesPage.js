import React from "react";
import { connect } from "react-redux";
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ''
    }
  };

  handleSave = (event) => {
    event.preventDefault();
    debugger;
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  handleChange = (event) => {
    //const course = { ...this.state.course, title: event.target.value };
    this.setState({
      course: { title: event.target.value }
    });
  }

  render() {
    return (
      <div>
        <h4>Course Form</h4>
        <form>
          <input onChange={this.handleChange} value={this.state.course.title} />
          <input onClick={this.handleSave} type="submit" value="save" />
          {this.props.courses.map(c => (
            <div key={c.title}>{c.title}</div>
          ))}
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  debugger;
  return {
    courses: state.courses
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(CoursesPage);
