import React from "react"; // View library: core of React that does the DOM manipulation for us
import ReactDOM from "react-dom/client"; // Connection library between React and the DOM on websites (the type of screen we're rendering to)
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./containers/App";

const root = ReactDOM.createRoot(
		document.getElementById("root") as HTMLElement
);
root.render(
		<React.StrictMode>
			<App/>
		</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
