/**
 * Returns an attrs object for styled-components that includes a className only in development mode
 * @param className The class name to add in development mode
 * @returns An attrs object for styled-components
 */
export const withDevClassName = (className: string) => () => ({
    ...(process.env.NODE_ENV === "development" && {
        className,
    }),
});

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
