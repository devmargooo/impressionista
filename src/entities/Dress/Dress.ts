import {DressInfo} from "../../models/dresses";
import {IDress} from "./IDress";
import {UserServiceSingleton} from "../../services/UserService/UserService";

export class Dress implements IDress {
    constructor(dress_info: DressInfo) {
        this.id = dress_info.id;
        this.name = dress_info.name;
        this.price = dress_info.price;
        this.dailyDiscountPercent = dress_info.dailyDiscountPercent;
        this.maxDiscountPercent = dress_info.maxDiscountPercent;
    }

    public getId() {
        return this.id;
    }

    public getTitle() {
        return this.name;
    }

    public getPriceWithDiscount() {
        const price_strategy = UserServiceSingleton.getPriceStrategy();
        return price_strategy({
            price: this.price,
            dailyDiscountPercent: this.dailyDiscountPercent,
            maxDiscountPercent:this.maxDiscountPercent
        })
    }

    public getPrice() {
        return this.price;
    }

    private id:number;
    private name:string;
    private price:number;
    private dailyDiscountPercent: number;
    private maxDiscountPercent: number;
}