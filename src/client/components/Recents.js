import React from 'react';
import PropTypes from 'prop-types';
import {
    FaBalanceScale,
    FaTrashAlt
} from 'react-icons/fa';
import EnergyLabel from './EnergyLabel';

export const Recents = ({
    items,
    onCompareClick,
    onClearClick,
    onItemClick,
    onDeleteCarClick
}) => (
    <div className="recents">
        {!items.length && (
            <div className="recents__empty-state">Je hebt nog geen auto's opgezocht...</div>
        )}
        {items.length > 0 && (
            <React.Fragment>
                <header className="recents__header">
                    <h2 className="recents__heading">Onlangs gecheckt</h2>
                    <aside className="recents__actions">
                        {items.length > 1 && (
                            <button
                                className="recents__action recents__action--compare"
                                title="Vergelijken"
                                onClick={onCompareClick}
                            >
                                <FaBalanceScale />
                            </button>
                        )}
                        <button
                            className="recents__action recents__action--clear"
                            type="button"
                            title="Verwijderen"
                            onClick={onClearClick}
                        >
                            <FaTrashAlt />
                        </button>
                    </aside>
                </header>
                <div className="recents__inner">
                    <div className="recents__items">
                        {items.map((item, index) => (
                            <React.Fragment key={index}>
                                <button
                                    className="recents__item"
                                    type="button"
                                    onClick={() => { onItemClick(item.numberPlate) }}
                                >
                                    <div className="recents__item-content">
                                        <h3 className="recents__item-name">
                                            {item.year} {item.brand} ({item.name})
                                        </h3>
                                        <div className="recents__item-meta-data">
                                            <div className="recents__item-number-plate">
                                                {item.numberPlate}
                                            </div>
                                            <div className="recents__item-engine-type">
                                                {item.engineType}
                                            </div>
                                        </div>
                                    </div>
                                    <EnergyLabel
                                        className="recents__item-energy-label"
                                        label={item.energyLabel}
                                    />
                                </button>
                                <button
                                    className="recents__delete-item-action"
                                    title="Verwijder auto"
                                    onClick={() => { onDeleteCarClick(index); }}
                                >
                                    <FaTrashAlt />
                                </button>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        )}
    </div>
);

Recents.propTypes = {
    items: PropTypes.array.isRequired,
    onCompareClick: PropTypes.func.isRequired,
    onClearClick: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired,
    onDeleteCarClick: PropTypes.func.isRequired
};

export default Recents;
