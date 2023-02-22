/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Form } from "react-bootstrap";
import { useFetchMatches } from "../../hooks/useFetchMatches";

const MatchNoScreen = () => {
    const [ringNo, setRingNo] = React.useState(1);
    const { matches, fetchMatches } = useFetchMatches();

    React.useEffect(() => {
        fetchMatches(ringNo);
        const interval = setInterval(() => {
            fetchMatches(ringNo);
        }, 10000);

        return () => clearInterval(interval);
    }, [ringNo]);

    const spanStyle = {
        color: "white",
        fontSize: "55vw",
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
                    minWidth: "100vw",
                    backgroundColor: "black",
                }}
            >
                {matches && (
                    <span key={matches[0].matchNo} style={spanStyle}>
                        {matches[0].matchNo}
                    </span>
                )}
            </div>
        </>
    );
};

export default MatchNoScreen;
