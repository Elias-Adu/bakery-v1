import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import Products from "./Components/Products";
import { About } from "./Components/About";
import FeaturedProducts from "./Components/featuredProducts";
import { Footer } from "./Components/footer";
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}

export default App;
