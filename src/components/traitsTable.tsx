import * as React from "react"


  /**
   * Props fro TraitsTable. 
   * contains one property, containing an array of [string,string] tuples
   */
  interface TraitsTableProps
  {
    traitPairs: [string,string][]
  }

  /**
   * 
   * @param props see TraitsTableProps
   * @returns a table with the specified character trait keys and values
   */
  const TraitsTable: React.FC<TraitsTableProps> = (props) => {
    let traitPairs = props.traitPairs
    const traitsTable= [];

    for (const traitPair of  traitPairs) {
      traitsTable.push(<tr><td><b>{traitPair[0]}</b></td><td>{traitPair[1]}</td></tr>)
    }

    return (
      <table>
      {traitsTable}
      </table>
    )
  }

  export default TraitsTable
