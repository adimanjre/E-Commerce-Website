import Container from "../Layout/Container";
import { Link } from "react-router";

export const BreadCrumb = ({ data }) => {
  return (
    <ul className="flex gap-3 mt-1 text-gray-500">
      {data.map((link) => (
        <li key={link.name}>
          {link.isActive ? (
            <span>{link.name}</span>
          ) : (
            <>
              <Link className="text-purple-500" to={link.link}>
                {link.name}
              </Link>
              <span className="ml-3">&gt;</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

const PageTitle = () => {
  return (
    <Container sectionClass={"bg-purple-50"}>
      <div className="py-5">
        <h1 className="text-3xl font-bold">Shop</h1>
        <BreadCrumb
          data={[
            {
              name: "Home",
              link: "/",
              isActive: false,
            },
            {
              name: "Shop",
              isActive: true,
            },
          ]}
        />
      </div>
    </Container>
  );
};

export default PageTitle;
