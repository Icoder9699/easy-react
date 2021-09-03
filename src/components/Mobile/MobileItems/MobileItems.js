import React from 'react';
// import axios from 'axios';

import db from '../../../db/mobiles.json';

import './MobileItems.scss';
import MobileItem from '../MobileItem/MobileItem';
import MobileCart from '../MobileCart/MobileCart';

const arr = [0,2,3,4,5];
console.log(
	arr.splice(1)
);

export default function MobileItems() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [visible, setVisible] = React.useState(false);
	
	React.useEffect( () => {
		// axios.get('https://61227cced446280017054894.mockapi.io/formData')
		// 	.then(res => console.log(res))
		setItems(db)
	},[]);


	const addToCartHandler = (info) => {
		const updatedCartItems = [...cartItems, info]
		setCartItems(updatedCartItems)
	}

	const delCartItemHandler = (id) => {
		// * first method - get by slice 
		if(id === 0){
			console.log("id: ", 0);
			const updatedItems = cartItems.splice(1);
			setCartItems(updatedItems)
		}else{
			const startArr = cartItems.splice(0, id);
			const endArr = cartItems.splice(id, cartItems.length);
			const updatedItems = startArr.concat(endArr);
			setCartItems(updatedItems)
		}

		// * second method
		// let updatedItems = [];
		// for(let i = 0; i <= cartItems.length - 1; i++){
		// 	if(i === id){
		// 		continue
		// 	}
		// 	else{
		// 		updatedItems.push(cartItems[i])
		// 	}
		// }
		// console.log(updatedItems);
		//setCartItems(updatedItems)
	}

	return (
		<div className="mobile-container">
			<button 
				className="mobile__list" 
				onClick={() => setVisible(!visible)}
			>
				List
			</button>
			<div className="mobile__row">
				{
					visible && (
					<div className="mobile__sidebar">
						<MobileCart 
							cartItems={cartItems}
							delItem={delCartItemHandler}
							setVisible={setVisible}
						/>
					</div>
					)
				}
				<div className='mobile__row'>
					{
						items && items.map((item, index) => {
						return <MobileItem 
							key={index}
							item={item} 
							items={items}
							addToCart={addToCartHandler}
						/>
						})
					} 
				</div>
			</div>
		</div>
	)
}
