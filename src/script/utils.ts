function isSorted(source: number[]){
    for(let i = 0; i < source.length - 1; i++) {
        if(source[i] > source[i + 1]) return false;
    }

    return true;
}

export {isSorted};