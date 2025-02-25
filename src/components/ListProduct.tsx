import BasePrice from "./BasePrice";
import Button from "./Button";
import DiscountPrice from "./DiscountPrice";
import ImageProduct from "./ImageProduct";
import ProductTitle from "./ProductTitle";
import Star from "./Star";

const ListProduct = () => {
  return (
    <div className="list">
      <div className="list-p">
        <ImageProduct link="/backiee-292979.jpg" />
        <ProductTitle title="Fancy Product" />
        <div className="cangia">
          <DiscountPrice discount="$40.00 - $80.00" />
        </div>
        <Button text="View options" />
      </div>
      <div className="list-p">
        <ImageProduct link="/backiee-292979.jpg" />
        <ProductTitle title="Special Item" />
        <Star />
        <div className="cangia">
          <BasePrice base="$20.00" />
          <DiscountPrice discount="$18.00" />
        </div>
        <Button text="Add to cart" />
      </div>
      <div className="list-p">
        <ImageProduct link="/backiee-292979.jpg" />
        <ProductTitle title="Sale item" />
        <div className="cangia">
          <BasePrice base="$50.00" />
          <DiscountPrice discount="$25.00" />
        </div>
        <Button text="Add to cart" />
      </div>
      <div className="list-p">
        <ImageProduct link="/backiee-292979.jpg" />
        <ProductTitle title="Popular Item " />
        <Star />
        <div className="cangia">
          <DiscountPrice discount="$40.00" />
        </div>
        <Button text="Add to cart" />
      </div>
      <div className="list-p">
        <ImageProduct link="/backiee-292979.jpg" />
        <ProductTitle title="Sale item" />
        <div className="cangia">
          <BasePrice base="$50.00" />
          <DiscountPrice discount="$25.00" />
        </div>
        <Button text="Add to cart" />
      </div>
      <div className="list-p">
        <ImageProduct link="/backiee-292979.jpg" />
        <ProductTitle title="Fancy Product" />
        <div className="cangia">
          <DiscountPrice discount="$40.00 - $80.00" />
        </div>
        <Button text="View options" />
      </div>
      <div className="list-p">
        <ImageProduct link="/backiee-292979.jpg" />
        <ProductTitle title="Special Item" />
        <Star />
        <div className="cangia">
          <BasePrice base="$20.00" />
          <DiscountPrice discount="$18.00" />
        </div>
        <Button text="Add to cart" />
      </div>
      <div className="list-p">
        <ImageProduct link="/backiee-292979.jpg" />
        <ProductTitle title="Popular Item " />
        <Star />
        <div className="cangia">
          <DiscountPrice discount="$40.00" />
        </div>
        <Button text="Add to cart" />
      </div>
    </div>
  );
};
export default ListProduct;
