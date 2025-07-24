/* eslint-disable react/prop-types */
import Link from "next/link";

const Footer_li = (props) => {
  return (
    <>
      <li>
        <Link
          className="text-decoration-none footer-liii " // Changed class name
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          href={props.path}
        >
          <span className="fs-3 fw-bold">{props.name}</span>
        </Link>
      </li>
    </>
  );
};

export default Footer_li;
