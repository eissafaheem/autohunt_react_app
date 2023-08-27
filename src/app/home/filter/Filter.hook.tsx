import { useEffect, useState } from "react";
import { Car } from "../../client/classes/Car";
import { CarManagementService } from "../../client/services/car-management.service";

export const useFilterHook = () =>{

    const [carResults, setCarResults] = useState<Car[]>([]);

    useEffect(()=>{
        getFilteredCars();
    },[])


    function getFilteredCars(){
        const carManagementService = new CarManagementService();
        const cars = carManagementService.getSearchResults(new Car());
        setCarResults(cars);
    }

    return {
        carResults
    };
}