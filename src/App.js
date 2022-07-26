import './App.css';
import EntryField from './components/EntryField';
import { useState } from 'react';
import OutputField from './components/OutputField';

function App() {
	const [color, setColor] = useState({ color: '#00665E' });
	const hexColor = newColor => {
		setColor({ color: newColor });
	};

	return (
		<div className="App" style={{
			backgroundColor: color.color,
		}}>
			<EntryField hexColor={hexColor} colorDefault={color.color} />
			<OutputField hexColor={color.color} />
		</div>
	);
}

export default App;
