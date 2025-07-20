import Container from "../Layout/Container";

export default function Footer() {
  return (
    <footer>
      <Container sectionClass="bg-violet-100">
        <div className="flex gap-5">
          <div>
            <div className="text-4xl font-semibold">Hekto</div>
            <form>
              <input type="text" />
              <button>Sign Up</button>
              <section>
                <p>Contact Info</p>
                <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
              </section>
            </form>
          </div>
          <div>
            <div>
              <p>Catagories</p>
              <ul>
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
