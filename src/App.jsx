import Navbar from "./components/navbar"
import Body from "./components/body"
import Background from "./components/background"
export default function App() {
  return (
    <>
      <div className="relative w-full h-screen">
      {/* Your existing components or routes here */}
      <Navbar />
      <Body />
    </div>
    </>
  )
}