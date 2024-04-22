const cars = [
    { id: 1, make: "Toyota", model: "Yaris", year: 2001, color: "white" },
    { id: 2, make: "Ford", model: "Mustang", year: 2009, color: "blue" },
    { id: 3, make: "Mercedes", model: "G63", year: 2020, color: "red" },
    { id: 4, make: "Kia", model: "Seed", year: 2018, color: "grey" },
    { id: 5, make: "Kia", model: "Sportage", year: 2010, color: "black" }
];

const getCars = () => cars;
const getCarInformation = (id) => {
    const car = cars.find(car => car.id === id);
    if (car) {
        return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}.`;
    } else {
        return "Car doesn't exist";
    }
};

const getCarAge = (id) => {
const car = cars.find(car => car.id === id);
    if (car) {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - car.year;
    return `Car is ${carAge} years old.`;
    } else {
    return "Car doesn't exist";
    }
};

module.exports = { getCars, getCarInformation, getCarAge };
