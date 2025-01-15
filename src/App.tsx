import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Index from "./pages/Index";
import { MemberPage } from "./components/MemberPage";
import { members } from "./components/MemberList";
import { Toaster } from "./components/ui/toaster";

function App() {
  const namelessMember = members.find(m => m.codeName === "NameLess");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MemberPage member={namelessMember!} />} />
        <Route path="/members" element={<Index />} />
        <Route
          path="/member/:codeName"
          element={<MemberWrapper />}
        />
      </Routes>
      <Toaster />
      <div className="fixed bottom-4 left-4 z-50">
        <Index />
      </div>
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