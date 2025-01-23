import { FC, useState } from "react";
import styles from './burger-constructor.module.scss';
import clsx from "clsx";
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../../shared/modal/modal";
import { BurgerAddedIngredientsType } from "../../shared/types";
import { OrderDetails } from "../order-details/order-details";

type BurgerConstructorProps = {
  ingredients: BurgerAddedIngredientsType;
}

export const BurgerConstructor: FC<BurgerConstructorProps>  = ({ ingredients }) => {
    const [ isOpenModal, setOpenModal ] = useState(false);

    const createOrder = () => {
      setOpenModal(true);
    }

    const closeModal = () => {
      setOpenModal(false);
    }

    const getOrderSum = () => {
      const sum = ingredients.bun.price + ingredients.filling.reduce((prev, cur) => prev + cur.price, 0);
      return sum;
    }

    return (
        <div className={clsx(styles.container, "mr-4 ml-4")}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${ingredients.bun.name} (верх)`}
            price={ingredients.bun.price}
            thumbnail={ingredients.bun.image}
            extraClass="mb-4 ml-8"
          />
          <div className={styles.scrollBar}>
            {ingredients.filling.map((ingredient) => {
              return (
                <div key={ingredient._id} className={styles.item}>
                  <button>
                    <DragIcon type="primary" />
                  </button>
                  <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}
                    extraClass="mb-4 ml-2"
                  />
                </div>
              );
            })}
          </div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${ingredients.bun.name} (низ)`}
            price={ingredients.bun.price}
            thumbnail={ingredients.bun.image}
            extraClass="ml-8"
          />
          <div className={clsx("mt-10 mr-4", styles.summary)}>
            <span className="text text_type_digits-medium mr-10">{getOrderSum()} <CurrencyIcon type="primary" /></span>
            <Button htmlType="button" type="primary" size="large" onClick={createOrder}>
              Оформить
            </Button>
          </div>
          {isOpenModal && (
            <Modal isOpen={isOpenModal} onClose={closeModal}>
              <OrderDetails id="034536" />
			      </Modal>
          )}
        </div>
    )
    
}