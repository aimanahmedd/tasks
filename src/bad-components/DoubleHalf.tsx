import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";
/*
The DoubleHalf component provides two buttons. One doubles the value, the other halves the value.

Currently, the component is commented out because it is broken and crashes your application. 
Uncomment the component’s instantiation in src/App.tsx, and then fix the Component 
so that it works correctly.

You must NOT add or remove components; you can only modify the existing components. 
Hint: You are free to delete files if they serve no purpose, though…*/

interface DHProps {
    dhValue: number;
    setDhValue: (value: number) => void;
}

function Doubler({ dhValue, setDhValue }: DHProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ dhValue, setDhValue }: DHProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
