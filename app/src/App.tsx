import { Button } from "@radix-ui/themes";

export function App() {
  return (
    <main className="flex flex:1 align-items:center justify-content:center">
      <section className="flex flex:row border:1px|solid|gray-80 r:10 bg:fade-96">
        <div className="flex min-w:25rem aspect-ratio:3/4 bg:gray-90">
          <img
            className="r:10 w:100%"
            src="/public/img/ChildrenAtlasBook.jpg"
            alt="Image and cover of the book"
          />
        </div>
        <div className="flex flex:col p:1rem min-w:25rem">
          <div className="flex flex:1 flex:col">
            <p>Name:</p>
            <p>Number Pages:</p>
            <p>Price:</p>
            <p>Units Sold:</p>

            <p>Author:</p>
            <p>Publisher:</p>
            <p>Publication Date:</p>

            <p>Total Sales:</p>
            <p>Total Revenue:</p>
          </div>

          <div className="flex flex:col gap:0.5rem">
            <div className="flex flex:row gap:0.3rem">
              <Button className="flex! flex:1!">
                Prev
              </Button>
              <Button className="flex! flex:1!">
                Buy
              </Button>
              <Button className="flex! flex:1!">
                Next
              </Button>
            </div>

            <div className="flex flex:row gap:0.3rem">
              <Button className="flex! flex:1!">
                Option 0
              </Button>
              <Button className="flex! flex:1!">
                Option 1
              </Button>
              <Button className="flex! flex:1!">
                Option 2
              </Button>
            </div>
          </div>
        </div>


      </section>
    </main>
  );
}

export default App;
