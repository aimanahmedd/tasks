import React, { useState } from "react";
import { Form } from "react-bootstrap";

/*
The ChangeColor component offers the user a bunch of radio buttons labeled with different colors; choosing a radio button 
updates the text and color of a nearby box of text.

You will need state to represent the chosen color
You are free to make up your own list of colors, but you must have AT LEAST 8 unique colors.
Each color must be represented by a radio button.
There should be a box of text with a data-testid="colored-box" attribute and value.
The box of text should have the same text and backgroundColor style as the currently selected radio button.
HINT: We strongly recommend you use map to render all the color’s Form.Check tags rather than hardcoding each one!

HINT: We recommend you use the inline attribute for the radio buttons.*/
const COLORS = [
    "pink",
    "purple",
    "blue",
    "red",
    "green",
    "yellow",
    "orange",
    "brown",
];

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        value={color}
                        type="radio"
                        name="colors"
                        onChange={() => {
                            setChosenColor(color);
                        }}
                        label={color}
                        checked={chosenColor === color}
                        // data-testid="colored-box"
                        // style={{ backgroundColor: color }}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{ backgroundColor: chosenColor }}
            >
                {chosenColor}
            </div>
        </div>
    );
}
