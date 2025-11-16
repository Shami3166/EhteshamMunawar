import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}

export default App;
