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

export { arrayDiff, toCamelCase, pigIt, domainName, generateHashtag }