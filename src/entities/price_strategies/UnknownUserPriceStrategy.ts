import {PriceStrategy} from "./types";

export const UnknownUserPriceStrategy:PriceStrategy = ({price, dailyDiscountPercent, maxDiscountPercent}) => {
    const discountPercent = dailyDiscountPercent <= maxDiscountPercent ? dailyDiscountPercent : maxDiscountPercent;
    const discount = price * discountPercent / 100;
    return price - discount;
}