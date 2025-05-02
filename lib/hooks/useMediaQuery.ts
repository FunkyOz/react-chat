import React from "react";

export function useMediaQuery(
    query: string,
    serverFallback?: boolean
): boolean {
    const getServerSnapshot = () =>
        undefined !== serverFallback ? serverFallback : false;

    const [getSnapshot, subscribe] = React.useMemo(() => {
        const mediaQueryList = window.matchMedia(query);

        return [
            () => mediaQueryList.matches,
            (notify: () => void) => {
                mediaQueryList.addEventListener("change", notify);
                return () => {
                    mediaQueryList.removeEventListener("change", notify);
                };
            },
        ];
    }, [query]);

    return React.useSyncExternalStore(
        subscribe,
        typeof window !== "undefined" ? getSnapshot : getServerSnapshot,
        getServerSnapshot
    );
}
