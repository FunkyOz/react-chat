import { useMemo } from "react";

type ClassNames = {
    base?: string;
    [key: string]: string | undefined;
};

type UseClassNamesProps = {
    className?: string;
    classNames?: ClassNames;
};

function useClassNames({
    className,
    classNames,
}: UseClassNamesProps): ClassNames {
    return useMemo(() => {
        const mergedBase =
            [classNames?.base, className].filter(Boolean).join(" ") ||
            undefined;
        return {
            ...classNames,
            base: mergedBase,
        };
    }, [className, classNames]);
}

export default useClassNames;
