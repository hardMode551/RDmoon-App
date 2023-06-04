import React from 'react';

interface ListItemProps {
  width: string;
  color: string;
}

const ListItem: React.FC<ListItemProps> = ({ width, color }) => {
  return (
    <div
      style={{
        display: 'inline-block',

        width: width,
        height: '100px',

        backgroundColor: color,

        marginRight: '10px',
      }}
    />
  );
};

export default ListItem;
