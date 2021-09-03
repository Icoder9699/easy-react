import React from 'react'

import './MobileCart.scss'

export default function MobileCart({cartItems, setVisible, delItem}) {
	return (
		<div className='cart'>
			<h1 className='cart__title'>
				Cart
				<div className='cart__close' onClick={() => setVisible(false)}>&times;</div>
			</h1>
			{
				cartItems.length > 0 ? cartItems.map((cartItem, index) => {
					return <div key={index} className='cart__item'>
						<div className='cart__item-info'>
							<img src={cartItem.item.imgUrl} alt='img'/>
							<h3>
								{cartItem.item.name}
								<i> {cartItem.item.price}$</i>
								<p>Color: {cartItem.selectedColor}</p>
							</h3>
						</div>
						<button 
							className='cart__item-btn' 
							onClick={() => delItem(index)}
						>
							&times;
						</button>
					</div>
				})
				: <div className="cart__empty">
					Empty :(
				</div>
			}
			
		</div>
	)
}
