import React from 'react'
import ReactDOM from 'react-dom'
import SecondComponents from './secondcomponent'

import { Provider } from 'react-redux'

import store from './store/store'

window.store = store;

class FirstComponents extends React.Component {
  constructor(props) {
    super(props)
    this.render = this.render.bind(this)
    this.onClickFoo = this.onClickFoo.bind(this)
    this.onClickBuzz = this.onClickBuzz.bind(this)

    this.state = {
      children: null
    }
  }

  onClickFoo () {
    var child = (<div> I am child Foo </div>)
    this.setState({
      children: child
    })

  }

  onClickBuzz () {
    var child = (<div> I am child Buzz </div>)
    this.setState({
      children: child
    })
  }

  render() {
    return (
      <Provider store={store}>
        <div>
            <button onClick={this.onClickFoo}>Foo</button>
            <button onClick={this.onClickBuzz}>Buzz</button>
            {this.state.children}
            <SecondComponents />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<FirstComponents />, document.getElementById('panda-ui'))