import React, { Component } from "react";
import MatchDetails from "../components/MatchDetails";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

class NextMatches extends Component {
  constructor(props) {
    super(props);
    this.state = {value: "1"};

    //binding scope of handlechange to the whole of NextMatches class
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value})
  }
  
  render() {
    document.title='Next Matches'
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>Next Matches</Card.Title>
            <Form.Select value={this.state.value} onChange={this.handleChange}>
                <option value={1}>ring 1</option>
                <option value={2}>ring 2</option>
                <option value={3}>ring 3</option>
            </Form.Select>
            <br/>
            <span className="matches">
              <MatchDetails ringNo={this.state.value}/>
            </span>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default NextMatches;
