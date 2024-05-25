import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './FilteredProducts.sass';

import CardProduct from './CardProduct';

function FilteredProducts() {
	const products = useSelector((state) => state.products.filteredProducts);

	const { type } = useParams();

	return (
		<div className="productsContainer">
			<h1 className="productsContainer__title">{type}</h1>
			<div className="productsContainer__group">
				{products
					.filter((item) => item.type === type)
					.map((item, index) => {
						return (
							<CardProduct
								key={index}
								id={item.id}
								name={item.name}
								price={item.price}
								colors={item.colors}
								img={item.img}
							/>
						);
					})}
			</div>
		</div>
	);
}

export default FilteredProducts;
