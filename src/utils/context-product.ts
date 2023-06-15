import {createContext} from "react";

export type ContextProductCountType = {
    contextProductCount: number;
    setContextProductCount: (contextProductCount: number) => void;
}

export const ContextProductCount = createContext<ContextProductCountType>({
    contextProductCount: 0,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setContextProductCount: () => {}
})