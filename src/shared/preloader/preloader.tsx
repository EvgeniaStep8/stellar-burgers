import styles from './Preloader.module.scss';

export const Preloader = () => (
    <div className={styles.overlay}>
        <span className={styles.loader}></span>
    </div>
);