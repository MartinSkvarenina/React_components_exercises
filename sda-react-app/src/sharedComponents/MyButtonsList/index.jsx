import React from "react";
import MyButton from "../myButton";

export default function MyButtonsList ({ buttonsCount, disableCounters }) {
const buttons = Array(buttonsCount).fill('');

return buttons.map((i) => <MyButton ButtonName="Tlačítko" disableCounters={disableCounters} />)
}

