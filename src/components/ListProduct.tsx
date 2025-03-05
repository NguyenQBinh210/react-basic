import { useEffect, useState } from "react";
import { ProductElement} from "../types/product";
import data from "../data.json";

const ListProduct = () => {
  const [products, setProducts] = useState<ProductElement[]>([]);

  useEffect(() => {
    setProducts({data});
  }, []);

  return (
    <div className="list">
      {products.length === 0 ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="list-item">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Giá: ${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ListProduct;
