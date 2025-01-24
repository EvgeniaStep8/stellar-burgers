import { FC } from 'react';
import styles from './order-details.module.scss';
import clsx from 'clsx';
import doneIcon from '../../images/done.svg';

type OrderDetailsProps = {
    id: string;
}

export const OrderDetails: FC<OrderDetailsProps> = ({ id }) => {
    return (
        <div className={clsx('mt-30 mb-30', styles.details)}>
            <p className={clsx('text text_type_digits-large mb-8', styles.order)}>{id}</p>
            <p className='text text_type_main-medium mb-15'>идентификатор заказа</p>
            <img alt='иконка успеха' src={doneIcon} className='mb-15' />
            <p className='text text_type_main-default mb-2'>Ваш заказ начали готовить</p>
            <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
        </div>
    );
};