import styles from "./ShopItem.module.css";
import {Dress} from "../../../../entities/Dress/Dress";

interface IShopItemProps {
    dress: Dress;
}

export const ShopItem:React.FC<IShopItemProps> = ({dress}) => {
    const image_src = process.env.PUBLIC_URL + `/dresses/images/${dress.getId()}.jpg`;
    return  (
        <div className={styles.shopItem}>
            <img src={image_src} className={styles.shopItemImage} alt={dress.getTitle()}/>
            <div className={styles.shopItemInfo}>
                <p className={styles.price}>
                    <s className={styles.old_price}>{dress.getPrice().toFixed(2)}$</s>
                    <span>{dress.getPriceWithDiscount().toFixed(2)}$</span>
                </p>
            </div>
        </div>
    )
}