import React from 'react'
import { Collapse} from 'antd'
import AddClub from '../../components/AddClub/AddClub'
import ListClubs from '../../components/ListClubs/ListClubs'
import ReportCard from '../../components/ReportCard/ReportCard'
import { useSelector } from 'react-redux'

const Home = () => {
  const states = useSelector((state) => state)

  
  
  // console.log(JSON.stringify(states))
    const { Panel} = Collapse
  return (
    <div>
      <div style={ { flexDirection :'row', display: 'flex', gap: '10%' }}>
    <Collapse accordion size='middle' style={{ width: 300, background: 'white'}} defaultActiveKey={['1']}>
    <Panel  style={{ color: 'white', }} header="Kulüp Ekle" key="1">
    <AddClub />
    </Panel>
    </Collapse>
    <div>
    <ListClubs />
    </div>
    </div>
    <ReportCard />
    </div>
  )
}

export default Home