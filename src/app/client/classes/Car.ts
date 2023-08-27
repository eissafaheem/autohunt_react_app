export class Car {
    carImage?: string;
    isNew?: boolean;
    name?: string;
    price?: string;
    location?: string;
    year?: string;
    wheelDrive?: string;
    fueltype?: string;
    numberOfSeats?: string;
    rating?: number;
    reviews?: number;

    constructor(
        carImage: string = '',
        isNew: boolean = false,
        name: string = '',
        price: string = '',
        location: string = '',
        year: string = '',
        wheelDrive: string = '',
        fueltype: string = '',
        numberOfSeats: string = '',
        rating: number = 0,
        reviews: number = 0
    ) {
        this.carImage = carImage;
        this.isNew = isNew;
        this.name = name;
        this.price = price;
        this.location = location;
        this.year = year;
        this.wheelDrive = wheelDrive;
        this.fueltype = fueltype;
        this.numberOfSeats = numberOfSeats;
        this.rating = rating;
        this.reviews = reviews;
    }
}
