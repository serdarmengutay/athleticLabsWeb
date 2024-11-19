import React, { useEffect, useState } from 'react';
import { Card, List, Image } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ListClubs = () => {
  // const clubs = useSelector((state) => state.clubs.clubs)
  const [clubs, setClubs] = useState([]);
  const navigate = useNavigate();



const fetchClubs = async () => {
  try {
    const response = await axios.get('http://localhost:5001/api/clubs');
    console.log(response.data);
    setClubs(response.data)
  } catch (error) {
    console.error(error);
  }
};


useEffect(() => {
  fetchClubs();
}, [])

const renderItem = (item) => {
  console.log('item', item)
  return (
    <List.Item onClick={() => navigate(`/club/${item._id}`)} key={item.id}>
      <Card title={item.clubName}><Image src={item.logo}/></Card>
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