import React, {useState} from 'react';

const Komponenta = () => {


/*	const handleClick = () =>{
		console.log('klikity klik')
	}
	return (
		<div className="Komponenta">
			<h3>Komponenta</h3>
			<button onClick={handleClick}>Klikni na me</button>*/

	const [pocet, setPocet] = useState(100);

	const handleClick = () => {
		setPocet(pocet + 1);
	}

	const zvetsiPocet = (oKolik) => {
		// mnoho kodu
		// slozita logika
		// blabla bla
		setPocet(pocet + oKolik);
	}


	return (
		<div className="Komponenta">
			<h3>Komponenta</h3>
			<p>Počet je: {pocet}</p>

			<button onClick={ () => { zvetsiPocet(1) } }>+1</button>
			<button onClick={ () => { zvetsiPocet(5) } }>+5</button>
			<button onClick={ () => { zvetsiPocet(10) }}>+10</button>

			<button onClick={handleClick}>Klikni na mě</button>
		</div>
	)
}

export default Komponenta;
