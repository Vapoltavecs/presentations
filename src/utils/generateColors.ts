import { generateRandomNum } from './generateRandom';
export const generateColors = () => {
    return `rgb(${generateRandomNum(135)}, ${generateRandomNum(135)}, ${generateRandomNum(135)})`
}