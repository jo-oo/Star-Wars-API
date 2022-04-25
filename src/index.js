import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom' //importerar komponenten Browser router
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter> {/* omsluter vår app med Browser Router */}
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
