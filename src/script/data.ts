function generateRandomArray(length: number) {

    let randomArray: number[] = [];
    for(let i = 1; i <=                                                                                                                                                                                                                                                                                           length; i++) {
        randomArray.push(i);
    }

    for(let i = 0; i < length * 2; i++) {
        const index1 = Math.floor(Math.random() * length);
        const index2 = Math.floor(Math.random() * length);

        const num1 = randomArray[index1];
        const num2 = randomArray[index2];

        randomArray[index1] = num2;
        randomArray[index2] = num1;
    }

    return randomArray;
}

export {generateRandomArray}