import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { MemberPage } from "./components/MemberPage";
import { members } from "./components/MemberList";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/member/:codeName"
          element={
            <MemberWrapper />
          }
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

function MemberWrapper() {
  const { codeName } = useParams();
  const member = members.find(
    (m) => m.codeName.toLowerCase() === codeName?.toLowerCase()
  );

  if (!member) {
    return <div>Member not found</div>;
  }

  return <MemberPage member={member} />;
}

export default App;