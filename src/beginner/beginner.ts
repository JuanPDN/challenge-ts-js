//Exercise 1

const reverseString = (str: string): string => {
    const newStr = Array.from(str)
    const reverse = newStr.reverse().join("");

    return reverse
}

const endsWith = (str: string, ending: string): boolean => {

    return str.endsWith(ending);
}

export {
    reverseString,
    endsWith
}