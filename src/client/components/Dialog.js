import React from 'react';
import PropTypes from 'prop-types';

export const Dialog = ({
    children,
    onCloseClick
}) => (
    <div className="dialog">
        <div className="dialog__inner">
            {children}
            {onCloseClick && (
                <div className="dialog__actions">
                    <button
                        className="dialog__action dialog__action--close"
                        onClick={onCloseClick}
                    >
                        Sluiten
                    </button>
                </div>
            )}
        </div>
    </div>
);

Dialog.propTypes = {
    children: PropTypes.node.isRequired,
    onCloseClick: PropTypes.func
};

export default Dialog;
