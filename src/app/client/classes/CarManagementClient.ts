import { Car } from "./Car";
import car1 from './../../assets/svgs/cars/Tesla.svg';
import car2 from './../../assets/svgs/cars/car2.svg';
import car3 from './../../assets/svgs/cars/car3.svg';
import car4 from './../../assets/svgs/cars/car4.svg';
import car5 from './../../assets/svgs/cars/car5.png';
import car6 from './../../assets/svgs/cars/car5.svg';
import car7 from './../../assets/svgs/cars/Tesla.svg';
import car8 from './../../assets/svgs/cars/car5.svg';
import car9 from './../../assets/svgs/cars/car2.svg';
import car10 from './../../assets/svgs/cars/car3.svg';
import car11 from './../../assets/svgs/cars/car4.svg';
import car12 from './../../assets/svgs/cars/car5.png';
import car13 from './../../assets/svgs/cars/car5.svg';
import car14 from './../../assets/svgs/cars/Tesla.svg';
import car15 from './../../assets/svgs/cars/car2.svg';
import car16 from './../../assets/svgs/cars/car3.svg';
import car17 from './../../assets/svgs/cars/car4.svg';
import car18 from './../../assets/svgs/cars/car5.png';


export class CarManagementClient {
    getRecomendedCars(): Car[] {
        return [new Car(
            car1,
            true,
            'Toyota Corolla',
            '$25,000',
            'Los Angeles',
            '2022',
            'Front-wheel drive',
            'Gasoline',
            '5',
            4.5,
            120
        ),

        new Car(
            car2,
            false,
            'Honda Civic',
            '$22,500',
            'New York',
            '2021',
            'Front-wheel drive',
            'Gasoline',
            '5',
            4.2,
            90
        ),
        new Car(
            car3,
            true,
            'Ford Mustang',
            '$40,000',
            'Chicago',
            '2023',
            'Rear-wheel drive',
            'Gasoline',
            '4',
            4.8,
            150
        )];
    }

    getCarsToCompare(): Car[] {
        return [
            new Car(
                car4,
                false,
                'Chevrolet Tahoe',
                '$55,000',
                'Houston',
                '2022',
                'Four-wheel drive',
                'Gasoline',
                '8',
                4.6,
                110
            ),

            new Car(
                car5,
                true,
                'Nissan Rogue',
                '$28,000',
                'Miami',
                '2023',
                'All-wheel drive',
                'Gasoline',
                '5',
                4.4,
                95
            ),

            new Car(
                car6,
                false,
                'BMW 3 Series',
                '$42,000',
                'San Francisco',
                '2022',
                'Rear-wheel drive',
                'Diesel',
                '5',
                4.7,
                130
            )
        ];
    }

    getSearchResults(filters: Car): Car[] {
        return [
            new Car(
                car7,
                true,
                'Volkswagen Golf',
                '$24,500',
                'Seattle',
                '2023',
                'Front-wheel drive',
                'Gasoline',
                '5',
                4.3,
                75
            ),

            new Car(
                car8,
                true,
                'Hyundai Tucson',
                '$30,000',
                'Dallas',
                '2023',
                'Front-wheel drive',
                'Hybrid',
                '5',
                4.5,
                105
            ),

            new Car(
                car9,
                false,
                'Jeep Wrangler',
                '$38,000',
                'Denver',
                '2022',
                'Four-wheel drive',
                'Gasoline',
                '4',
                4.0,
                100
            ),

            new Car(
                car10,
                true,
                'Mazda CX-5',
                '$27,500',
                'Atlanta',
                '2023',
                'Front-wheel drive',
                'Gasoline',
                '5',
                4.6,
                88
            ),

            new Car(
                car11,
                false,
                'Audi A4',
                '$46,000',
                'Boston',
                '2022',
                'All-wheel drive',
                'Gasoline',
                '5',
                4.8,
                120
            ),

            new Car(
                car12,
                true,
                'Subaru Outback',
                '$31,000',
                'Phoenix',
                '2023',
                'All-wheel drive',
                'Gasoline',
                '5',
                4.4,
                95
            ),

            new Car(
                car13,
                true,
                'Kia Seltos',
                '$26,000',
                'Toronto',
                '2023',
                'Front-wheel drive',
                'Gasoline',
                '5',
                4.2,
                70
            ),

            new Car(
                car14,
                false,
                'Lexus RX',
                '$49,500',
                'San Diego',
                '2022',
                'All-wheel drive',
                'Hybrid',
                '5',
                4.9,
                130
            ),

            new Car(
                car15,
                true,
                'Mercedes-Benz GLC',
                '$52,000',
                'Chicago',
                '2023',
                'All-wheel drive',
                'Electric',
                '5',
                4.7,
                110
            ),

            new Car(
                car16,
                false,
                'Ford F-150',
                '$42,500',
                'Dallas',
                '2022',
                'Four-wheel drive',
                'Diesel',
                '6',
                4.5,
                150
            ),

            new Car(
                car17,
                true,
                'Porsche 911',
                '$110,000',
                'Los Angeles',
                '2023',
                'Rear-wheel drive',
                'Gasoline',
                '2',
                4.9,
                100
            ),

            new Car(
                car18,
                false,
                'Tesla Model 3',
                '$45,000',
                'Seattle',
                '2022',
                'All-wheel drive',
                'Electric',
                '5',
                4.8,
                120
            )
        ];
    }
}