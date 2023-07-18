import {PriceStrategy} from "./types";

type AuthUserPriceStrategyCreator = (user_discount_percent:number) => PriceStrategy;

export const createAuthUserPriceStrategy:AuthUserPriceStrategyCreator =
    (user_discount_percent) => ({price, dailyDiscountPercent, maxDiscountPercent}) => {
        const userDiscount = user_discount_percent + dailyDiscountPercent;
        const discountPercent = userDiscount <= maxDiscountPercent ? userDiscount : maxDiscountPercent;
        const discount = price * discountPercent / 100;
        return price - discount;
}