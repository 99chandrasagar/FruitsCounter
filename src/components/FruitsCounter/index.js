// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {Mangoes: 0, Bananas: 0}

  eatMangoes = () => {
    this.setState(prevState => ({Mangoes: prevState.Mangoes + 1}))
  }

  eatBananas = () => {
    this.setState(prevState => ({Bananas: prevState.Bananas + 1}))
  }

  render() {
    const {Mangoes, Bananas} = this.state
    return (
      <div className="bg-container">
        <div className="front-part">
          <h1 className="heading">
            Bob ate <spans style={{color: '#ffd569'}}>{Mangoes}</spans> mangoes
            <spans style={{color: '#ffd569'}}>{Bananas}</spans> bananas
          </h1>
          <div className="alignment">
            <div className="images">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango"
              />
              <button
                type="button"
                onClick={this.eatMangoes}
                className="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="button-adjust">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.eatBananas}
              >
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
