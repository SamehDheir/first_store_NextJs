import Image from "next/image";
import Styles from "./../styles/Product.module.css";
import Link from "next/link";

const Product = ({ product }) => {
  const { title, image, price, id } = product;
  return (
    <div className={Styles.product}>
      <Image src={image} width={200} height={200} alt="Image not found" />
      <br />
      <br />
      <div>
        <h2>{title}</h2>
        <br />
        <h3 className={Styles.price}>${price}</h3>
        <br/>
        <button className={Styles.read_more}>
          <Link href={`/products/${id}`}>Read More</Link>
        </button>
      </div>
    </div>
  );
};

export default Product;
