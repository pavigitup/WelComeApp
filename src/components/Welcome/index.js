import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribedIn: true,
  }

  subscribe = () => {
    this.setState({isSubscribedIn: false})
  }

  subscribed = () => {
    this.setState({isSubscribedIn: true})
  }

  subscribeRender = () => {
    const {isSubscribedIn} = this.state
    if (isSubscribedIn === true) {
      return (
        <button type="button" onClick={this.subscribe}>
          Subscribe
        </button>
      )
    }
    return (
      <button type="button" onClick={this.subscribed}>
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {this.subscribeRender()}
      </div>
    )
  }
}

export default Welcome
