import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (store, ownProps) => {
	return {
		foo: store.test
	}

}

@connect(mapStateToProps)
class SecondComponents extends React.Component {
  constructor(props) {
    super(props)
    this.render = this.render.bind(this)
  }
  render() {

  	const test = () => {
  		this.props.dispatch({ type: 'CHANGE_TEST', value: 'newvalue' })
  	}

    return (
      <div> My Second Component {this.props.foo} 

      <button onClick={test} >click me</button>
      </div>
    )
  }
}

export default SecondComponents