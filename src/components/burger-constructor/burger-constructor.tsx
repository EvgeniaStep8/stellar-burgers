import { FC, useState } from "react";
import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../../shared/modal/modal";
import { BurgerAddedIngredientsType } from "../../shared/types";
import styles from './burger-constructor.module.scss';
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
        <div className={styles.container}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${ingredients.bun.name} (верх)`}
            price={ingredients.bun.price}
            thumbnail={ingredients.bun.image}
            extraClass="mb-4"
          />
          <div className={styles.scrollBar}>
            {ingredients.filling.map((ingredient) => {
              return (
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                  key={ingredient._id}
                  extraClass="mb-4"
                />
              );
            })}
          </div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${ingredients.bun.name} (низ)`}
            price={ingredients.bun.price}
            thumbnail={ingredients.bun.image}
          />
          <div className="mt-10">
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