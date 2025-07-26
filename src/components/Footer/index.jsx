import { Link } from "react-router";
import Container from "../Layout/Container";
import Button from "../UI/Button";
import Input from "../UI/Input";

const footerLinks = [
  {
    title: "Catagories",
    links: [
      "Laptops & Computers",
      "Cameras & Photography",
      "Smart Phones & Tablets",
      "Video Games & Consoles",
      "Waterproof Headphones",
    ],
  },
  {
    title: "Customer Care",
    links: [
      "My Account",
      "Discount",
      "Returns",
      "Orders History",
      "Order Tracking",
    ],
  },
  {
    title: "Pages",
    links: [
      "Blog",
      "Browse the Shop",
      "Category",
      "Pre-Built Pages",
      "Visual Composer Elements",
      "WooCommerce Pages",
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <Container sectionClass="bg-violet-100 py-10">
        <div className="flex gap-10">
          <div className="space-y-5">
            <div className="text-4xl font-semibold">Hekto</div>
            <form className="space-x-3">
              <Input type={"text"} placeholder={"Enter Email Address"} />
              <Button text={"Sign Up"} />
            </form>
            <section className="text-gray-500">
              <p>Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </section>
          </div>
          <div className="flex gap-10">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <p className="font-medium text-lg mb-3">{group.title}</p>
                <ul className="space-y-2 text-gray-500">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link className="hover:text-purple-500">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
