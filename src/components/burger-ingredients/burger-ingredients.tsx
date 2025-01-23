import { FC, useState } from 'react';
import clsx from 'clsx';
import styles from './burger-ingredients.module.scss';
import { BurgerIngredientType } from '../../shared/types';
import { BurgerIngredient } from '../burger-ingredient/burger-ingredient';
import { Modal } from '../../shared/modal/modal';

type BurgerIngredientsProps = {
    ingredients: BurgerIngredientType[];
}

export const BurgerIngredients: FC<BurgerIngredientsProps> = ({ ingredients }) => {
    const getIngredientsByType = (type: string) =>  {
        return ingredients.filter((item) => item.type === type);
    }

	return (
		<div className={clsx(styles.burgerIngredients, 'mr-10')}>
            <nav className={clsx(styles.nav, 'mb-10')}>
                <button className={clsx(styles.btn, 'pt-4', 'pb-4', 'text', 'text_type_main-default', styles.active)}>Булки</button>
                <button className={clsx(styles.btn, 'pt-4', 'pb-4', 'text', 'text_type_main-default')}>Соусы</button>
                <button className={clsx(styles.btn, 'pt-4', 'pb-4', 'text', 'text_type_main-default')}>Начинки</button>
            </nav>
            <div className={styles.container}>
                <section>
                    <h2 className='text text_type_main-medium mb-6'>Булки</h2>
                    <div className={clsx(styles.gridContainer, 'mb-10')}>
                        {getIngredientsByType('bun').map((item) => {
                            return (
                            <BurgerIngredient 
                                key={item._id}
                                name={item.name}
                                image={item.image}
                                largeImage={item.image_large}
                                price={item.price}
                                calories={item.calories}
                                carbohydrates={item.carbohydrates}
                                proteins={item.proteins}
                                fat={item.fat}
                            />);
                        })};
                    </div>
                </section>
                <section>
                    <h2 className='text text_type_main-medium mb-6'>Соусы</h2>
                    <div className={clsx(styles.gridContainer, 'mb-10')}>
                        {getIngredientsByType('sauce').map((item) => {
                            return (
                            <BurgerIngredient 
                                key={item._id}
                                name={item.name}
                                image={item.image}
                                largeImage={item.image_large}
                                price={item.price}
                                calories={item.calories}
                                carbohydrates={item.carbohydrates}
                                proteins={item.proteins}
                                fat={item.fat}
                            />);
                        })};
                    </div>
                </section>
                <section>
                    <h2 className='text text_type_main-medium mb-6'>Начинки</h2>
                    <div className={clsx(styles.gridContainer, 'mb-10')}>
                    {getIngredientsByType('main').map((item) => {
                            return (
                            <BurgerIngredient 
                                key={item._id}
                                name={item.name}
                                image={item.image}
                                largeImage={item.image_large}
                                price={item.price}
                                calories={item.calories}
                                carbohydrates={item.carbohydrates}
                                proteins={item.proteins}
                                fat={item.fat}
                            />);
                        })};
                    </div>
                </section>
            </div>
        </div>
	);
};