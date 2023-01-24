import Link from "next/link";
function NotFound() {
  return (
    <div className="notFound">
      <h1 className="notFound--404">404</h1>
      <p className="notFound--exist">This Page Not Exist</p>
      <p className="notFound--line">
        Go Back to{" "}
        <Link href="/">
          <span className="notFound--home">Home </span>
        </Link>
        Page
      </p>
    </div>
  );
}

export default NotFound;
