import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorsActions from "../../redux/actions/authorActios";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from './CourseList';

class CoursesPage extends React.Component {

  componentDidMount() {
    if (this.props.courses.length === 0) {
      this.props.actions.loadCourses();
    }
    if (this.props.authors.length === 0) {
      this.props.actions.loadAuthors();
    }
  }

  render() {
    return (
      <div>
        <CourseList courses={this.props.courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    courses: !state.authors.length ? [] : state.courses.map(course => {
      return {
        ...course,
        authorName: state.authors.find(a => a.id == course.authorId).name
      }
    }),
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorsActions.loadAuthors, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
