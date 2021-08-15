
import "./categories.scss";
export default function Categories({activeItem, setActiveItem, categories}) {


    return (
        <div className="categories">
            {
                categories.map((category, index) => (
                    <button 
                        key={index}
                        className={`btn-category ${activeItem === category && "active"}`}
                        onClick={() => setActiveItem(category)}
                    >
                        {category}
                    </button>
                ))
            }        
        </div>
    )
}
