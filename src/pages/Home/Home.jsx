import React from 'react'
import { Collapse} from 'antd'
import AddClub from '../../components/AddClub/AddClub'

const Home = () => {
    const { Panel} = Collapse
  return (
    <div>
    <Collapse accordion size='middle' style={{ width: 300, background: 'white'}} defaultActiveKey={['1']}>
    <Panel  style={{ color: 'white', }} header="Kulüp Ekle" key="1">
    <AddClub />
    </Panel>
    </Collapse>
    </div>
  )
}

export default Home
