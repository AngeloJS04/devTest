export const validateAmount = (value: string = "",  formatZone?: string) => {

    if (value === "") return ""
    var formatter = new Intl.NumberFormat(formatZone || 'en-US');

    if (value.includes(".")) {

        let newString = value.replace(/[^0-9., ]/g, '')
        let newString2 = value.replace(/[^0-9., ]/g, '')
        let indexDot = newString.replace(/[^0-9., ]/g, '').indexOf(".")

        let newStringFormat = formatter.format(Number(newString.slice(0, indexDot).replace(/[^0-9 ]/g, ''))) + newString.slice(indexDot)

        newString = newStringFormat
        newString2 = newStringFormat

        let haveDot = false
        for (var i = 0; i < newString.length; i++) {
            if (newString[i] === "." && !haveDot) haveDot = true
            else if (newString[i] === "." && haveDot) newString2 = newString.slice(0, i) + newString.slice(i + 1);
        }
        return newString2
    }
    return formatter.format(Number(value.replace(/[^0-9 ]/g, '')))
}