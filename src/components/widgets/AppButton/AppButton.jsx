import { Link } from "react-router-dom"

function AppButton({ btnText }) {
  return (
    <div className="pt-3 p-3">
      <Link to="/register" className="w-60 h-16 px-4 py-3 text-center text-white text-lg bg-teal-600 rounded-lg hover:bg-teal-700 ">
        {btnText}
      </Link>
    </div>
  )
}

export default AppButton