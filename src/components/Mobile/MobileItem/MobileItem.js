import React from 'react'
import classNames from 'classnames';

// import image from "public/images/mobiles/s21.jpg";

const colors = ['grey', 'black', 'silver'];

export default function MobileItem({item, items, addToCart}) {
	const [showItem, setShowItem] = React.useState(false);
	const [activeItem, setActiveItem] = React.useState(null);
	const [selectedColor, setSelectedColor] = React.useState(null);

	const onClickHandler = (id) =>{
		setActiveItem(id);
		setShowItem(true)
	}
	
	return (
		<div className="mobile__item" key={item.id}>
		{
			!showItem ? 
			<div>
			<img src={item.imgUrl} alt='mobile-phone'/>
			<h3 className="mobile__item-name">{item.name}</h3>
			<ul className="mobile__item-colors">
				{
					colors.map((color, index) => {
						return <li 
							onClick={() => setSelectedColor(color)}
							key={color} 
							className={classNames({
							"active": color === selectedColor,
							"disable": !item.colors.includes(color)
							})}
						>
							{color}
						</li>
					})
				}
			</ul>
			<h4 className="mobile__item-price">Price: {item.price}$</h4>
			<div className="mobile__item-btns">
				<button 
					className={selectedColor ? "mobile__item-btn btn" : "mobile__item-btn btn disable"}
					onClick={() => addToCart({selectedColor, item})}
				>
					Add
				</button>
				<button 
					className="mobile__item-btn btn" 
					onClick={() => onClickHandler(item.id)}
				>
					Show more
				</button>
			</div>
		</div>
		:
		<div className="mobile__item-content">
			<div className="mobile__item-info">
				{items[activeItem - 1].info}
				{/* {console.log(items[activeItem])} */}
			</div>
			<button 
				className="mobile__item-btn btn" 
				onClick={() => setShowItem(false)}
			>
				Back
			</button>
		</div>
		}
		</div>
	)
}
