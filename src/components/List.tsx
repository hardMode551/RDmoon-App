import React from 'react';
import { useSelector } from 'react-redux';
import { useTransition, animated } from 'react-spring';

import { RootState, useAppDispatch } from '../store/store';
import { addItem, removeItem, removeAllItems } from '../store/listSlice';

import ListItem from './ListItem';

import styles from '../styles/List.module.css';

const List: React.FC = () => {
  const { listItems } = useSelector((state: RootState) => state.list);
  const dispatch = useAppDispatch();

  const addItemToList = () => {
    const width = `${window.innerWidth * 0.2}px`;
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const newItem = { id: Date.now(), width, color };
    dispatch(addItem(newItem));
  };

  const removeLastItem = () => {
    if (listItems.length > 0) {
      dispatch(removeItem());
    }
  };

  const resetAllIListItems = () => {
    dispatch(removeAllItems());
  };

  const transitions = useTransition(listItems, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
  });

  return (
    <>
      <button onClick={addItemToList}>Добавить</button>
      <button onClick={removeLastItem}>Удалить</button>
      <button onClick={resetAllIListItems}>Удалить все элементы</button>

      <div className={styles.listItems} style={{ display: 'flex' }}>
        {transitions((style, item) => (
          <animated.div style={{ ...style, flex: '0 0 auto' }} key={item.id}>
            <ListItem width={item.width} color={item.color} />
          </animated.div>
        ))}
      </div>
    </>
  );
};

export default List;
