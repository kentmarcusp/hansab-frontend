import { Car } from "./ICar";

export interface User {
    id: number;
    username: string,
    cars: Car[];
}