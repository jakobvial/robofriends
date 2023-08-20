import {FC} from "react";

type CardProps = {
	name: string;
	email: string;
	id: number;
}

const Card: FC<CardProps> = ({name, email, id}) => {
	return (
			<div className="bg-light-green tc dib br3 pa1 ma1 grow bw2 shadow-5">
				<img src={`https://robohash.org/${id}?size=200x200`} alt="robots"/>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
	);
};

export default Card;