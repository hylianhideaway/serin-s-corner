import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../../components/layout'
import { useRef, useState } from 'react'
import Switch from '@mui/material/Switch';
import { FormControlLabel, MenuItem, Radio, RadioGroup, Select, ToggleButton, ToggleButtonGroup } from '@mui/material';
import  '../../assets/style/diceRoller.css'


/**
 * Page Title for the diceRoller page
 */
const pageTitle = "Dice Roller"

/**
 * The current rolling mode state we are in
 */
enum RollingMode {
    RollManyDice = "Roll Many Dice",
    AdvantageOrDisadvantage = "Advantage Or Disadvantage"
}


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
    const [diceArray,setDiceArray] = useState<number[]>([]);
    const [historySize, setHistorySize] = useState(10);
    const [rollHistory, setRollHistory] = useState<number[]>([]);
    const[advantageOrDisadvantege,setAdvantageOrDisadvantege] = useState(true);
    const[rollingMode,setRollingMode] = useState<RollingMode>(RollingMode.RollManyDice);

    //references for input fields - not really use this yet, but could be useful I guess...
    const numberOfDiceInputField01Ref = useRef<HTMLInputElement | null>(null); 
    const numberOfSidesInputField01Ref = useRef<HTMLInputElement | null>(null); 
    const modifierInputField01Ref = useRef<HTMLInputElement | null>(null); 





    /**
     * Helper functions that depend on state that exists inside the componenet
     */
    const handleRoll = () => {
        let diceArray: number[] = [] 
        let total=0
        
        switch (rollingMode)
        {
            case RollingMode.RollManyDice:
                total=rollXDiceOfSameSize(sides,numberOfDice);
                break;
            case RollingMode.AdvantageOrDisadvantage:
                total=rollXDiceWithAdvantageOrDisadvantage(sides,numberOfDice,advantageOrDisadvantege)
                break;
        } 

        total+=modifier;
        updateRollResultAndHistory(total);
    }

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

    /**
     * Clears the roll history
     */
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



    // Dependent values: Should be recalculateed every time the component is re-rendered
    const runningTotal = rollHistory.reduce((runningTotal, value) => runningTotal + value, 0);
    const runningAverage = rollHistory.length==0 ? 0 : runningTotal/rollHistory.length;

    // The actual component
    return (
    <Layout pageTitle={pageTitle}>
        <div className="diceRollerTopDivContainer">
            
            {/*This component should allow you to select the mode, as well as all the settings for the mode */}
            <div id="DiceRollerSettingsContainer1" className="componentContainer">
                
                {/* Rolling Mode  */}
                {/*TODO - swap this out for something better */}
                <ToggleButtonGroup
                    color="primary"
                    aria-label="Rolling Mode"
                    value = {rollingMode}
                    exclusive
                    onChange = { (event: React.MouseEvent<HTMLElement>,__rollingMode: RollingMode) => {
                        setRollingMode(__rollingMode);
                        if (__rollingMode===RollingMode.AdvantageOrDisadvantage) {
                            setNumberOfDice(2);
                            setSides(20);
                        }
                    }}
                    >
                        <ToggleButton value={RollingMode.RollManyDice}>{RollingMode.RollManyDice}</ToggleButton>
                        <ToggleButton value={RollingMode.AdvantageOrDisadvantage}>{RollingMode.AdvantageOrDisadvantage}</ToggleButton>
                </ToggleButtonGroup>


                {/*WHen Rolling with Advantage vs Disadvantage, this component controls which mode is selected  */}
                {rollingMode === RollingMode.AdvantageOrDisadvantage ? 
                <div>
                    Disadvantage
                    <Switch
                        onChange={(e) => setAdvantageOrDisadvantege(e.target.checked)}
                        checked={advantageOrDisadvantege}
                    />
                    Advantage                  
                </div>
                : null
                }

                <div className="diceRollerInputDivContainer">
                    <div className="diceRollerInputLabelDiv"><label htmlFor="NumberOfDiceInputField1">Number of dice:</label></div>
                    <input
                        id = "NumberOfDiceInputField1"
                        ref = {numberOfDiceInputField01Ref}
                        className="diceRollerInputField"
                        type="number"
                        min="1"
                        step="1"
                        value={numberOfDice}
                        onChange={(e) => setNumberOfDice(Number(e.target.value))}
                        onFocus= { (e) => e.target.select()}

                    />
                </div>

                <div className="diceRollerInputDivContainer">
                    <div className="diceRollerInputLabelDiv"><label htmlFor="NumberOfSidesInputField01">Number of sides:</label></div>
                    <input
                        id = "NumberOfSidesInputField01"
                        className="diceRollerInputField"
                        ref = {numberOfSidesInputField01Ref}
                        type="number"
                        min="1"
                        step="1"
                        value={sides}
                        onChange={(e) => setSides(Number(e.target.value))}
                        onFocus= { (e) => e.target.select()}
                    />
                </div>

                <div className="diceRollerInputDivContainer">
                    <div className="diceRollerInputLabelDiv"><label htmlFor="ModifierInputField01">Modifier:</label></div>
                    <input
                        id = "ModifierInputField01"
                        className="diceRollerInputField"
                        ref = {modifierInputField01Ref}
                        type="number"
                        min="0"
                        step="1"
                        value={modifier}
                        onChange={(e) => setModifier(Number(e.target.value))}
                        onFocus= { (e) => e.target.select()}
                    />
                </div>

                <div className="diceRollerInputDivContainer">
                    <div className="diceRollerInputLabelDiv"><label htmlFor="HistorySizeInputField01">History size:</label></div>
                    <input
                        id = "HistorySizeInputField01"
                        className="diceRollerInputField"
                        type="number"
                        min="1"
                        step="1"
                        value={historySize}
                        onChange={(e) => setHistorySize(Number(e.target.value))}
                        onFocus= { (e) => e.target.select()}
                    />
                </div>
                {/*This component should allow you to trigger actions */}
                <div id="DiceRollerButtonContainer01" className="diceRollerActionButtonContainer">
                    <button onClick={handleRoll}>Roll Dice</button>
                    <button onClick={handleClearHistory}>Clear History</button>
                    <button onClick={handleApplyNewHistorySize}>Update History Size</button>
                </div>  
            </div>



            <div id="DiceRollerResultsContainer1" className="componentContainer">

                <div className="diceRollerResultWrapperDiv">
                    <div className="diceRollerResultLabelDiv"><label htmlFor="RollResult01">Roll Result:</label></div>
                    <div id = "RollResult01" className="diceRollerResultDiv">{rollResult}</div>
                </div>
                <div className="diceRollerResultWrapperDiv">
                    <div className="diceRollerResultLabelDiv"><label htmlFor="RollResult01">Roll Breakdown:</label></div>
                    <div id = "RollResult01" className="diceRollerResultDiv">TODO{diceArray.toString()}</div>
                </div>  
                <div className="diceRollerResultWrapperDiv">
                    <div className="diceRollerResultLabelDiv"><label htmlFor="RollResult01">Running Total:</label></div>
                    <div id = "RollResult01" className="diceRollerResultDiv">{runningTotal}</div>
                </div>  
                <div className="diceRollerResultWrapperDiv">
                    <div className="diceRollerResultLabelDiv"><label htmlFor="RollResult01">Running Average:</label></div>
                    <div id = "RollResult01" className="diceRollerResultDiv">{Math.round(runningAverage*10)/10}</div> {/* Round to 1 decimal place */}
                </div>   

            </div>


            <div className="componentContainer">
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
        console.log("Oh hai");
      const roll = Math.floor(Math.random() * diceSides) + 1;
      result = advantageOrDisadvantege ? Math.max(result, roll) : Math.min(result, roll);
    }

    return result;
}