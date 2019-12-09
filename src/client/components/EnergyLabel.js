import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const EnergyLabel = ({
    className,
    label
}) => (
    <div
        className={classnames(className, 'energy-label', {
            'energy-label--A': label === 'A',
            'energy-label--B': label === 'B',
            'energy-label--C': label === 'C',
            'energy-label--D': label === 'D',
            'energy-label--E': label === 'E',
            'energy-label--F': label === 'F',
            'energy-label--G': label === 'G',
            'energy-label--unknown': !label 
        })}
    >
        {label || '-'}
    </div>
);

EnergyLabel.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string
};

export default EnergyLabel;
