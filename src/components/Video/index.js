import React from 'react';

import './styles.css';

import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => (
    <div className="video">
        <strong>{activeModule.title}</strong>
        <span>{activeLesson.title}</span>
        {!activeLesson.title ?
            <div className="video-main">
                <h1>Bem Vindo ao nosso Site</h1>
                <h3>Escolha as aulas no sidebar ao lado => </h3>
            </div>
            : <iframe className="video-player" src={activeLesson.url}></iframe>
        }

    </div>
);

export default connect(state => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson,
}))(Video);
