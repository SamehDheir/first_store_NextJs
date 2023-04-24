import Image from "next/image";
import Style from "./../../styles/singleProduct.module.css";
import Head from "next/head";

const singleProduct = ({ product }) => {
  const { title, image, price, description, category, rating } = product;
  return (
    <div className={Style.detailsProduct + " container"}>
      <Head>
        <title>{title}</title>
      </Head>
      <br />

      <Image src={image} width={300} height={300} alt="Image not found" />
      <div>
        <h3>
          <span>Title:</span> {title}
        </h3>
        <hr />

        <p>
          <span>description:</span> {description}
        </p>
        <hr />

        <h2>
          <span>price:</span> ${price}
        </h2>
        <hr />

        <h3>
          <span>Category:</span> {category}
        </h3>
        <hr />

        <h3>
          <span>Count:</span> {rating.count}
        </h3>
        <hr />

        <h3>
          <span>Rate:</span> {rating.rate}
        </h3>
      </div>
    </div>
  );
};

export default singleProduct;

export async function getStaticPaths() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  const paths = products.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch("https://fakestoreapi.com/products/" + id);
  const product = await req.json();
  return {
    props: { product },
  };
}
