import Container from "../Layout/Container";
import Banner from "./Banner";
import Featured from "./Featured";
import Latest from "./Latest";
import Trending from "./Trending";
import UniqueTrending from "./UniqueTrending";

const Home = () => {
  return (
    <>
      <section>
        <Banner />
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-center my-8">
          Featured Products
        </h2>
        <Container sectionClass={"mb-10"}>
          <Featured />
        </Container>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-center my-8">
          Latest Products
        </h2>
        <Container sectionClass={"mb-10"}>
          <Latest />
        </Container>
      </section>
      <section>
        <UniqueTrending />
      </section>
      <section>
        <Trending />
      </section>
    </>
  );
};

export default Home;
