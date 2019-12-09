import React, { useState } from 'react';
import StorageService from '../shared/services/StorageService';
import RdwService from '../shared/services/RdwService';
import CarModel from '../shared/models/Car';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Compare from './components/Compare';
import Recents from './components/Recents';
import CarInfo from './components/CarInfo';
import Loader from './components/Loader';
import Error from './components/Error';

export const App = () => {
    const [currentCar, setCurrentCar] = useState();
    const [error, setError] = useState(undefined);
    const [cars, setCars] = useState(StorageService.getFromStorage());
    const [isLoading, setIsLoading] = useState(false);
    const [isCompareVisible, setIsCompareVisible] = useState(false);

    const handleReturnClick = () => {
        setCurrentCar(undefined);
    };

    const handleCompareToggleClick = () => {
        setIsCompareVisible(!isCompareVisible);
    }

    const handleClearClick = () => {
        setCars([]);
        StorageService.addToStorage('');
    }

    const handleDeleteCarClick = (carIndex) => {
        const newCars = cars.filter((car, index) => index !== carIndex);
        setCars(newCars);
        StorageService.addToStorage(newCars);
    }

    async function handleItemClick(numberPlate) {
        await handleNumberPlateSubmit(numberPlate, false);
    }

    async function handleNumberPlateSubmit(numberPlate, shouldAddCar = true) {
        setIsLoading(true);
        const general = await RdwService.getByNumberPlate(numberPlate);
        const environmental = await RdwService.getEnvironmentalByNumberPlate(numberPlate);
        const car = new CarModel({ environmental, ...general[0] });
        if (!car.numberPlate) {
            setError('Ongeldig kenteken');
            setTimeout(() => {
                setError(undefined);
            }, 2500);
        }
        if (car.numberPlate) {
            if (shouldAddCar) {
                setCars([car, ...cars]);
                StorageService.addToStorage([car, ...cars]);
            }
            setCurrentCar(car);
        }
        setIsLoading(false);
    }

    return (
        <React.Fragment>
            <Header>
                <SearchForm
                    onSubmit={handleNumberPlateSubmit}
                    isLoading={isLoading}
                />
            </Header>
            <Recents
                items={cars}
                onCompareClick={handleCompareToggleClick}
                onClearClick={handleClearClick}
                onItemClick={handleItemClick}
                onDeleteCarClick={handleDeleteCarClick}
            />
            {currentCar && (
                <CarInfo
                    item={currentCar}
                    onReturnClick={handleReturnClick}
                />
            )}
            {isCompareVisible && (
                <Compare
                    items={cars}
                    onReturnClick={handleCompareToggleClick}
                />
            )}
            {isLoading && (
                <Loader />
            )}
            {error && (
                <Error text={error} />
            )}
        </React.Fragment>
    );
};

export default App;
