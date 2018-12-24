import React, { Component } from 'react';
import { Icon, Portal } from './index';
import './modal.css';

export default class Modal extends Component {
    render() {
        const { children, toggle, on } = this.props;
        return (
            <Portal>
                {on && 
                (<div className="modalWrapper">
                        <div className="modalCard">
                            <div className="closeButton" onClick={toggle}>
                             <Icon name="close" color="red"/>
                            </div>
                            <div>{children}</div>
                        </div>
                    <div className="background" onClick={toggle}></div>
                </div>
                )}
            </Portal>
        )
    }
}