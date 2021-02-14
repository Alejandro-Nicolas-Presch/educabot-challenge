import React from 'react'
import CardContainer from '../../components/CardContainer/CardContainer'
import './Home.css'
// import { Button } from '../../stories/button/Button'
// import Card from '../../components/Card/Card'

const Home = () => {
  return (
    <div className='wrapperContainer'>
      <CardContainer />
      {/* <Card /> */}
    </div>
  )
}

export default Home

/* <Button
      primary={true}
      backgroundColor={'red'}
      size={'large'}
      label={'Mi primer componente con storybook'}
    ></Button> */
