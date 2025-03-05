import { ProductElement } from "../types/product";

interface ListProductProps {
  products: ProductElement[];
}

const ListProduct = ({ products }: ListProductProps) => {
  return (
    <div className="list">
      {products.map((product) => (
        <div key={product.id} className="list-item">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Giá: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
