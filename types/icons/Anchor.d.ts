import React, { FC } from "react";
interface AnchorProps extends React.HTMLAttributes<SVGElement> {
    type?: "line" | "solid" | "thin-line";
    size?: number;
}
declare const Anchor: FC<AnchorProps>;
export default Anchor;
