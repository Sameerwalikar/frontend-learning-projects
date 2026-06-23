import React from "react"
export default function App(){
  const [myFavoriteThing,setMyFavoriteThing]=React.useState([])
  const allFavThings=["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThing.map(thing => <p key={thing}>{thing}</p>)
  function addFavoriteThing(){
    setMyFavoriteThing(
      prev=>[...prev,allFavThings[prev.length]]
    )
  }
  return (
        <main>
            <button onClick={addFavoriteThing}>Add item</button>
            <section aria-live="polite">
                {thingsElements}
            </section>
        </main>
    )

}