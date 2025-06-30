import { Outlet } from "react-router";
import Header from "../components/Header";

function UserLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="relative flex justify-between gap-2 bg-[#f2f4f7] border pt-14">
        <Outlet />
      </div>
    </div>
  )
}
export default UserLayout