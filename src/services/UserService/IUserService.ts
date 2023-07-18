import {PriceStrategy} from "../../entities/price_strategies/types";

export interface IUserService {
    auth(login:string):void;
    isAuth():boolean;
    getPriceStrategy():PriceStrategy;
    getLoginView():string;
}