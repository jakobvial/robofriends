import {ChangeEvent, FC} from "react";

type SearchBoxProps = {
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const SearchBox: FC<SearchBoxProps> = ({onChangeHandler, value}) => (
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