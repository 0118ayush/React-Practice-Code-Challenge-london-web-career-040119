import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi.js"

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
         props.sushis.map(sushi => {
           return <Sushi key={sushi.id} sushi={sushi} eatenSushis={props.eatenSushis} eatenSushisState={props.eatenSushisState} /> 
         })
        }
        <MoreButton moreSushisHandler={props.moreSushisHandler}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer