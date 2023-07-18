import {UserServiceSingleton} from "../services/UserService/UserService";

export function initApp():Promise<void> {
    UserServiceSingleton.auth("Margo");
    return Promise.resolve();
}