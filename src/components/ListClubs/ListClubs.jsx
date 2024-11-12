import React from 'react';
import { Card, List, Image } from 'antd';
import { useSelector } from 'react-redux';


const ListClubs = () => {
  const clubs = useSelector((state) => state.clubs.clubs)

const renderItem = (item) => {
  return (
    <List.Item>
      <Card title={item.clubName}><Image src={item.logo[0].thumbUrl}/></Card>
    </List.Item>
  );
}

  return ( 
  <List
    size='small'
    pagination={{ align: 'center', }}
    grid={{ gutter: 12, column: 4 }}
    dataSource={clubs}
    renderItem={renderItem}
  />
  )
  };

export default ListClubs;