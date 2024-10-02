//Exercise 1

const arrayDiff = (a: number[], b: number[]): number[] => {
    const newArray = a.filter(element => !b.includes(element))

    return newArray
}

//Exercise 2

const toCamelCase = (str: string): string => {
    const camelCase = str.replace(/[-_](.)/g, (_, char) => char.toUpperCase())

    return camelCase
}

//Exercise 3

const pigIt = (a: string): string => {
    const newString = a.replace(/\b(\w)(\w*)/g, '$2$1ay')

    return newString
}

//Exercise 4

const domainName = (url: string): string => {
    const domain = url.match(/(?:https?:\/\/)?(www\.)?([^\.]+)/)

    return domain ? domain[2] : ""
}

//Exercise 5

const generateHashtag = (str: string): string | boolean => {
    const newString =
        str.replace(/\b\w/g, (char) => char.toUpperCase())
            .replace(/\s/g, '')

    return (newString.length === 0) ? false : (newString.length >= 140) ? false : `#${newString}`
}

//Exercise 6

const countLetters = (str: string): { [keys: string]: number } => {
    const letters: { [keys: string]: number } = {}
    for (const char of str) {
        letters[char] = (letters[char] || 0) + 1
    }

    return letters;
}

//Exercise 7

const alphabetPosition = (text: string): string => {
    const newText = text.toLowerCase()
        .replace(/[^a-z]/g, '')
        .replace(/[a-z]/g, (match) => {
            const newChar = (match.charCodeAt(0) - 96)
            return `${newChar} `
        })
    return newText.trim();
}

export {
    arrayDiff,
    toCamelCase,
    pigIt,
    domainName,
    generateHashtag,
    countLetters,
    alphabetPosition
}
