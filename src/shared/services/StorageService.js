export default class StorageService {
    static getFromStorage() {
        const cars = window.localStorage.getItem('cars');
        return cars ? (
            JSON.parse(cars) === '' ? [] : JSON.parse(cars)
        ) : [];
    }

    static addToStorage(cars) {
        window.localStorage.setItem('cars', JSON.stringify(cars));
    }
}
