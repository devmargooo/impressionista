import {DressInfo} from "../../models/dresses";

type DressPriceInfo = Pick<DressInfo, "price" | "dailyDiscountPercent" | "maxDiscountPercent">

export type PriceStrategy = (dress_price_info:DressPriceInfo) => number;