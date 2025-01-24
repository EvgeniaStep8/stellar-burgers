import clsx from 'clsx';
import { useState, useEffect } from 'react';
import styles from './app.module.scss';
import { Header } from '../components/header/header';
import { BurgerIngredients } from '../components/burger-ingredients/burger-ingredients';
import { Preloader } from '../shared/preloader/preloader';
import { BurgerIngredientType } from '../shared/types';
import { BurgerConstructor } from '../components/burger-constructor/burger-constructor';
import { burgerAddedIngredients } from '../constans/constants';

const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';


export const App = () => {
	const [burgerIngredients, setBurgerIngredients] = useState<BurgerIngredientType[] | null>(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch(BASE_URL)
			.then((res) => res.json())
			.then((res) => setBurgerIngredients(res.data))
			.catch((err) => window.alert(err.message))
			.finally(() => setLoading(false));
	}, []);

	return (
		isLoading ? 
		(<Preloader/>) :
		(<div className={clsx(styles.page, 'p-10')}>
			<Header />
			<main className={styles.main}>
				<h1 className={clsx('mt-10', 'mb-5', 'text', 'text_type_main-large')}>Соберите бургер</h1>
				<div className={styles.container}>
					{burgerIngredients&& <BurgerIngredients ingredients={burgerIngredients} />}
					<BurgerConstructor ingredients={burgerAddedIngredients} />
				</div>
			</main>
		</div>)
	);
};
