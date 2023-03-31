/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Form } from "react-bootstrap";
import { useFetchMatches } from "../../hooks/useFetchMatches";

const MatchNoScreen = () => {
  document.title = "RingNo Screen";
  const [ringNo, setRingNo] = React.useState(1);
  const { matches, fetchMatches } = useFetchMatches();

  // refreshes match list every 10 seconds
  React.useEffect(() => {
    fetchMatches(ringNo);
    const interval = setInterval(() => {
      fetchMatches(ringNo);
    }, 10000);

    return () => clearInterval(interval);
  }, [ringNo]);

  const spanStyle = {
    color: "white",
    fontSize: "50rem",
  };

  return (
    <>
      <Form.Select
        value={ringNo}
        onChange={(e) => {
          setRingNo(e.target.value);
        }}
      >
        <option value={1}>ring 1</option>
        <option value={2}>ring 2</option>
        <option value={3}>ring 3</option>
      </Form.Select>
      <div
        style={{
          minHeight: "100vh",
          minWidth: "100%",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* displays only the first irem in the list to get the next match */}
        {matches[0] && (
          <div key={matches[0].matchNo} style={spanStyle}>
            {matches[0].matchNo}
          </div>
        )}
      </div>
    </>
  );
};

export default MatchNoScreen;
