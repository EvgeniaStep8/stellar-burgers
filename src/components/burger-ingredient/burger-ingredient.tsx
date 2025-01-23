import { FC, useState, MouseEvent } from 'react';
import clsx from 'clsx';
import styles from './burger-ingredient.module.scss';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../../shared/modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details';


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
            {isOpenModal && (
                <Modal title='Детали ингредиента' isOpen={isOpenModal} onClose={closeModal}>
				    <IngredientDetails 
                        name={name}
                        image={largeImage}
                        calories={calories}
                        carbohydrates={carbohydrates}
                        proteins={proteins}
                        fat={fat}
                    />
			    </Modal>)}
        </article>
    );
}

