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

class SearchHints extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hints: [],
  }
  }
  render() {
    {request(this.props.inputValue).then(fullInfoCity => {
      console.log("26");
      this.setState({hints: []});
      fullInfoCity.map(city => {
      this.setState((state, props) => ({
        hints: [...state.hints, <div onClick={this.props.setInputValue} value={city.value}>{city.value}</div>]
      }));
    })})}
    return (
      <div>
        {this.state.hints}
      </div>
    )
  }
}

export default HintsContainer;