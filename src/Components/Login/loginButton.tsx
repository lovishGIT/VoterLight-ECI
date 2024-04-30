import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <Link to='/login' className="px-4 py-1 text-white bg-[#e77300] rounded-md transition-all hover:bg-[#329203] hover:scale-105">
        Login
    </Link>
  )
}
