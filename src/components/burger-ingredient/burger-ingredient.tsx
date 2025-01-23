import { FC, useState, MouseEvent } from 'react';
import clsx from 'clsx';
import styles from './burger-ingredient.module.scss';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../../shared/modal/modal';


type BurgerIngredientProps = {
    name: string;
    image: string;
    largeImage: string;
    price: number;
    calories: number;
    carbohydrates: number;
    proteins: number;
    fat: number;
}


export const BurgerIngredient: FC<BurgerIngredientProps> = ({ name, image, largeImage, price, calories, carbohydrates, proteins, fat}) => {
    const [ isOpenModal, setOpenModal ] = useState(false);

    const closeModal = () => {
        setOpenModal(false);
    }

    const openModal = (evt: MouseEvent) => {
        evt.stopPropagation();
        setOpenModal(true);
    }


    return (
        <article className={styles.burgerIngredient} onClick={openModal}>
            <img src={image} alt={name}/>
            <span className="text text_type_digits-default">{price} <CurrencyIcon type="primary" /></span>
            <h3 className="text text_type_main-default">{name}</h3>
            <Counter count={1} size="default" extraClass="m-1" />
            {isOpenModal && (<Modal title='Детали ингредиента' isOpen={isOpenModal} onClose={closeModal}>
				    <div className={styles.details}>
                        <img src={largeImage} alt={name} className={clsx('mb-4', styles.img)}/>
                        <h3 className="text text_type_main-medium mb-8">{name}</h3>
                        <ul className={clsx(styles.info, 'mb-15')}>
                            <li className={clsx("text text_type_main-default mr-5", styles.infoItem)}>
                                <p>Калории,ккал</p>
                                <p>{calories}</p>
                            </li>
                            <li className={clsx("text text_type_main-default mr-5", styles.infoItem)}>
                                <p>Белки, г</p>
                                <p>{proteins}</p>
                            </li>
                            <li className={clsx("text text_type_main-default mr-5", styles.infoItem)}>
                                <p>Жиры, г</p>
                                <p>{fat}</p>
                            </li>
                            <li className={clsx("text text_type_main-default", styles.infoItem)}>
                                <p>Углеводы, г</p>
                                <p>{carbohydrates}</p>
                            </li>
                        </ul>
                    </div>
			    </Modal>)}
        </article>
    );
}

