import {Component} from 'react'

import './index.css'

class Input extends Component {
  state = {inputBar: '', showInputBar: true, showButtonText: true}

  onChangeInput = event => {
    this.setState({inputBar: event.target.value})
  }

  onClickBtn = () => {
    this.setState(prevState => ({showButtonText: !prevState.showButtonText}))
    this.setState(prevState => ({showInputBar: !prevState.showInputBar}))
  }

  render() {
    const {inputBar, showInputBar, showButtonText} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-and-button-container">
            {showInputBar ? (
              <input
                type="text"
                className="input"
                value={inputBar}
                onChange={this.onChangeInput}
              />
            ) : (
              <p className="para">{inputBar}</p>
            )}
            <button type="button" className="button" onClick={this.onClickBtn}>
              {showButtonText ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Input
