import React from "react";
import { Form } from "react-bootstrap";

const MatchNoScreen = () => {
    const [ringNo, setRingNo] = React.useState(1);
    const [matches, setMatches] = React.useState(null);

    React.useEffect(() => {
        const fetchMatches = async (ringNo) => {
            await fetch(`/api/matches/getComplete`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ringNo: ringNo }),
            })
                .then((res) => res.json())
                .then((data) => setMatches(data));
        };
        fetchMatches(ringNo);
        const interval = setInterval(() => {
            fetchMatches(ringNo)
        }, 10000);

        return () => clearInterval(interval)
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
