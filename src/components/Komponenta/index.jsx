import React from 'react';

const Komponenta = () => {

	const handleClick = () =>{
		console.log('klikity klik')
	}
	return (
		<div className="Komponenta">
			<h3>Komponenta</h3>
			<button onClick={handleClick}>Klikni na me</button>
		</div>
	)
}

export default Komponenta;
