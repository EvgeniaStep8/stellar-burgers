import { FC, MouseEvent } from 'react';
import styles from './modal-overlay.module.scss';

type ModalOverlayProps = {
    onClose: () => void;
};

export const ModalOverlay: FC<ModalOverlayProps> = ({ onClose }) => {
    const onOverlay = (evt: MouseEvent) => {
            evt.stopPropagation();
            onClose();
        };

    return (
        <div className={styles.overlay} onClick={onOverlay}></div>
);};