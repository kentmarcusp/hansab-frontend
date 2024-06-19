import { User } from "./IUser"

export interface Car {
    id: number,
    make: string,
    model: string
    numberPlate: string,
    user_account: User
}