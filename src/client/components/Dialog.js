import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Dialog = ({
	children,
	label,
	onConfirmClick,
	onCloseClick,
	isSmall
}) => (
	<div
		className={classnames('dialog', {
			'dialog--small': isSmall
		})}
	>
        <div className="dialog__inner">
			{label && (
				<div className="dialog__label">
					{label}
				</div>
			)}
            {children}
            {(onConfirmClick || onCloseClick) && (
				<div
					className={classnames('dialog__actions', {
						'dialog__actions--equally-sized': onConfirmClick && onCloseClick
					})}
				>
					{onCloseClick && (
						<button
							className="dialog__action dialog__action--close"
							onClick={() => {
								onCloseClick();
							}}
						>
							Sluiten
						</button>
					)}
					{onConfirmClick && (
						<button
							className="dialog__action dialog__action--confirm"
							onClick={() => {
								onConfirmClick();
							}}
						>
							Bevestigen
						</button>
					)}
                </div>
            )}
        </div>
    </div>
);

Dialog.propTypes = {
	children: PropTypes.node,
	label: PropTypes.string,
	onConfirmClick: PropTypes.func,
	onCloseClick: PropTypes.func,
	isSmall: PropTypes.bool.isRequired
};

Dialog.defaultProps = {
	isSmall: false
};

export default Dialog;
