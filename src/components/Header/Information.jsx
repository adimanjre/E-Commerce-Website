import Container from "../Layout/Container";
import { Cart, Email, Heart, Phone, User } from "../Svg/icon";
import { Link } from "react-router";

export const ContactInfo = ({ icon, children }) => {
  return (
    <li className="flex gap-2 items-center">
      <span>{icon}</span>
      <span>{children}</span>
    </li>
  );
};

export const InfoLink = ({ url, icon, text }) => {
  return (
    <Link className="flex gap-2 items-center cursor-pointer" to={url}>
      <span>{text}</span>
      <span>{icon}</span>
    </Link>
  );
};

const Information = () => {
  return (
    <Container sectionClass="bg-purple-600 text-white">
      <div className="flex justify-between items-center p-3">
        <ul className="flex gap-5 items-center">
          <ContactInfo icon={<Email />}>
            <a href="mailto:mhhasanul@gmail.com">mhhasanul@gmail.com</a>
          </ContactInfo>
          <ContactInfo icon={<Phone />}>
            <a href="phoneto:mhhasanul@gmail.com">(12345)67890</a>
          </ContactInfo>
        </ul>
        <ul className="flex gap-5 items-center">
          <li>
            <select className="cursor-pointer">
              <option className="text-black">English</option>
              <option className="text-black">Hindi</option>
              <option className="text-black">Marathi</option>
            </select>
          </li>
          <li>
            <select className="cursor-pointer">
              <option className="text-black">USD</option>
              <option className="text-black">INR</option>
              <option className="text-black">JBP</option>
            </select>
          </li>
          <li>
            <InfoLink text={"Login"} url={"/login"} icon={<User />} />
          </li>
          <li>
            <InfoLink text={"Wishlist"} url={"/wishlist"} icon={<Heart />} />
          </li>
          <li>
            <InfoLink url={"/cart"} icon={<Cart />} />
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Information;
