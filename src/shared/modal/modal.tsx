import { FC, ReactElement, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.scss';
import useEscapeKeydown from '../hooks/useEscapeKeydown';
import { ModalOverlay } from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById('react-modals');

type ModalProps = {
    title?: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactElement;
}

export const Modal: FC<ModalProps> = ({ title, children, isOpen, onClose }) => {
    if (!modalRoot) {
        return null;
    }

    useEscapeKeydown(onClose, isOpen);

    const stopPropagation = (evt: MouseEvent) => {
        evt.stopPropagation();
    };

    return ReactDOM.createPortal((
        <div className={styles.wrapper}>
            <ModalOverlay onClose={onClose} />
            <div className={styles.modal} onClick={stopPropagation}>
                {title && <h2 className='text text_type_main-large mt-10 ml-10'>{title}</h2>}
                <button type='button' className={styles.btn}><CloseIcon type='primary' onClick={onClose} /></button>
                {children}
            </div>
        </div>
    ), modalRoot);
};