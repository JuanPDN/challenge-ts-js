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

export { arrayDiff, toCamelCase }