function titleToNumber(columnTitle: string): number {
    let output: number = 0;
    for (let i: number = 0; i < columnTitle.length; i++) {
        output = (output * 26) + columnTitle.charCodeAt(i) - 64;
    }
    return output;
};