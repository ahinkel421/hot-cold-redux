import React from 'react';
import {connect} from 'react-redux';
import './top-nav.css';
import {setNewGame, toggleInfo} from '../actions'

export class TopNav extends React.Component {
    setNewGame(event) {
        event.preventDefault();
        this.props.dispatch(setNewGame());
    }

    toggleInfo(event) {
        event.preventDefault();
        this.props.dispatch(toggleInfo());
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.toggleInfo(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.setNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);

