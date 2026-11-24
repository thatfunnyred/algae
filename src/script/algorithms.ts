function generateBubbleSort(unsortedArray: number[]) {
    let duplicateArray: number[] = [...unsortedArray];
    let steps: number[][] = [];
    let sorted = false;

    while(!sorted)
    {
        sorted = true;

        for(let i = 0; i < duplicateArray.length - 1; i++) {
            const num1 = duplicateArray[i];
            const num2 = duplicateArray[i + 1];
            if(num1 > num2) {
                duplicateArray[i] = num2;
                duplicateArray[i + 1] = num1;

                sorted = false;
            }

            steps.push([...duplicateArray]);
        }
    }

    return steps;
}

export { generateBubbleSort }