import React from 'react'

class Component extends React.Component {
	state = this.props.initialState || {}
	render() {
		const ChildComponent = this.props.children
		return (
			<ChildComponent state={this.state} setState={this.setState.bind(this)} />
		)
	}
}

export default Component
