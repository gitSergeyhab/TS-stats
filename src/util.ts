export const parseDate = (date: string): Date => {
    const dmy = date.split('/').map(str => +str);
    return new Date(dmy[2], dmy[1] - 1, dmy[0])
}