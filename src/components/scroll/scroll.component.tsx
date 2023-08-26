import React, {FC, ReactNode} from "react";
import {ScrollContainer} from "./scroll.styles";

interface ScrollProps {
	children: ReactNode;
}

const Scroll: FC<ScrollProps> = ({children}) => (
		<ScrollContainer>
			{children}
		</ScrollContainer>
);

export default Scroll;