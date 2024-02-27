import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from "../../presentation/pages/index";

const AppRouter = () => (
    <HashRouter>
    <Routes>
      {/* Main */}
      <Route path="/" element={<Index/>}/>
        {/* <Route index element={<Navigate replace to="home" />} /> */}
        {/* <Route path="home" element={<Index/>} /> */}

      {/* </Route> */}
       {/* Not found */}
       <Route path="*"> Page not found! 🧐</Route>
    </Routes>
  </HashRouter>

);
export default AppRouter;