import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Users from "./pages/Users.jsx";

function App() {
  return (
    <main className="relative min-h-screen w-full flex flex-col ">
      <Navbar />
      <section className="py-4 px-8 lg:px-[2rem] xl:px-[4rem] 2xl:px-[8rem]">
        <Routes>
          <Route index element={<Users />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
