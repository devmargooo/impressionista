import {Dress} from "../../../../models/dresses";
import styles from "./ShopItem.module.css";

interface IShopItemProps {
    dress: Dress;
}

export const ShopItem:React.FC<IShopItemProps> = ({dress}) => {
    const image_src = process.env.PUBLIC_URL + `/dresses/images/${dress.id}.jpg`;
    return  (
        <div className={styles.shopItem}>
            <img src={image_src} className={styles.shopItemImage} alt={dress.name}/>
            <div className={styles.shopItemInfo}>
                <p className={styles.price}>{dress.price}$</p>
            </div>
        </div>
    )
}