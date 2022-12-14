import { useState } from "react";
import MatchDetails from "../components/MatchDetails";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

const NextMatches = () => {
  const [ringNo, setRingNo] = useState('1');
  document.title = "Next Matches";
  return (
    <div>
        <Card className="nextMatchesPage">
            <Card.Title>Next Matches</Card.Title>
            <Form.Select value={ringNo} onChange={(e)=>{setRingNo(e.target.value)}}>
                <option value={1}>ring 1</option>
                <option value={2}>ring 2</option>
                <option value={3}>ring 3</option>
            </Form.Select>
            <br/>
            <Card.Body className="matches overflow-auto" >
              <MatchDetails ringNo={ringNo}/>
            </Card.Body>
        </Card>
      </div>
  )
}

export default NextMatches;