import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../../components/layout'
import Card, { BottomContent, MiddleContent, CardTitle, TopContent } from '../../components/card'
import { useEffect, useRef, useState } from 'react'
import Switch from '@mui/material/Switch';
import { FormControlLabel, MenuItem, Radio, RadioGroup, Select, ToggleButton, ToggleButtonGroup } from '@mui/material';
import  '../../assets/style/diceRoller.css'
import  { StandardButton, OptionButton } from '../../components/Buttons'


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
    const [rollHistory, setRollHistory] = useState<number[]>([]); // roll hisotry always has teh most recent rolls first
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
            const newHistory = [result ,  ...prevHistory, ];
            if (newHistory.length > historySize) 
            {
                newHistory.length = historySize ; // removes the oldest value in the array
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
                newHistory.length = historySize
                return newHistory;
            } 
        })
    }



    // Dependent values: Should be recalculateed every time the component is re-rendered
    const runningTotal = rollHistory.reduce((runningTotal, value) => runningTotal + value, 0);
    const runningAverage = rollHistory.length===0 ? 0 : runningTotal/rollHistory.length;

    // The actual component
    return (
    <Layout pageTitle={pageTitle}>
        <div className="diceRollerTopDivContainer">
            
            {/*This component should allow you to select the mode, as well as all the settings for the mode */}
            <Card id="DiceRollerSettingsContainer1">
                <CardTitle>Setup</CardTitle>
                <TopContent>
                    {/* Rolling Mode  */}
                    <div className="diceRollerActionButtonContainer">
                        <OptionButton 
                            label={RollingMode.RollManyDice}
                            isActive = {rollingMode === RollingMode.RollManyDice}
                            onClick = { () => setRollingMode(RollingMode.RollManyDice) }
                        />
                        <OptionButton 
                            label={RollingMode.AdvantageOrDisadvantage}
                            isActive = {rollingMode === RollingMode.AdvantageOrDisadvantage}
                            onClick = { () => {
                                setRollingMode(RollingMode.AdvantageOrDisadvantage)
                                setNumberOfDice(2);
                                setSides(20); 
                            }}
                        />
                    </div>
                </TopContent>
                <MiddleContent>
                    {/*WHen Rolling with Advantage vs Disadvantage, this component controls which mode is selected  */}
                    {rollingMode === RollingMode.AdvantageOrDisadvantage ?
                    <div className="diceRollerInputDivContainer">
                        <div className="diceRollerInputLabelDiv"><label>Mode:</label></div>
                        <div className="diceRollerActionButtonContainer" >
                            <OptionButton 
                                label={"Advantage"}
                                isActive = {advantageOrDisadvantege === true}
                                onClick = { () => setAdvantageOrDisadvantege(true) }
                            />
                            <OptionButton 
                                label={"Disadvantage"}
                                isActive = {advantageOrDisadvantege === false}
                                onClick = { () => setAdvantageOrDisadvantege(false) }
                            /> 
                        </div>
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
                </MiddleContent>
                <BottomContent>
                    {/*This component should allow you to trigger actions */}
                    <div id="DiceRollerButtonContainer01" className="diceRollerActionButtonContainer">
                        <StandardButton label ={"Roll Dice"} onClick={handleRoll}/>
                        <StandardButton label ={"Clear History"} onClick={handleClearHistory} />
                        <StandardButton label ={"Update History Size"} onClick={handleApplyNewHistorySize} />
                    </div>       
                </BottomContent>
            </Card>
            <Card id="DiceRollerResultsContainer1">
                <CardTitle>Roll Results</CardTitle>
                <MiddleContent>
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
                </MiddleContent>
            </Card>
            <Card id="RollHistoryContainer1">
                <CardTitle>Roll History</CardTitle>
                <MiddleContent>
                    <RollHistoryComponent rollHistory={rollHistory}/>
                </MiddleContent>


            </Card>

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
    rollHistory: number[]   // roll history array. Follow FIFO approach
  }


  /**
   * A react component used to format an unspecified number of rolls into a table.
   * The table will have check marks next to them that are associated with them.
   * When the checkmark next to the roll is selected, a displayed running total will
   * be updated with the total of the number's associated with the selected checkmarks 
   * @param props see TraitsTableProps
   * @returns a table with the specified character trait keys and values
   */
  const RollHistoryComponent: React.FC<RollHistoryComponentProps> = (props) => {

    //this is an array of indexes corresponding to the rolls that were selected
    // the indexes can be used to find the value of the roll in the original array
    const [selectedRolls, setSelectedRolls] = useState<number[]>([]);

    useEffect(() => {
        // Filter out any selected indexes that are out of bounds
        setSelectedRolls(prevSelected => prevSelected.filter(index => index < props.rollHistory.length));
      }, [props.rollHistory]);


    const toggleRollSelection = (index: number) => {
      // If the roll is already selected, we remove it from the selection
      if (selectedRolls.includes(index)) {
        setSelectedRolls((prevSelected) => prevSelected.filter((i) => i !== index));
      } else {
        // Otherwise, we add it to the selection
        setSelectedRolls((prevSelected) => [...prevSelected, index]);
      }
    };
  
    // Calculate the total of the selected rolls
    const selectedRollTotal = selectedRolls.reduce(
      (sum, index) => sum + props.rollHistory[index],
      0
    );


    return (
        <div>
            <div className="diceRollerRollHistoryWrapperDiv">
                <div className="diceRollerRollHistoryLabelDiv"><label htmlFor="SelectedRollSum01">Sum:</label></div>
                <div id = "SelectedRollSum01" className="diceRollerRollHistoryDiv">{selectedRollTotal}</div>
            </div>
            <div className="diceRollerResultTableContainer">
                <table>
                    <thead>
                        <tr>
                        <th>Result</th>
                        <th>Include?</th>
                        </tr>
                    </thead>
                <tbody>
            {/* Iterate over the rollHistory in reverse */}
            {props.rollHistory.map((__roll, idx) => {
                // Calculate the reverse index
                return (
                <tr key={idx}> 
                    <td>{__roll}</td>
                    <td>
                    <input
                        type="checkbox"
                        checked={selectedRolls.includes(idx)}
                        onChange={() => toggleRollSelection(idx)}
                    />
                    </td>
                </tr>
                );
            })}
                </tbody>
            </table>
          </div>
        </div>
      );
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
