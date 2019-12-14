const fossileTuelTypes = ['Benzine', 'Diesel', 'LPG'];

export class Car {
    constructor({
        kenteken,
        merk,
        handelsbenaming,
        aantal_cilinders,
        cilinderinhoud,
        zuinigheidslabel,
        datum_eerste_toelating,
        inrichting,
        massa_ledig_voertuig,
        massa_rijklaar,
        environmental
    }) {
        const leadingEngine = getLeadingEngine(environmental);
        const secondaryEngine = getSecondaryEngine(environmental);

        this.numberPlate = kenteken;
        this.brand = merk;
        this.name = getCarName(merk, handelsbenaming);
        this.year = datum_eerste_toelating
            ? datum_eerste_toelating.substring(0, 4)
            : undefined;

        if (this.numberPlate) {
            this.isFossileFuelCar = isFossileFuelCar(leadingEngine);
            this.engineType = secondaryEngine
                ? `${leadingEngine.brandstof_omschrijving}/${secondaryEngine.brandstof_omschrijving}`
                : leadingEngine.brandstof_omschrijving;
            this.energyLabel = this.isFossileFuelCar
                ? zuinigheidslabel
                : 'A';
            this.mileage = this.isFossileFuelCar
                ? {
                    country: parseFloat(leadingEngine.brandstofverbruik_buiten),
                    city: parseFloat(leadingEngine.brandstofverbruik_stad),
                    combined: parseFloat(leadingEngine.brandstofverbruik_gecombineerd)
                }
                : undefined;
            this.emissions = this.isFossileFuelCar
            ? {
                level: parseFloat(leadingEngine.emissiecode_omschrijving),
                co2: parseFloat(leadingEngine.co2_uitstoot_gecombineerd),
                soot: leadingEngine.roetuitstoot
                    ? parseFloat(leadingEngine.roetuitstoot)
                    : undefined
            } : undefined;
            this.engineInformation = {
                cilinderAmount: aantal_cilinders
                    ? parseFloat(aantal_cilinders)
                    : undefined,
                capacity: cilinderinhoud
                    ? parseFloat(cilinderinhoud)
                    : undefined,
                inStationary: leadingEngine.geluidsniveau_stationair
                    ? parseFloat(leadingEngine.geluidsniveau_stationair)
                    : undefined,
                inMotion: leadingEngine.geluidsniveau_rijdend
                    ? parseFloat(leadingEngine.geluidsniveau_rijdend)
                    : undefined
            };
            this.sizes = {
                type: getCarType(inrichting),
                empty: massa_ledig_voertuig,
                loaded: massa_rijklaar
            };
        }
    }
}

function isFossileFuelCar(environmental) {
    return fossileTuelTypes.indexOf(environmental.brandstof_omschrijving) !== -1;
}

function isHybridCar(environmental) {
    return environmental.length > 1 && environmental
        .findIndex(car => car.brandstof_omschrijving === 'Elektriciteit') !== -1;
}

function getLeadingEngine(environmental) {
    if (environmental.length > 1) {
        if (isHybridCar(environmental)) {
            return environmental.find(car =>
                fossileTuelTypes.indexOf(car.brandstof_omschrijving) !== -1
            );
        }
        return environmental.find(car => !!car.brandstofverbruik_gecombineerd);
    }
    return environmental.find(car => car.brandstof_volgnummer === '1');
}

function getSecondaryEngine(environmental) {
    if (environmental.length > 1) {
        if (isHybridCar(environmental)) {
            return environmental.find(car =>
                fossileTuelTypes.indexOf(car.brandstof_omschrijving) === -1
            );
        }
        return environmental.find(car => !car.brandstofverbruik_gecombineerd);
    }
    return undefined;
}

function getCarType(inrichting) {
    return `${inrichting.charAt(0).toUpperCase()}${inrichting.slice(1)}`;
}

function getCarName(merk, handelsbenaming) {
	if (!merk && !handelsbenaming) {
		return undefined;
	}
	return handelsbenaming.replace(merk, '').trim();
}

export default Car;
