import styles from "./Shop.module.css";
import {ShopItem} from "./components/ShopItem/ShopItem";
import {Dress} from "../../models/dresses";
import {DRESSES_URL} from "./constants";
import {useEffect, useState} from "react";

export const Shop:React.FC = () => {
    const [dresses, setDresses] = useState<Dress[] | undefined>();
    useEffect(() => {
        fetch(DRESSES_URL + "/dresses.json")
            .then((res) => res.json())
            .then(setDresses);
    }, [])
    if (!dresses) {
        return null;
    }
    return (
        <div className={styles.wrapper}>
            {dresses.map((dress) => <ShopItem dress={dress} key={dress.id}/>)}
        </div>
    );
}