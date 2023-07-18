import styles from "./Shop.module.css";
import {ShopItem} from "./components/ShopItem/ShopItem";
import {DRESSES_URL} from "./constants";
import {useEffect, useState} from "react";
import {Dress} from "../../entities/Dress/Dress";
import {DressInfo} from "../../models/dresses";

export const Shop:React.FC = () => {
    const [dresses, setDresses] = useState<Dress[] | undefined>();
    useEffect(() => {
        fetch(DRESSES_URL + "/dresses.json")
            .then((res) => res.json())
            .then((dresses:DressInfo[]) => dresses.map(mapDressInfoToDress))
            .then(setDresses)
    }, [])

    if (!dresses) {
        return null;
    }
    return (
        <div className={styles.wrapper}>
            {dresses.map((dress) => <ShopItem dress={dress} key={dress.getId()}/>)}
        </div>
    );
}

function mapDressInfoToDress(dress_info:DressInfo):Dress {
    return new Dress(dress_info);
}