import React, { useState } from 'react';
import StorageService from '../shared/services/StorageService';
import RdwService from '../shared/services/RdwService';
import CarModel from '../shared/models/Car';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Dialog from './components/Dialog';
import CompareDialog from './components/CompareDialog';
import Recents from './components/Recents';
import CarInfoDialog from './components/CarInfoDialog';
import Loader from './components/Loader';
import Error from './components/Error';

export const App = () => {
	const [currentCar, setCurrentCar] = useState();
    const [error, setError] = useState(undefined);
	const [cars, setCars] = useState(StorageService.getFromStorage());
	const [carToDelete, setCarToDelete] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);
	const [isClearVisible, setIsClearVisible] = useState(false);
    const [isCompareVisible, setIsCompareVisible] = useState(false);

    const handleReturnClick = () => {
        setCurrentCar(undefined);
    };

    const handleCompareToggle = () => {
        setIsCompareVisible(!isCompareVisible);
	};

	const handleClearToggleClick = () => {
		setIsClearVisible(!isClearVisible);
	};

    const handleClear = () => {
		setIsClearVisible(false);
        setCars([]);
        StorageService.addToStorage('');
	}

	const handleDeleteCarToggle = (carIndex) => {
		setCarToDelete(carIndex);
	};

    const handleDeleteCar = () => {
		const newCars = cars.filter((car, index) => index !== carToDelete);
		setCarToDelete(undefined);
        setCars(newCars);
        StorageService.addToStorage(newCars);
    }

    const handleItemClick = async (numberPlate) => {
        await handleNumberPlateSubmit(numberPlate, false);
    }

    const handleNumberPlateSubmit = async (numberPlate, shouldAddCar = true) => {
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
				const carsToAdd = [car, ...cars];
                setCars(carsToAdd);
                StorageService.addToStorage(carsToAdd);
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
                onCompareClick={handleCompareToggle}
				onClearClick={handleClearToggleClick}
                onItemClick={handleItemClick}
				onDeleteCarClick={handleDeleteCarToggle}
            />
            {currentCar && (
                <CarInfoDialog
                    item={currentCar}
                    onReturnClick={handleReturnClick}
                />
            )}
            {isCompareVisible && (
                <CompareDialog
                    items={cars}
                    onReturnClick={handleCompareToggle}
                />
            )}
			{isClearVisible && (
				<Dialog
					label="Weet je zeker dat je alle auto's wilt verwijderen?"
					onConfirmClick={handleClear}
					onCloseClick={handleClearToggleClick}
					isSmall
				/>
			)}
			{carToDelete !== undefined && (
				<Dialog
					label="Weet je zeker dat je deze auto wilt verwijderen?"
					onConfirmClick={handleDeleteCar}
					onCloseClick={handleDeleteCarToggle}
					isSmall
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
