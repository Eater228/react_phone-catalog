import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './BurgerMenu.module.scss';
import { Context } from '../../Store/Store';

interface BurgerMenuProps {
  toggleMenu: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ toggleMenu }) => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames([styles.item], {
      [styles.isActive]: isActive,
    });

  const { favorite, carts } = useContext(Context);

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className="logo">
          <img src="img/icons/Logo.png" alt="" className="logo-img" />
        </div>
        <div className={styles.close} onClick={toggleMenu}>
          <img src="img/icons/Close.svg" alt="favorites" />
        </div>
      </div>
      <ul className={styles.link}>
        <li className={styles.linkItem}>
          <NavLink className={getLinkClass} to="/" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li className={styles.linkItem}>
          <NavLink className={getLinkClass} to="/phones" onClick={toggleMenu}>
            Phones
          </NavLink>
        </li>
        <li className={styles.linkItem}>
          <NavLink className={getLinkClass} to="/tables" onClick={toggleMenu}>
            Tablets
          </NavLink>
        </li>
        <li className={styles.linkItem}>
          <NavLink className={getLinkClass} to="/smart" onClick={toggleMenu}>
            Accessories
          </NavLink>
        </li>
      </ul>
      <div className={styles.bottom}>
        <div className={styles.bottomItem}>
          <NavLink
            className={getLinkClass}
            to="/favorites"
            onClick={toggleMenu}
          >
            <img src="img/icons/favourites_icon.svg" alt="favorites" />
          </NavLink>
          {favorite.length !== 0 && (
            <span className={styles.counter}>{favorite.length}</span>
          )}
        </div>
        <div className={styles.bottomItem}>
          <NavLink className={getLinkClass} to="/cart" onClick={toggleMenu}>
            <img src="img/icons/cart_icon.svg" alt="cart" />
          </NavLink>
          {carts.length !== 0 && (
            <span className={styles.counter}>{carts.length}</span>
          )}
        </div>
      </div>
    </div>
  );
};