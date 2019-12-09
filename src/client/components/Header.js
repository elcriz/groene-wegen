import React from 'react';
import PropTypes from 'prop-types';
import { FaCarSide } from 'react-icons/fa';

export const Header = ({
    children
}) => (
    <header className="header">
        <hgroup className="header__heading-group">
            <h1 className="header__heading">GroeneWegen</h1>
            <h2 className="header__sub-heading">Check direct de impact van auto's op het milieu</h2>
        </hgroup>
        {children}
        <div className="header__icons">
            <FaCarSide className="header__icon header__icon--car" />
        </div>
    </header>
);

Header.propTypes = {
    children: PropTypes.node.isRequired
};

export default Header;
