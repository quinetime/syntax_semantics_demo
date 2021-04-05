import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Switch from '../Switch/Switch'

const Main = styled.div`
  padding-top: 12vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: white;
`

const NumberDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 9vw;
`

const DisplayItem = styled.div`
	display: flex;
	align-items: center;
	width: 10vw;
	height: 9vw;
	text-align: left;
	justify-content: center;
	padding-bottom: 20px;
	position: relative;
`

const Meaning = styled.div`
	font-size: 3vw;
	font-family: Fredoka One;
	padding: 40px 6vw;
	line-height: 1.2;
`

const Buttons = styled.div`
	display: flex;
	flex-direction: row;
	width: 80vw;
	justify-content: space-evenly;
`

const Button = styled.button`
	padding: 10px;
	font-size: 30px;
	font-family: Cutive Mono;
	margin-bottom: 10px;
	margin-top: 20px;
`

const Arrow = styled.button`
	border: 0;
	border-radius: 50%;
	height: 8vh;
	width: 8vh;
	min-height: 30px;
	min-width: 30px;
	position: fixed;
	top: 48%;
	background: transparent;
	color: white;
	font-size: 6vh;
`

const LeftArrow = styled(Arrow)`
	left: 20px;
`

const RightArrow = styled(Arrow)`
	right: 20px;
`

const Power = styled.div`
	font-size: 6vw; 
`

const Plus = styled.div`
	position: absolute;
	right: -1.8vw;
	font-size: 6vw;
`

function App() {

  const [numbers, setNumbers] = useState([0,0,0,0,0,0,0,0]);
  const [page, setPage] = useState(1);
  const MAXPAGES = 8;

  const nextPage = () => setPage(page+1);
  const prevPage = () => setPage(page-1);

  const toggleSwitch = (pos) => {
  	const curriedSwitch = () => {
  		const numbersCopy = [...numbers]
  		numbersCopy[pos] = numbersCopy[pos] ? 0 : 1;
  		setNumbers(numbersCopy);
  	}
  	return curriedSwitch
  }

  const bitshiftLeft = () => {
  	const numCopy = [...numbers]
  	for (let x=0;x<7;x++) {
  		numCopy[x] = numCopy[x+1]
  	}
  	numCopy[7] = 0;
  	setNumbers(numCopy)
  }

   const bitshiftRight = () => {
  	const numCopy = [...numbers]
  	for (let x=7;x>0;x--) {
  		numCopy[x] = numCopy[x-1]
  	}
  	numCopy[0] = 0;
  	setNumbers(numCopy)
  }

  const invert = () => {
  	const numCopy = [...numbers]
  	for (let x=0;x<numbers.length;x++) {
  		numCopy[x] = numCopy[x] ? 0 : 1;
  	}
  	setNumbers(numCopy)
  }


  return (
    <Main>
    	<NumberDisplay>
    		{numbers.map((x,i)=><DisplayItem key={"switch"+i} ><Switch id={"switch"+i} flipped={x} toggleSwitch={toggleSwitch(i)}/></DisplayItem>)}
    	</NumberDisplay>
    	{(page > 1) 
    		?
	    	<NumberDisplay>
	    		{numbers.map((x,i)=><DisplayItem key={"num"+i} id={"num"+i}>
	    								{(page<5) 
	    									? x 
	    									: 
		    									(x) 
		    									? <Power>2<sup>{7-i}</sup></Power>
		    									: 0}
		    							{(page>4 && i!==7) ? <Plus>+</Plus> : null}
	    							</DisplayItem>)}

	    							
	    	</NumberDisplay>
	    	:
	    	null
	    }

	    {(page > 2) 
    		?
	    	<Buttons>
	    	<Button onClick={bitshiftLeft}>{(page>3) ? (page>6) ? "Multiply by 2" : "Bitshift Left" : "Operation 1"}</Button>
	    	<Button onClick={bitshiftRight}>{(page>3) ? (page>6) ? "Divide by 2" : "Bitshift Right" : "Operation 2"}</Button>
	    	<Button onClick={invert}>{(page>3) ? (page>6) ? "Difference from 255" : "Bitwise Negation" : "Operation 3"}</Button>
	    	</Buttons>
	    	:
	    	null
	    }

	    {(page > 4) 
    		?
			<Meaning>
				{(page > 5)

					?
					<>
					{(page > 7) ? 
					<><p>CHALLENGE</p> <p>Starting at 0 and using just the three operations, get to 150 in as few steps as possible.</p></> :
					<p>How should we understand the three operations above semantically rather than syntactically?</p>
					}
					<p>Current value: {numbers[7]+numbers[6]*2+numbers[5]*4+numbers[4]*8+numbers[3]*16+numbers[2]*32+numbers[1]*64+numbers[0]*128}</p>
					</>
					:
					<>
					<p>We can use the switches above to symbolize a number between 0 and 255.</p>  
					<p>Right now, the configuration represents {numbers[7]+numbers[6]*2+numbers[5]*4+numbers[4]*8+numbers[3]*16+numbers[2]*32+numbers[1]*64+numbers[0]*128}.</p>
					</>	
				}
			</Meaning>
			:
			null
		}

    	{(page>1) ? <LeftArrow onClick={prevPage}>{"<"}</LeftArrow> : null}
    	{(page<MAXPAGES) ? <RightArrow onClick={nextPage}>{">"}</RightArrow> : null}
    </Main>
  );
}

export default App;