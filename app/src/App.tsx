import { useMemo, useState } from "react";
import { Button, Separator } from "@radix-ui/themes";
import Stories from "@/stories.json" with {type: 'json'}

import * as History from "@/components/history"

export function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const story = useMemo(() => Stories[currentIndex], [currentIndex])

  const nextStory = () => {
    if (currentIndex === Stories.length - 1) {
      setCurrentIndex(0)
    }
    setCurrentIndex(prev => prev + 1)
  }

  const prevStory = () => {
    if (currentIndex === 0) {
      setCurrentIndex(Stories.length - 1)
    }
    setCurrentIndex(prev => prev - 1)
  }

  if (!story) return null;

  return (
    <main className="flex flex:1 align-items:center justify-content:center bg:gray-90">
      <section className="flex flex:row border:1px|solid|gray-80 r:10 bg:fade-96 box-shadow:0|4px|6px|-1px|rgb(0|0|0/0.1),0|2px|4px|-2px|rgb(0|0|0/0.1)">
        <History.Root model={story}>
          <History.Image />
          <History.Section>
            <History.Container>
              <History.Name />
              <History.NumberPages />
              <History.Price />
              <History.UnitsSold />

              <Separator my="4" size="4" />

              <History.Author />
              <History.Publisher />
              <History.PublicationDate />

              <Separator my="4" size="4" />

              <History.TotalSales />
              <History.TotalRevenuew/>
            </History.Container>

            <Separator my="4" size="4" />

            <div className="flex flex:col gap:0.5rem">
              <div className="flex flex:row gap:0.3rem">
                <Button className="flex! flex:1!" onClick={prevStory}>
                  Prev
                </Button>
                <Button className="flex! flex:1!">
                  Buy
                </Button>
                <Button className="flex! flex:1!" onClick={nextStory}>
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
          </History.Section>
        </History.Root>
      </section>
    </main>
  );
}

export default App;
