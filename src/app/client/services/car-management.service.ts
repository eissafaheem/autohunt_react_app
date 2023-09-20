import { Car } from "../classes/Car";
import { CarManagementClient } from "../classes/CarManagementClient";

export class CarManagementService {

    carManagementClient: CarManagementClient;
    constructor(){
        this.carManagementClient = new CarManagementClient();
    }

    getRecomendedCars(): Car[]{
        return this.carManagementClient.getRecomendedCars();
    }
    
    getCarsToCompare(): Car[]{
        return this.carManagementClient.getCarsToCompare();
    }
    
    getSearchResults(filters: Car): Car[]{
        return this.carManagementClient.getSearchResults(filters);
    }
}