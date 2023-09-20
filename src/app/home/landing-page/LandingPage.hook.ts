import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../_shared/utils/Routes";
import { Car } from "../../client/classes/Car";
import { CarManagementService } from "../../client/services/car-management.service";

export const useLandingPageHook = () => {

    const [s, setS] = useState<string>("");
    const [recomendedCars, setRecomendedCars] = useState<Car[]>([]);
    const [compareCars, setComapreCars] = useState<Car[]>([]);
    const navigate = useNavigate()

    useEffect(() => {
        getRecomandedCars();
        getCarsToCompare();
    }, [])

    const carManagementService = new CarManagementService();

    function handleCompareClick() {
        navigate(ROUTES.compare, {state:{car1: compareCars[0], car2: compareCars[1]}})
    }

    function routeToFilter() {
        navigate(ROUTES.filter)
    }

    function getRecomandedCars() {
        const carsRes = carManagementService.getRecomendedCars();
        setRecomendedCars(carsRes);
    }

    function getCarsToCompare() {
        const carsRes = carManagementService.getCarsToCompare();
        setComapreCars(carsRes);
    }

    return {
        setS,
        handleCompareClick,
        recomendedCars,
        compareCars,
        routeToFilter
    };
}