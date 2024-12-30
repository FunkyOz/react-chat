/**
 * Rounds a number to the nearest multiple of a given decimal value
 * @param num The number to round
 * @param multiple The decimal multiple to round to
 * @returns The rounded number
 */
export const mRound = (num: number, multiple: number): number => {
    if (multiple === 0) {
        return num;
    }
    return Math.round(num / multiple) * multiple;
};
