import React from 'react';
import PropTypes from 'prop-types';
import EnergyLabel from './EnergyLabel';

export const CarIdentity = ({
    item
}) => (
    <div className="car-identity">
        <div className="car-identity__content">
            <h1 className="car-identity__name">
                {item.year} {item.brand} ({item.name})
            </h1>
            <div className="car-identity__meta-data">
                <div className="car-identity__number-plate">
                    {item.numberPlate}
                </div>
                <div className="car-identity__engine-type">
                    {item.engineType}
                </div>
            </div>
        </div>
        <EnergyLabel
            className="car-identity__energy-label"
            label={item.energyLabel}
        />
    </div>
);

CarIdentity.propTypes = {
    item: PropTypes.object.isRequired
};

export default CarIdentity;
