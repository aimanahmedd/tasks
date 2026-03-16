import React, { useState } from "react";
//import { Answer } from "../interfaces/answer";
import { Form } from "react-bootstrap";

/*
The CheckAnswer component allows a user to enter an answer to a short answer question, and then displays whether 
they got it correct or incorrect. 
The component takes in a parameter representing the expectedAnswer.

You will need a state to handle the user’s given answer
The user’s given answer should initially be the empty string
When the user’s given answer matches the expectedAnswer, display ✔️; otherwise display ❌
*/

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Check Answer</h3>
                <h3>{answer === expectedAnswer ? "✔️" : " ❌"}</h3>
            </div>
            <Form.Group controlId="FormAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
        </div>
    );
}
