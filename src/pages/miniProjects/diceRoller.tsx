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
    const [diceRollBreakdown,setDiceRollBreakdown] = useState<string>("");
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
        let diceArray = new Array<number>(numberOfDice);
        let total=0
        
        switch (rollingMode)
        {
            case RollingMode.RollManyDice:
                total=rollXDiceOfSameSize(sides,numberOfDice,diceArray);
                break;
            case RollingMode.AdvantageOrDisadvantage:
                total=rollXDiceWithAdvantageOrDisadvantage(sides,numberOfDice,advantageOrDisadvantege,diceArray)
                break;
        } 

        total+=modifier;
        updateRollResultAndHistory(total);
        generateAndSetRollBreakdown(diceArray);
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

    const generateAndSetRollBreakdown = (diceArray: number[])  =>
    {
        let rollBreakdown = "";
        switch (rollingMode)
        {
            case RollingMode.RollManyDice:
                rollBreakdown = diceArrayToString(diceArray,modifier," + ");
                break;
            case RollingMode.AdvantageOrDisadvantage:
                rollBreakdown = diceArrayToString(diceArray,modifier," | ");
                break;
        } 

        setDiceRollBreakdown(rollBreakdown);
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
                        max = "100000"
                        value={numberOfDice}
                        onChange={(e) => setNumberOfDice(Number(e.target.value))}
                        onBlur={(e) => handlediceRollerNumericInputValidation(e, setNumberOfDice)}
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
                        max="100000"
                        value={sides}
                        onChange={(e) => setSides(Number(e.target.value))}
                        onBlur={(e) => handlediceRollerNumericInputValidation(e, setSides)}
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
                        max="1000000"
                        value={modifier}
                        onChange={(e) => setModifier(Number(e.target.value))}
                        onBlur={(e) => handlediceRollerNumericInputValidation(e, setModifier)}
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
                        max = "1000"
                        value={historySize}
                        onChange={(e) => setHistorySize(Number(e.target.value))}
                        onBlur={(e) => handlediceRollerNumericInputValidation(e, setHistorySize,undefined,10)}
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
                    <div id = "RollResult01" className="diceRollerResultDiv">{diceRollBreakdown}</div>
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
                <RollHistoryComponent rollHistory={rollHistory}/>

            </div>
        </div>
    </Layout> 
  )
}



  /**
   * Props for HistoryTable. 
   * contains one property, containing an array of rolls 
   */
  interface RollHistoryComponentProps
  {
    rollHistory: number[]
  }


  /**
   * A react component used to format an unspecified number of rolls into a table.
   * The table will have check marks next to them that are associated with them. 
   * @param props see TraitsTableProps
   * @returns a table with the specified character trait keys and values
   */
  const RollHistoryComponent: React.FC<RollHistoryComponentProps> = (props) => {
    let selectedRollSum = 0;
    const [selectedRollTotal, setselectedRollTotal] = useState(0);

    //idea - keep a set of indexes that are selected in the array. when a 
    // checkmark is updates, add or remove that value from the set. 
    // checkmarks should move with the selected/unselected element.



    // checkmarks do not currently work right. Look into this. 
    
    
    let rollHistoryReversed = props.rollHistory.reverse()
    const rollHistoryTable=  new Array<React.ReactElement>(rollHistoryReversed.length);

    let roll:number;
    for (let i=0 ; i<rollHistoryReversed.length ; i++) 
    {
        rollHistoryTable[i]=
            (
                <tr>
                    <td>{rollHistoryReversed[i]}</td>
                    <td>
                        <input 
                            type="checkbox"  
                            value={rollHistoryReversed[i]}
                            onChange={(e) => {
                                setselectedRollTotal(selectedRollTotal+Number(e.target.value))
                            }}
                        />
                    </td>
                </tr>)

        

    }

    return (
        <div>
            sum: {selectedRollTotal}
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Roll</th>
                    </tr>
                </thead>
                <tbody>
                    {rollHistoryTable}
                </tbody>
            </table>
      </div>
    )
  }


export const Head: HeadFC = () => {
    return <title>{pageTitle}</title>
}

// Step 3: Export your component
export default DiceRoller

// ***Callback functions***

/**
 * This function handles validation of a numeric <input> field when a user leaves focus. If the value exceed the max value set in 
 * the <input> component, it will throw a user alert and reset the value. 
 * @param e 
 * @param setStateFunc 
 * @param errorMessage 
 * @param stateResetValue  
 */
function handlediceRollerNumericInputValidation(e: React.FocusEvent<HTMLInputElement>, setStateFunc: (value: number) => void,  errorMessage?: string , stateResetValue : number = 1 ) {
    
    if (e.target.max === "") {return ;} // if we didn't provide a "max" value, this validation isn't needed. 

    
    let input = Number(e.target.value);
    let max = Number(e.target.max);

    errorMessage = errorMessage ? errorMessage : `Please enter a value less than ${max}.`; // default error message. Should be good in most cases. 

    if (input > max) {
        alert(errorMessage);
        setStateFunc(stateResetValue);
    } else {
        setStateFunc(Math.floor(input));
    }
}



// ***Helper functions*** - should be completely functional (not dependent on any state)

/**
 *  Returns the total for rolling a variable of number of dice, all with
 *  the same number of sides
 * @param diceSides number of sides on each dice
 * @param numberOfDice number of dice rolled
 * @returns the total for the dice roll
 */
function rollXDiceOfSameSize(diceSides:number , numberOfDice:number, diceArray:number[]): number
{
    let result = 0;
    let roll;  

    for (let i = 0; i < numberOfDice; i++) {
        roll = Math.floor(Math.random() * diceSides) + 1;
        diceArray[i] = roll;
        result+=roll;
    }
    return result;
}


/**
 * Roll a set number of dice of the same size, either with advantage or disadvantage (pick greates or least roll)
 * @param diceSides number of sides on the dice
 * @param numberOfRolls number
 * @param advantageOrDisadvantege true for rolling with advantage. false for rolling with disadvantage
 * @returns  the resulting roll
 */
function rollXDiceWithAdvantageOrDisadvantage(diceSides: number,numberOfRolls: number,  advantageOrDisadvantege: boolean, diceArray:number[]) : number
{
    let result = advantageOrDisadvantege ? 1 : diceSides; // primer for the first roll. 

    // Roll the dice and update the result
    for (let i = 0; i < numberOfRolls; i++) {
      const roll = Math.floor(Math.random() * diceSides) + 1;
      diceArray[i] = roll;
      result = advantageOrDisadvantege ? Math.max(result, roll) : Math.min(result, roll);
    }

    return result;
}


function diceArrayToString(diceArray: number[] , modifier: number, delimiter:string = ",") : string
{
    let arrayString = "";
    if (diceArray.length === 0 ) {return arrayString;}
    arrayString = "(" + diceArray.join(delimiter) + ") + " + modifier;
    return arrayString;
}
