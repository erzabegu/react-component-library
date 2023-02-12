import { FC } from "react";
import { GridItemProps, GridProps } from "./Grid.types";
declare const Grid: FC<GridProps> & {
    Item: FC<GridItemProps>;
};
export default Grid;
