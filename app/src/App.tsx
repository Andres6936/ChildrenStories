export function App() {
  return (
    <main className="flex flex:1 align-items:center justify-content:center">
      <section className="flex flex:row border:1px|solid|gray-80 r:10">
        <img
          className="r:10"
          src="/public/img/ChildrenAtlasBook.jpg"
          alt="Image and cover of the book"
        />
        <div className="flex flex:col p:1rem">
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

          <div>

          </div>
        </div>


      </section>
    </main>
  );
}

export default App;
