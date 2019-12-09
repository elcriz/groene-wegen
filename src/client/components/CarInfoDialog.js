import React from 'react';
import PropTypes from 'prop-types';
import { FaCar } from 'react-icons/fa';
import Dialog from './Dialog';
import CarIdentity from './CarIdentity';

export const CarInfoDialog = ({
    item,
    onReturnClick
}) => (
    <Dialog
        onCloseClick={onReturnClick}
    >
        <div className="car-info car-info--positioned">
            <header className="car-info__header">
                <CarIdentity
                    item={item}
                />
            </header>
            <div className="car-info__inner">
                <div className="car-info__data">
                    <div className="car-info__data-inner">
                        <h2 className="car-info__data-heading">Verbruik</h2>
                        <dl className="car-info__data-list">
                            <dt>Stad</dt>
                            <dd>
                                <strong>{item.mileage && item.mileage.city ? item.mileage.city : '-'}</strong> l/100km
                            </dd>
                            <dt>Buitengebied</dt>
                            <dd>
                                <strong>{item.mileage && item.mileage.country ? item.mileage.country : '-'}</strong> l/100km
                            </dd>
                            <dt>Gecombineerd</dt>
                            <dd>
                                <strong>{item.mileage && item.mileage.combined ? item.mileage.combined : '-'}</strong> l/100km
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="car-info__data">
                    <div className="car-info__data-inner">
                        <h2 className="car-info__data-heading">Uitstoot</h2>
                        <dl className="car-info__data-list">
                            <dt>Klasse</dt>
                            <dd>
                                <strong>Euro {item.emissions && item.emissions.level ? item.emissions.level : '-'}</strong>
                            </dd>
                            <dt>CO2</dt>
                            <dd>
                                <strong>{item.emissions && item.emissions.co2 ? item.emissions.co2 : '-'}</strong> gr./km
                            </dd>
                            <dt>Roet</dt>
                            <dd>
                                <strong>{item.emissions && item.emissions.soot ? item.emissions.soot : '-'}</strong> gr./km
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="car-info__data">
                    <div className="car-info__data-inner">
                        <h2 className="car-info__data-heading">Motorgeluid</h2>
                        <dl className="car-info__data-list">
                            <dt>Stationair</dt>
                            <dd>
                                <strong>{item.noiseLevels && item.noiseLevels.inStationary ? item.noiseLevels.inStationary : '-'}</strong> dB
                            </dd>
                            <dt>In beweging</dt>
                            <dd>
                                <strong>{item.noiseLevels && item.noiseLevels.inMotion ? item.noiseLevels.inMotion : '-'}</strong> dB
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="car-info__data">
                    <div className="car-info__data-inner">
                        <h2 className="car-info__data-heading">Afmetingen</h2>
                        <dl className="car-info__data-list">
                            <dt>Type</dt>
                            <dd>
                                <strong>{item.sizes.type ? item.sizes.type : '-'}</strong>
                            </dd>
                            <dt>Ledig</dt>
                            <dd>
                                <strong>{item.sizes.empty ? item.sizes.empty : '-'}</strong> kg
                            </dd>
                            <dt>Rijklaar</dt>
                            <dd>
                                <strong>{item.sizes.loaded ? item.sizes.loaded : '-'}</strong> kg
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <span className="car-info__car-icon">
                <FaCar />
            </span>
        </div>
    </Dialog>
);

CarInfoDialog.propTypes = {
    item: PropTypes.object.isRequired,
    onReturnClick: PropTypes.func.isRequired
};

export default CarInfoDialog;
