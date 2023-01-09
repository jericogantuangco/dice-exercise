import React, {Component} from 'react';
import './Die.css';


class Die extends Component {
    render() {
        const isRolling = this.props.rolling? 'rolling': ''
        const clsName = `Die fas fa-dice-${this.props.face} ${isRolling}`
        return <i className={clsName}></i>
    }
}

export default Die;