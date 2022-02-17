import React, {Component} from 'react'
import ManageChildren from '../../../../hoc/ManageChildren/ManageChildren'

class ReactLogo extends Component {
    render () {
        return (
               <ManageChildren startDelay={this.props.startDelay} onScreen={this.props.onScreen} name={this.props.id}>

<path fill="#DBDBDB" d="M131.35,125.07c0,3.71,0.4,6.72,1.1,8.93c0.8,2.21,1.81,4.62,3.21,7.23c0.5,0.8,0.7,1.61,0.7,2.31
		c0,1-0.6,2.01-1.91,3.01l-6.32,4.22c-0.9,0.6-1.81,0.9-2.61,0.9c-1,0-2.01-0.5-3.01-1.41c-1.41-1.51-2.61-3.11-3.61-4.72
		c-1-1.71-2.01-3.61-3.11-5.92c-7.83,9.23-17.67,13.85-29.51,13.85c-8.43,0-15.16-2.41-20.07-7.23s-7.43-11.24-7.43-19.27
		c0-8.53,3.01-15.46,9.13-20.68c6.12-5.22,14.25-7.83,24.59-7.83c3.41,0,6.93,0.3,10.64,0.8c3.71,0.5,7.53,1.3,11.54,2.21v-7.33
		c0-7.63-1.61-12.95-4.72-16.06c-3.21-3.11-8.63-4.62-16.36-4.62c-3.51,0-7.13,0.4-10.84,1.3c-3.71,0.9-7.33,2.01-10.84,3.41
		c-1.61,0.7-2.81,1.1-3.51,1.3c-0.7,0.2-1.2,0.3-1.61,0.3c-1.41,0-2.11-1-2.11-3.11v-4.92c0-1.61,0.2-2.81,0.7-3.51
		c0.5-0.7,1.41-1.41,2.81-2.11c3.51-1.81,7.73-3.31,12.65-4.52c4.92-1.3,10.14-1.91,15.66-1.91c11.94,0,20.68,2.71,26.3,8.13
		c5.52,5.42,8.33,13.65,8.33,24.69v32.52H131.35z M90.6,140.33c3.31,0,6.72-0.6,10.34-1.81c3.61-1.2,6.83-3.41,9.54-6.42
		c1.61-1.91,2.81-4.01,3.41-6.42s1-5.32,1-8.73v-4.22c-2.91-0.7-6.02-1.3-9.23-1.71c-3.21-0.4-6.32-0.6-9.43-0.6
		c-6.72,0-11.64,1.3-14.96,4.01c-3.31,2.71-4.92,6.52-4.92,11.54c0,4.72,1.2,8.23,3.71,10.64C82.47,139.13,85.99,140.33,90.6,140.33
		z M171.2,151.17c-1.81,0-3.01-0.3-3.81-1c-0.8-0.6-1.51-2.01-2.11-3.91l-23.59-77.59c-0.6-2.01-0.9-3.31-0.9-4.01
		c0-1.61,0.8-2.51,2.41-2.51h9.84c1.91,0,3.21,0.3,3.91,1c0.8,0.6,1.41,2.01,2.01,3.91l16.86,66.45l15.66-66.45
		c0.5-2.01,1.1-3.31,1.91-3.91c0.8-0.6,2.21-1,4.01-1h8.03c1.91,0,3.21,0.3,4.01,1c0.8,0.6,1.51,2.01,1.91,3.91l15.86,67.25
		l17.36-67.25c0.6-2.01,1.3-3.31,2.01-3.91c0.8-0.6,2.11-1,3.91-1h9.33c1.61,0,2.51,0.8,2.51,2.51c0,0.5-0.1,1-0.2,1.61
		s-0.3,1.41-0.7,2.51l-24.19,77.59c-0.6,2.01-1.3,3.31-2.11,3.91c-0.8,0.6-2.11,1-3.81,1h-8.63c-1.91,0-3.21-0.3-4.01-1
		c-0.8-0.7-1.51-2.01-1.91-4.01l-15.56-64.74l-15.46,64.64c-0.5,2.01-1.1,3.31-1.91,4.01c-0.8,0.7-2.21,1-4.01,1H171.2z
		 M300.18,153.88c-5.22,0-10.44-0.6-15.46-1.81c-5.02-1.2-8.93-2.51-11.54-4.01c-1.61-0.9-2.71-1.91-3.11-2.81
		c-0.4-0.9-0.6-1.91-0.6-2.81v-5.12c0-2.11,0.8-3.11,2.31-3.11c0.6,0,1.2,0.1,1.81,0.3s1.51,0.6,2.51,1
		c3.41,1.51,7.13,2.71,11.04,3.51c4.01,0.8,7.93,1.2,11.94,1.2c6.32,0,11.24-1.1,14.65-3.31c3.41-2.21,5.22-5.42,5.22-9.54
		c0-2.81-0.9-5.12-2.71-7.03c-1.81-1.91-5.22-3.61-10.14-5.22l-14.55-4.52c-7.33-2.31-12.75-5.72-16.06-10.24
		c-3.31-4.42-5.02-9.33-5.02-14.55c0-4.22,0.9-7.93,2.71-11.14s4.22-6.02,7.23-8.23c3.01-2.31,6.42-4.01,10.44-5.22
		c4.01-1.2,8.23-1.71,12.65-1.71c2.21,0,4.52,0.1,6.72,0.4c2.31,0.3,4.42,0.7,6.52,1.1c2.01,0.5,3.91,1,5.72,1.61
		c1.81,0.6,3.21,1.2,4.22,1.81c1.41,0.8,2.41,1.61,3.01,2.51c0.6,0.8,0.9,1.91,0.9,3.31v4.72c0,2.11-0.8,3.21-2.31,3.21
		c-0.8,0-2.11-0.4-3.81-1.2c-5.72-2.61-12.14-3.91-19.27-3.91c-5.72,0-10.24,0.9-13.35,2.81c-3.11,1.91-4.72,4.82-4.72,8.93
		c0,2.81,1,5.22,3.01,7.13c2.01,1.91,5.72,3.81,11.04,5.52l14.25,4.52c7.23,2.31,12.45,5.52,15.56,9.64
		c3.11,4.12,4.62,8.83,4.62,14.05c0,4.32-0.9,8.23-2.61,11.64c-1.81,3.41-4.22,6.42-7.33,8.83c-3.11,2.51-6.83,4.32-11.14,5.62
		C310.01,153.18,305.3,153.88,300.18,153.88z"/>

		<path fill-rule="evenodd" clip-rule="evenodd" fill="#FF9900" d="M319.15,202.66c-33.02,24.39-81,37.34-122.25,37.34
			c-57.81,0-109.91-21.38-149.25-56.91c-3.11-2.81-0.3-6.62,3.41-4.42c42.56,24.69,95.05,39.65,149.35,39.65
			c36.64,0,76.88-7.63,113.92-23.29C319.85,192.52,324.57,198.65,319.15,202.66z"/>
		<path fill-rule="evenodd" clip-rule="evenodd" fill="#FF9900" d="M332.9,187c-4.22-5.42-27.9-2.61-38.64-1.3
			c-3.21,0.4-3.71-2.41-0.8-4.52c18.87-13.25,49.88-9.43,53.5-5.02c3.61,4.52-1,35.53-18.67,50.39c-2.71,2.31-5.32,1.1-4.12-1.91
			C328.18,214.71,337.12,192.32,332.9,187z"/>
	
	


        </ManageChildren>
    )
}
}

export default ReactLogo