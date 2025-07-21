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
          <div>
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

          <div className="flex flex:col gap:1rem">
            <div className="flex flex:row gap:0.3rem">
              <Button className="">
                Prev
              </Button>
              <Button className="">
                Buy
              </Button>
              <Button className="">
                Next
              </Button>
            </div>

            <div className="flex flex:row gap:0.3rem">
              <Button>
                Option 0
              </Button>
              <Button>
                Option 1
              </Button>
              <Button>
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
