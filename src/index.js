import React from 'react'
import ReactDOM from 'react-dom'

import Component from './component'
import App from './app'

const state = { count: 42 }

ReactDOM.render(
	<Component initialState={state}>{App}</Component>,
	document.getElementById('app')
)
