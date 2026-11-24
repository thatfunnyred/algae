import { useEffect, useRef, useState } from "react";
import "../styles/home-styles.css"
import { generateRandomArray } from "../script/data";
import { generateBubbleSort } from "../script/algorithms";

export default function HomePage() {
    const lengthRef = useRef<HTMLInputElement>(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [UNSORTED_ARRAY, SET_UNSORTED_ARRAY] =
        useState<number[]>(generateRandomArray(10));

    const [STEPS, SET_STEPS] = useState<number[][]>([]);
    const [running, setRunning] = useState(false);
    const [currentArray, setCurrentArray] = useState(UNSORTED_ARRAY);

    useEffect(() => {
        const steps = generateBubbleSort(UNSORTED_ARRAY);

        SET_STEPS(steps);
        setCurrentArray(UNSORTED_ARRAY);
        setCurrentStep(0);
        setRunning(false);
    }, [UNSORTED_ARRAY]);

    useEffect(() => {
        if (!running) return;

        const intervalId = setInterval(() => {
            setCurrentStep(prev => {
                if (prev + 1 >= STEPS.length) {
                    setRunning(false);
                    return prev;
                }

                return prev + 1;
            });
        }, 100);

        return () => clearInterval(intervalId);
    }, [running, STEPS]);

    useEffect(() => {
        if (STEPS.length > 0) {
            setCurrentArray(STEPS[currentStep]);
        }
    }, [currentStep, STEPS]);

    const handleNextStep = () => {
        setCurrentStep(prev =>
            Math.min(prev + 1, STEPS.length - 1)
        );
    };

    const handlePrevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 0));
    };

    const handlePlay = () => {
        setRunning(prev => !prev);
    };

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

                {currentArray.map((value: number, key: number) => (
                    <div key={key} className="data-rods" style={{height: `calc(80% * ${value}/${UNSORTED_ARRAY.length})`}}></div>
                ))}
            </div>

            {/* buttons to control the sorting. */}
            <div id="controls">
                <div>
                    <button id="init-btn" onClick={handlePlay}>{running ? "pause" : "play"}</button>
                    <button id="prev-step-btn" onClick={handlePrevStep}>{"<"}</button>
                    <button id="next-step-btn" onClick={handleNextStep}>{">"}</button>
                </div>
                
                <div>
                    <input ref={lengthRef} id="data-length" type="range" name="speed" defaultValue={10} min="5" max="100" step="5" onChange={handleShuffle} />
                    <button id="shuffle-btn" onClick={handleShuffle}>
                        <svg fill="#000000" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.94.56a8.05 8.05 0 0 1 6.82 3.64V1.55H16V5a1.16 1.16 0 0 1-1.15 1.15h-3.44V4.9h2.32a6.79 6.79 0 0 0-5.79-3.1A6.48 6.48 0 0 0 1.24 8a6.48 6.48 0 0 0 6.7 6.2 6.48 6.48 0 0 0 6.7-6.2h1.24a7.71 7.71 0 0 1-7.94 7.44A7.71 7.71 0 0 1 0 8 7.71 7.71 0 0 1 7.94.56z"/></svg>
                    </button>
                </div>

            </div>
        </div>
    );
}