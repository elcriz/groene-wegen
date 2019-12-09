import React from 'react';
import { FaCircleNotch } from 'react-icons/fa';

export const Loader = () => (
    <div className="loader">
        <div className="loader__inner">
            <FaCircleNotch className="loader__icon" />
        </div>
    </div>
);

export default Loader;
