import {IUserService} from "./IUserService";
import {PriceStrategy} from "../../entities/price_strategies/types";
import {createAuthUserPriceStrategy} from "../../entities/price_strategies/AuthUserPriceStrategy";
import {UnknownUserPriceStrategy} from "../../entities/price_strategies/UnknownUserPriceStrategy";

const DEFAULT_LOGIN_VIEW = "Unknown";

class UserService implements IUserService {
    auth(login:string) {
        this.login = login;
        this.discount_percent = 10;
    }
    isAuth() {
        return !!this.login;
    }
    getPriceStrategy(): PriceStrategy {
        return this.isAuth() ? createAuthUserPriceStrategy(this.discount_percent) : UnknownUserPriceStrategy;
    }

    getLoginView(): string {
        return this.login || DEFAULT_LOGIN_VIEW;
    }

    private discount_percent = 0;
    private login?:string;
}

export const UserServiceSingleton = new UserService();