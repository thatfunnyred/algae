import { useRef, useState } from "react";
import "../styles/home-styles.css"
import { generateRandomArray } from "../script/data";

export default function HomePage() {
    const lengthRef = useRef<HTMLInputElement>(null);
    const [STEP, SET_STEP] = useState<number>(0);

    const length = parseInt(lengthRef.current?.value ?? "");
    const [UNSORTED_ARRAY, SET_UNSORTED_ARRAY] = useState<number[]>(generateRandomArray(length));

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

    const handleShuffle = () => {
        const length = parseInt(lengthRef.current?.value ?? "");
        const randomArray = generateRandomArray(length);
        SET_UNSORTED_ARRAY(randomArray);
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
                
                <div>
                    <input ref={lengthRef} id="data-length" type="range" name="speed" min="0" max="100" step="1" onChange={handleShuffle} />
                    <button id="shuffle-btn" onClick={handleShuffle}>
                        <svg fill="#000000" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.94.56a8.05 8.05 0 0 1 6.82 3.64V1.55H16V5a1.16 1.16 0 0 1-1.15 1.15h-3.44V4.9h2.32a6.79 6.79 0 0 0-5.79-3.1A6.48 6.48 0 0 0 1.24 8a6.48 6.48 0 0 0 6.7 6.2 6.48 6.48 0 0 0 6.7-6.2h1.24a7.71 7.71 0 0 1-7.94 7.44A7.71 7.71 0 0 1 0 8 7.71 7.71 0 0 1 7.94.56z"/></svg>
                    </button>
                </div>

            </div>
        </div>
    );
}