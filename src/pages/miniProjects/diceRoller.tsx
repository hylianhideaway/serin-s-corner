import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../../components/layout'
import { useState } from 'react'


const pageTitle = "Dice Roller"


// Step 2: Define your component
const DiceRoller: React.FC<PageProps> = () => {

    const [numberOfDice, setNumberOfDice] = useState(1);
    const [sides, setSides] = useState(6);
    const [modifier, setModifier] = useState(0);
    const [rollResult, setRollResult] = useState(0);
    const [historySize, setHistorySize] = useState(10);
    const [rollHistory, setRollHistory] = useState<number[]>([]);

      
    const handleRollDice = () => {
        let total = 0;
    
        for (let i = 0; i < numberOfDice; i++) {
        const roll = Math.floor(Math.random() * sides) + 1;
        total += roll;
        }

        total=total+modifier;
    
        setRollResult(total);
        setRollHistory((prevHistory) => {
            const newHistory = [...prevHistory, total];
            if (newHistory.length > historySize) 
            {
                newHistory.shift() ; // removes the oldest value in the array
            }
            return newHistory;
        });

    }

    const handleClearHistory = () => {
        setRollHistory([]);
      };


    const handleApplyNewHistorySize = () => 
    {
        setRollHistory( (prevHistory) =>
        {
            const newHistory = [...prevHistory];
            if (newHistory.length <= historySize)
            {
                return newHistory;
            }
            else
            {
                let sizeDiscrepancy= prevHistory.length - historySize ;
                for(let i = 0 ; i < sizeDiscrepancy ; i++)
                {
                    newHistory.shift();
                }
                return newHistory;
            } 
        }
        
        
        )

    }

      const runningTotal = rollHistory.reduce((runningTotal, value) => runningTotal + value, 0);

    
   
    return (
    <Layout pageTitle={pageTitle}>
        <div>
            <div>
                <label>Number of dice:</label>
                <input
                    type="number"
                    value={numberOfDice}
                    onChange={(e) => setNumberOfDice(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Number of sides:</label>
                <input
                    type="number"
                    value={sides}
                    onChange={(e) => setSides(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Modifier:</label>
                <input
                    type="number"
                    value={modifier}
                    onChange={(e) => setModifier(Number(e.target.value))}
                />
            </div>
            <div>
                <label>History size:</label>
                <input
                    type="number"
                    value={historySize}
                    onChange={(e) => setHistorySize(Number(e.target.value))}
                />
            </div>
            <button onClick={handleRollDice}>Roll Dice</button>
            <button onClick={handleClearHistory}>Clear History</button>
            <button onClick={handleApplyNewHistorySize}>Update History Size</button>

            <div>
                <strong>Roll Result:</strong> {rollResult}
            </div>
            <div>
                <strong>Running Total:</strong> {runningTotal}
            </div>
            <div>
                <strong>Roll History:</strong>
                <ul>
                    {rollHistory.map((roll, index) => (
                    <li key={index}>{roll}</li>
                    ))}
                </ul>
            </div>
        </div>
    </Layout> 


  )
}

export const Head: HeadFC = () => {
    return <title>{pageTitle}</title>
}

// Step 3: Export your component
export default DiceRoller