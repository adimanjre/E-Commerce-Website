
import Container from '../Layout/Container'

const Navigation = () => {
  return (
    <Container >
        <nav className="flex justify-between items-center p-3">
          <div className="flex gap-5 items-center">
            <div className="text-4xl font-semibold">Hekto</div>
          <ul className="flex gap-3 items-center">
            <li>Home</li>
            <li>Pages</li>
            <li>Producs</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
          </div>
          <form>
            <input type="search" />
            <button>Search</button>
          </form>
        </nav>
      </Container>
  )
}

export default Navigation