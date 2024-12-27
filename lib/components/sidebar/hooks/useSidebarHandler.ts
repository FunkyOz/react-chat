import { useChatProvider } from "../../../provider";

export const useSidebarHandler = () => {
    const { dispatch } = useChatProvider();

    const handleToggle = () => {
        dispatch({ type: "TOGGLE_SIDEBAR" });
    };

    const handleOpen = () => {
        dispatch({ type: "OPEN_SIDEBAR" });
    };

    const handleClose = () => {
        dispatch({ type: "CLOSE_SIDEBAR" });
    };

    return { handleToggle, handleOpen, handleClose };
};
