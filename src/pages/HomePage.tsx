import { useState } from "react";
import "../styles/home-styles.css"

export default function HomePage() {
    const [UNSORTED_ARRAY, SET_UNSORTED_ARRAY] = useState<number[]>([1, 5, 2, 4, 8, 3, 6, 9, 7]);
    const [STEP, SET_STEP] = useState<number>(0);

    const handleNextStep = () => {
        const POINTER = document.getElementById("current-pointer");

        if(STEP >= (UNSORTED_ARRAY.length - 1)) {
            SET_STEP(0);

            return;
        }
        
        if(POINTER) {
            POINTER.style.bottom = `calc(80% * ${UNSORTED_ARRAY[STEP]}/${UNSORTED_ARRAY.length} + 12px)`;
            POINTER.style.left = `calc(18px + ${STEP + 0.5} * ((100% - 36px)/${UNSORTED_ARRAY.length}))`;
        }
        
        if(UNSORTED_ARRAY[STEP] > UNSORTED_ARRAY[STEP + 1]) {

            let mutableArray = [...UNSORTED_ARRAY];
            mutableArray[STEP] = UNSORTED_ARRAY[STEP + 1];
            mutableArray[STEP + 1] = UNSORTED_ARRAY[STEP];
            
            SET_UNSORTED_ARRAY(mutableArray);

            if(POINTER) {
                POINTER.style.bottom = `calc(80% * ${mutableArray[STEP + 1]}/${mutableArray.length} + 12px)`;
                POINTER.style.left = `calc(18px + ${STEP + 1.5} * ((100% - 36px)/${mutableArray.length}))`;
            }
        }
        
        SET_STEP(STEP + 1);
    }
    

    return (
        <div id="home-page-container">

            {/* display for the list to be sorted */}
            <div id="display">

                <div id="current-pointer">{">"}</div>

                {UNSORTED_ARRAY.map((value: number, key: number) => (
                    <div key={key} className="data-rods" style={{height: `calc(80% * ${value}/${UNSORTED_ARRAY.length})`}}></div>
                ))}
            </div>

            {/* buttons to control the sorting. */}
            <div id="controls">
                <div>
                    <button id="init-btn">Play</button>
                    <button id="prev-step-btn">{"<"}</button>
                    <button id="next-step-btn" onClick={handleNextStep}>{">"}</button>
                </div>

                <input id="speed" type="range" name="speed" min="0" max="100" step="1" />
            </div>
        </div>
    );
}