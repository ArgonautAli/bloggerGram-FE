import { Route, Routes } from "react-router-dom"
import MainPage from "../../pages/mainPage/MainPage"

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default AppRoutes
