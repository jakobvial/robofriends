import {FC} from "react";
import Card from "../card/card.component";
import {CardListContainer} from "./cardList.styles";

interface Robot {
	id: number;
	name: string;
	email: string;
}

interface CardListProps {
	robots: Robot[];
}

const CardList: FC<CardListProps> = ({robots}) => {
	return (
			<CardListContainer>
				{robots.map(({id, name, email}) => (
						<Card
								id={id}
								name={name}
								email={email}
								key={id}
						/>
				))}
			</CardListContainer>
	);
};

export default CardList;
