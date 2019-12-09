const options = {
    headers: { 'X-App-Token': 'sx2tUJREaYSPBDaMp88kiCI5K' } // Public app token
};

export default class RdwService {
    static async getByNumberPlate(numberPlate) {
        try {
            const response = await fetch(
                `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${numberPlate}`,
                { ...options }
            );
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    static async getEnvironmentalByNumberPlate(numberPlate) {
        try {
            const response = await fetch(
                `https://opendata.rdw.nl/resource/8ys7-d773.json?kenteken=${numberPlate}`,
                { ...options }
            );
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }
};
