import React from 'react';
import './Navigation.css';
import { useDispatch } from 'react-redux';
import { setSelectedTopic } from '../components/redux/actions';

const Navigation = () => {
    const dispatch = useDispatch();

    const handleTopicClick = (topic) => {
        dispatch(setSelectedTopic(topic));
    };

    const handleHomeClick = () => {
        dispatch(setSelectedTopic(''));
    };

    return (
        <ul className="navbar-nav flex-grow-1 custom-navigation">
            <li className="nav-item">
                <a className="nav-link text-light" onClick={handleHomeClick}>Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" onClick={() => handleTopicClick('SamhalleKonflikter')}>SamhälleKonflikter</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" onClick={() => handleTopicClick('Ekonomi')}>Ekonomi</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" onClick={() => handleTopicClick('Politik')}>Politik</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" onClick={() => handleTopicClick('Idrott')}>Idrött</a>
            </li>
        </ul>
    );
};

export default Navigation;

