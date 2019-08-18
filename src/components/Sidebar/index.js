import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './styles.css';

import * as CourseActions from '../../store/actions/course';

const Sidebar = ({ modules, toggleLesson }) => (
    <aside className="sideBar">
        {modules.map(module => (
            <div key={module.id}>
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson => (
                        <li key={lesson.id}>
                            <span onClick={() => toggleLesson(module, lesson)}>{lesson.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
);

const mapStateToProps = state => ({
    modules: state.course.modules
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CourseActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
