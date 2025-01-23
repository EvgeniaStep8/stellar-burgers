import { FC, useState } from 'react';
import clsx from 'clsx';
import styles from './burger-ingredients.module.scss';
import { BurgerIngredientType } from '../../shared/types';
import { BurgerIngredient } from '../burger-ingredient/burger-ingredient';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

type BurgerIngredientsProps = {
    ingredients: BurgerIngredientType[];
}

export const BurgerIngredients: FC<BurgerIngredientsProps> = ({ ingredients }) => {
    const [current, setCurrent] = useState('bun');

    const getIngredientsByType = (type: string) =>  {
        return ingredients.filter((item) => item.type === type);
    }

	return (
		<div className={clsx(styles.burgerIngredients, 'mr-10')}>
            <nav className={clsx(styles.nav, 'mb-10')}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>Булки</Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>Начинки</Tab>
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