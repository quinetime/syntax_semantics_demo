import React from 'react'
import styled from 'styled-components'

const StyledSwitch = styled.div`
border: 1px solid #A3A3A3;
height: 100px;
width: 50px;
background: -moz-linear-gradient(center top , #fff 15%, #bbb 1%, #bbb 16%, #c5c5c5 1%, #d2d2d2 50%, #e6e6e6 1%, #e6e6e6 99%, #d2d2d2 1%, #d2d2d2 100%);
background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(white), color-stop(0.15, white), color-stop(0.15, #BBB), color-stop(0.16, #BBB), color-stop(0.17, #C5C5C5), color-stop(0.5, #D2D2D2), color-stop(0.51, #E6E6E6), color-stop(0.99, #E6E6E6), color-stop(0.99, #D2D2D2), to(#D2D2D2));
box-shadow: 0 2px 5px #999;
-moz-box-shadow: 0 2px 5px #999;
-webkit-box-shadow: 0 2px 5px #999;
`

const StyledSwitchOn = styled(StyledSwitch)`
background: -moz-linear-gradient(center top , #fff 1%, #e6e6e6 1%, #e6e6e6 50%, #ddd 1%, #ddd 51%, #fbfcfb 1%, #fbfcfb 85%, #bbb 1%, #bbb 86%, #c5c5c5 1%, #d2d2d2 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff), color-stop(0.01, #fff), color-stop(0.01, #e6e6e6), color-stop(0.5, #e6e6e6), color-stop(0.5, #ddd), color-stop(0.51, #ddd), color-stop(0.51, #fbfcfb), color-stop(0.85, #fbfcfb), color-stop(0.85, #c5c5c5), color-stop(1, #d2d2d2));
box-shadow: 0 20px 30px red;
-moz-box-shadow: 0 20px 30px red;
-webkit-box-shadow: 0 20px 30px red;
`

const Switch = (props) => {
	const switchToReturn = props.flipped ? <StyledSwitchOn onClick={props.toggleSwitch}/> : <StyledSwitch onClick={props.toggleSwitch}/>
	return switchToReturn;
}

export default Switch