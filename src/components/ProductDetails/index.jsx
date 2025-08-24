import Container from "../Layout/Container";
import { productDetails } from "../../data";
import ProductImageGallery from "./ProductImageGallery";
import ProductDescription from "./ProductDescription";
import Tab from "../UI/Tabs";

const TabDescription = ({ heading, text, moreDetailsHeading, moreDetails }) => {
  return (
    <>
      <section>
        <h5>{heading}</h5>
        <p>{text}</p>
      </section>
      <section>
        <h5>{moreDetailsHeading}</h5>
        <ul>
          {moreDetails.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

const ProductDetails = () => {
  const tagList = productDetails.tabs.map((tab, index) => {
    return {
      tabId: index,
      tabName: tab.label,
      tabPane: (
        <TabDescription
          heading={tab.content.heading}
          text={tab.content.text}
          moreDetailsHeading={tab.content.moreDetailsHeading}
          moreDetails={tab.content.moreDetails}
        />
      ),
    };
  });
  return (
    <Container sectionClass={"py-10"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="grid-1" aria-label="Product Image Gallery">
          <ProductImageGallery images={productDetails.images} />
        </section>
        <section className="grid-1">
          <ProductDescription product={productDetails} />
        </section>
      </div>
      <div>
        <Tab tabList={tagList} />
      </div>
    </Container>
  );
};

export default ProductDetails;
