import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorsActions from "../../redux/actions/authorActios";
import PropTypes from "prop-types";
import CourseList from './CourseList';

function ManageCoursesPage({ authors, courses, loadAuthors, loadCourses }) {

    useEffect(() => {
        if (courses.length === 0) {
            loadCourses();
        }
        if (authors.length === 0) {
            loadAuthors();
        }
    })

    return (
        <div>
            <CourseList courses={courses} />
        </div>
    );
}

ManageCoursesPage.propTypes = {
    courses: PropTypes.array.isRequired
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

const mapDispatchToProps = {
    loadCourses: courseActions.loadCourses,
    loadAuthors: authorsActions.loadAuthors
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageCoursesPage);
