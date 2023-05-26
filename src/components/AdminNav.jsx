import { Link } from "react-router-dom"

const AdminNav = () => {
  return (
    <nav className="flex gap-4 font-serif">
        <Link
            to="/admin/perfil"
            className="font-black uppercase text-white indigo-900 text-2xl bg-teal-600 rounded-full py-2 px-6"
        >Perfil</Link>

        <Link
            to="/admin/cambiar-password"
            className="font-black uppercase text-white text-2xl bg-teal-600 rounded-full py-2 px-6"
        >Cambiar Password</Link>
    </nav>
  )
}

export default AdminNav