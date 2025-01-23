import clsx from 'clsx';
import { useState, useEffect } from 'react';
import styles from './app.module.scss';
import { Header } from "../components/header/header";
import { BurgerIngredients } from '../components/burger-ingredients/burger-ingredients';
import { Preloader } from '../shared/preloader/preloader';
import { BurgerIngredientType } from '../shared/types';
import { BurgerConstructor } from '../components/burger-constructor/burger-constructor';

const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';



export const App = () => {
	const [burgerIngredients, setBurgerIngredients] = useState<BurgerIngredientType[] | null>(null);
	const [isLoading, setLoading] = useState(true);

	const burgerAddedIngredients = {
		bun: {
            "_id": "643d69a5c3f7b9001cfa093c",
            "name": "Краторная булка N-200i",
            "type": "bun",
            "proteins": 80,
            "fat": 24,
            "carbohydrates": 53,
            "calories": 420,
            "price": 1255,
            "image": "https://code.s3.yandex.net/react/code/bun-02.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
            "__v": 0
        },
		filling: [
			{
				"_id": "643d69a5c3f7b9001cfa0943",
				"name": "Соус фирменный Space Sauce",
				"type": "sauce",
				"proteins": 50,
				"fat": 22,
				"carbohydrates": 11,
				"calories": 14,
				"price": 80,
				"image": "https://code.s3.yandex.net/react/code/sauce-04.png",
				"image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
				"image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
				"__v": 0
			},
			{
				"_id": "643d69a5c3f7b9001cfa093f",
				"name": "Мясо бессмертных моллюсков Protostomia",
				"type": "main",
				"proteins": 433,
				"fat": 244,
				"carbohydrates": 33,
				"calories": 420,
				"price": 1337,
				"image": "https://code.s3.yandex.net/react/code/meat-02.png",
				"image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
				"image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
				"__v": 0
			},
			{
				"_id": "643d69a5c3f7b9001cfa0940",
				"name": "Говяжий метеорит (отбивная)",
				"type": "main",
				"proteins": 800,
				"fat": 800,
				"carbohydrates": 300,
				"calories": 2674,
				"price": 3000,
				"image": "https://code.s3.yandex.net/react/code/meat-04.png",
				"image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
				"image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
				"__v": 0
			},
			{
				"_id": "643d69a5c3f7b9001cfa0945",
				"name": "Соус с шипами Антарианского плоскоходца",
				"type": "sauce",
				"proteins": 101,
				"fat": 99,
				"carbohydrates": 100,
				"calories": 100,
				"price": 88,
				"image": "https://code.s3.yandex.net/react/code/sauce-01.png",
				"image_mobile": "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
				"image_large": "https://code.s3.yandex.net/react/code/sauce-01-large.png",
				"__v": 0
			},
			{
				"_id": "643d69a5c3f7b9001cfa0946",
				"name": "Хрустящие минеральные кольца",
				"type": "main",
				"proteins": 808,
				"fat": 689,
				"carbohydrates": 609,
				"calories": 986,
				"price": 300,
				"image": "https://code.s3.yandex.net/react/code/mineral_rings.png",
				"image_mobile": "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
				"image_large": "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
				"__v": 0
			},
			{
				"_id": "643d69a5c3f7b9001cfa0947",
				"name": "Плоды Фалленианского дерева",
				"type": "main",
				"proteins": 20,
				"fat": 5,
				"carbohydrates": 55,
				"calories": 77,
				"price": 874,
				"image": "https://code.s3.yandex.net/react/code/sp_1.png",
				"image_mobile": "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
				"image_large": "https://code.s3.yandex.net/react/code/sp_1-large.png",
				"__v": 0
			},
		],
	}

	useEffect(() => {
		fetch(BASE_URL)
			.then((res) => res.json())
			.then((res) => setBurgerIngredients(res.data))
			.catch((err) => window.alert(err.message))
			.finally(() => setLoading(false))
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
