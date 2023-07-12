import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../../components/layout'
import { useState } from 'react'

/**
 * Page Title for the diceRoller page
 */
const pageTitle = "Dice Roller"


/**
 * Top level component of the dice roller page. 
 * Everything on the page is contained in this component. 
 * @returns 
 */
const DiceRoller: React.FC<PageProps> = () => {

    // Values who, when updated, should trigger a recalculation
    const [numberOfDice, setNumberOfDice] = useState(1);
    const [sides, setSides] = useState(6);
    const [modifier, setModifier] = useState(0);
    const [rollResult, setRollResult] = useState(0);
    const [historySize, setHistorySize] = useState(10);
    const [rollHistory, setRollHistory] = useState<number[]>([]);


    // Helper functions that depend on state that exists inside the componenet

    /**
     * A general function that can be used for updating both the 
     * last result and running history of all rolls for any dice roll.
     * Should be called by the handler after we generate the dice roll. 
     * @param result the dice roll result
     */
    const updateRollResultAndHistory = (result:number) => 
    {
        // Update the last result
        setRollResult(result);
        // Update the rolling history
        setRollHistory((prevHistory) => {
            const newHistory = [...prevHistory, result];
            if (newHistory.length > historySize) 
            {
                newHistory.shift() ; // removes the oldest value in the array
            }
            return newHistory;
        });
    }
    
    
    const handleRollDice = () => {
        const total = rollXDiceOfSameSize(sides,numberOfDice) + modifier;
        updateRollResultAndHistory(total);
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
        })
    }

    // Dependent values: Should be recalcualted every time the component is re-rendered
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

// Helper functions - should be completely functional (not dependent on any state)

/**
 *  Returns the total for rolling a variable of number of dice, all with
 *  the same number of sides
 * @param diceSides number of sides on each dice
 * @param numberOfDice number of dice rolled
 * @returns the total for the dice roll
 */
function rollXDiceOfSameSize(diceSides:number , numberOfDice:number): number 
{
    let total = 0;
    let roll;    
    for (let i = 0; i < numberOfDice; i++) {
    roll = Math.floor(Math.random() * diceSides) + 1;
    total += roll;
    }
    return total;
}


/**
 * Roll a set number of dice of the same size, either with advantage or disadvantage (pick greates or least roll)
 * @param diceSides number of sides on the dice
 * @param numberOfRolls number
 * @param advantageOrDisadvantege true for rolling with advantage. false for rolling with disadvantage
 * @returns  the resulting roll
 */
function rollXDiceWithAdvantageOrDisadvantage(diceSides: number,numberOfRolls: number,  advantageOrDisadvantege: boolean)
{
    let result = advantageOrDisadvantege ? 1 : diceSides; // primer for the first roll. 

    // Roll the dice and update the result
    for (let i = 0; i < numberOfRolls; i++) {
      const roll = Math.floor(Math.random() * diceSides) + 1;
      result = advantageOrDisadvantege ? Math.max(result, roll) : Math.min(result, roll);
    }

    return result;
}
