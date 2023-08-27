import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Car } from "../../client/classes/Car";
import { CarManagementService } from "../../client/services/car-management.service";

export const useCompareHook = () =>{
    
    const Location = useLocation();
    const [car1, setCar1] = useState<Car>(new Car());
    const [car2, setCar2] = useState<Car>( new Car());
    
    useEffect(()=>{

        if(Location.state){
            setCar1(Location.state.car1);
            setCar2(Location.state.car2);
        }
        else{
            getCarsToCompare();
        }

    },)

    function getCarsToCompare(): void{
        const cars = new CarManagementService().getCarsToCompare();
        setCar1(cars[0]);
        setCar2(cars[1]);
    }

    return {
        car1,
        car2,
    };
}