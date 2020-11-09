
type RequiredFieldType = {
    value: string
    length: number
}



export const required = (value: RequiredFieldType) => {
    if(value) return undefined;
    return 'Field is required'
}



export const maxLengthCreator = (maxLength: number) => (value: RequiredFieldType) => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
}