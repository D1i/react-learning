import React from 'react';
import request from "../../services/request-response.js";

class HintsContainer extends React.Component {
  render() {
    return (
      <div>
        <SearchHints
          inputValue={this.props.inputValue}
          setInputValue={this.props.setInputValue}
        />
      </div>
    )
  }
}

function SearchHints(props) {
    let hints = [];
    {request(props.inputValue).then(fullInfoCity => {
      hints = [];
      fullInfoCity.map(city => {
        hints.push(<div onClick={props.setInputValue} value={city.value}>{city.value}</div>)
      }
    )})}
    return (
      <div>
        {hints}
      </div>
    )
}

export default HintsContainer;