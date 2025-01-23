import clsx from 'clsx';
import styles from './header.module.scss';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const Header = () => {
	return (
		<header className={clsx('pt-4', 'pb-4', styles.header)}>
            <div className={styles.headerContainer}>
                <div className={styles.headerItems}>
                    <button className={clsx(styles.item, 'mr-5')}>
                        <BurgerIcon type='primary'/>
                        <p className='ml-2 text text_type_main-default'>Конструктор</p>
                    </button>
                    <button className={clsx(styles.item, 'ml-2')}>
                        <ListIcon type="secondary" />
                        <p className='ml-2 text text_type_main-default text_color_inactive'>Лента заказов</p>
                    </button>
                </div>
                <Logo className={styles.logo} />
                <button className={clsx(styles.item, 'ml-2')}>
                    <ProfileIcon type="secondary" />
                    <p className='ml-2 text text_type_main-default text_color_inactive'>Личный кабинет</p>
                </button>
            </div>
        </header>
	);
};