import loadable from "@loadable/component";
import Layout from "layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "views/About";
import Roadmap from "views/Roadmap";
import Term from "views/Term";

const Home = loadable(() => import("./views/Home"));
const Team = loadable(() => import("./views/Team"));
const Ecosystem = loadable(() => import("./views/Ecosystem"));
const NotFound = loadable(() => import("./views/NotFound"));
const Media = loadable(() => import("./views/Media"));

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/bitneuron-homepage" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/term" element={<Term />} />
        <Route path="/about" element={<About />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/media" element={<Media />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
