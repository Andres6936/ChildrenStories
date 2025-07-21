import { Button, Separator } from "@radix-ui/themes";

export function App() {
  return (
    <main className="flex flex:1 align-items:center justify-content:center bg:gray-90">
      <section className="flex flex:row border:1px|solid|gray-80 r:10 bg:fade-96 box-shadow:0|4px|6px|-1px|rgb(0|0|0/0.1),0|2px|4px|-2px|rgb(0|0|0/0.1)">
        <div className="flex min-w:25rem aspect-ratio:3/4">
          <img
            className="r:10 w:100%"
            src="/public/img/ChildrenAtlasBook.jpg"
            alt="Image and cover of the book"
          />
        </div>
        <div className="flex flex:col p:1rem min-w:25rem">
          <div className="flex flex:1 flex:col gap:0.5rem">
            <Line
              label="Name"
              value="Children Atlas Book"
            />
            <Line
              label="Number Pages"
              value="21"
            />
            <Line
              label="Price"
              value="$123"
            />
            <Line
              label="Units Sold"
              value="3"
            />

            <Separator my="4" size="4" />

            <Line
              label="Author"
              value="The Martir"
            />
            <Line
              label="Publisher"
              value="National Library"
            />
            <Line
              label="Publication Date"
              value="2025-05-17"
            />

            <Separator my="4" size="4" />

            <Line
              label="Total Sales"
              value="$1,451"
            />
            <Line
              label="Total Revenue"
              value="$341"
            />
          </div>

          <Separator my="4" size="4" />

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

type LineProps = {
  label: string
  value: string
}

function Line(props: LineProps) {
  return (
    <div className="flex align-items:center">
      <p className="flex flex:1">{props.label}:</p>
      <p className="flex flex:1">{props.value}</p>
    </div>
  )
}

export default App;
