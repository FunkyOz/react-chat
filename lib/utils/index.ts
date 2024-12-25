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