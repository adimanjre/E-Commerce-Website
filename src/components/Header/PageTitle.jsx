import Container from "../Layout/Container"

const PageTitle = () => {
  return (
    <Container sectionClass={'bg-purple-50'}>
        <div className="px-3 py-12">
            <h1 className="text-4xl font-bold">Shop</h1>
        <ul className="flex gap-3 mt-2">
          <li>Home</li>
          <li>Shop</li>
        </ul>
        </div>
      </Container>
  )
}

export default PageTitle