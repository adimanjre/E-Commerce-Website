import Container from "../Layout/Container"

const Information = () => {
  return (
    <Container sectionClass="bg-purple-600 text-white">
            <div className="flex justify-between items-center p-3">
                <ul className="flex gap-3 items-center">
                <li>
                  <span></span>
                  <span>mhhasanul@gmail.com</span>
                </li>
                <li>
                  <span></span>
                  <span>(12345)67890</span>
                </li>
              </ul>
              <ul className="flex gap-3 items-center">
                <li>English</li>
                <li>USD</li>
                <li>Login</li>
                <li>Wishlist</li>
                <li>Cart</li>
              </ul>
              </div>
          </Container>
  )
}

export default Information