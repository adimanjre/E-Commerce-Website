import Container from "../Layout/Container";
import { Link } from "react-router";

export const BreadCrumb = ({ data }) => {
  return (
    <ul className="flex gap-3 mt-2 text-gray-500">
      {data.map((link) => (
        <li>
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
      <div className="px-3 py-12">
        <h1 className="text-4xl font-bold">Shop</h1>
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
