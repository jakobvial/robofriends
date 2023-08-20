import {ChangeEvent} from "react";

type SearchBoxProps = {
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const SearchBox = ({onChangeHandler, value}: SearchBoxProps) => (
		<div className="pa2">
			<input
					className="pa3 ba b--green bg-lightest-blue br4"
					type="search"
					placeholder="search robots"
					onChange={onChangeHandler}
					value={value}
			/>
		</div>
);

export default SearchBox;