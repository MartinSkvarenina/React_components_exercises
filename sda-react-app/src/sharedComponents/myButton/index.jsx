import React, {useState} from 'react';

export default function MyButton({ ButtonName }) {
    const [counter, setCounter] = useState(0);
    const [showText, setShowText] = useState(true);


    return (
    <div>
        <button 
            onClick={function() {
                //window.alert('Bolo kliknute na tlačítko: ${ButtonName}');
                setCounter(counter + 1);

                setShowText(!showText);
        }}>
            {ButtonName}
        </button>
        {showText === true && <div>Počet klikov {counter}</div>}
    </div>
    );
}
