import Link from "next/link";

const pageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h1>Sorry, Page Not Found 🥺</h1>
      <br />
      <button className="backBtn">
        <Link href={'/'}>Home Page</Link>
      </button>
    </div>
  );
};

export default pageNotFound;
