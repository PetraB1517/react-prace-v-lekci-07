import React, {useState} from 'react';

const Seznam = () => {

	const [list, setList] = useState([
		'Alena',
		'Jana',
	]);

	const handleClick = () => {
		setList( [...list, 'Petra'] );
	}

	return (
		<div className="seznam">
			<h3>Seznam</h3>
			<ul>
				{ list.map((name, index) => <li key={index}>{name}</li>) }
			</ul>
			<button onClick={handleClick}>Pridej</button>
		</div>
	)
}

export default Seznam;
