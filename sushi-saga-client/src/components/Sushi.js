import React, { Fragment, Component } from 'react'

class Sushi extends Component {


  checkForEatenSushi=(sushi)=>{
    this.props.eatenSushisState.includes(sushi)
  }

  registerClick=(sushi)=>{
    this.props.eatenSushis(sushi)
    return this.checkForEatenSushi(sushi)
  }


  render(){
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={() => this.registerClick(this.props.sushi)}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            this.registerClick ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
 
}

export default Sushi
