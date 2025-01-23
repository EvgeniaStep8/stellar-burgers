import { FC } from "react";
import clsx from "clsx";
import styles from "./ingredient-details.module.scss";

type IngredientDetailsProps = {
    image: string,
    name: string,
    calories: number,
    proteins: number,
    carbohydrates: number,
    fat: number,
}

export const IngredientDetails: FC<IngredientDetailsProps> = ({ image, name, calories, proteins, carbohydrates, fat}) => {
    return (
        <div className={styles.details}>
            <img src={image} alt={name} className={clsx('mb-4', styles.img)}/>
            <h3 className="text text_type_main-medium mb-8">{name}</h3>
            <ul className={clsx(styles.info, 'mb-15')}>
                <li className={clsx("text text_type_main-default mr-5 text_color_inactive", styles.infoItem)}>
                    <p>Калории,ккал</p>
                    <p>{calories}</p>
                </li>
                <li className={clsx("text text_type_main-default mr-5 text_color_inactive", styles.infoItem)}>
                    <p>Белки, г</p>
                    <p>{proteins}</p>
                </li>
                <li className={clsx("text text_type_main-default mr-5 text_color_inactive", styles.infoItem)}>
                    <p>Жиры, г</p>
                    <p>{fat}</p>
                </li>
                <li className={clsx("text text_type_main-default text_color_inactive", styles.infoItem)}>
                    <p>Углеводы, г</p>
                    <p>{carbohydrates}</p>
                </li>
            </ul>
        </div>                
    )
}