function NavBar() {
    return (
        <nav className="flex items-center justify-between py-4 px-8 bg-[#F9F8F6] border-b border-gray-300">
            <a href="/" className="text-3xl  text-brown-600 font-bold">
                hh<span className="text-green-500">.</span>
            </a>
            <div className="hidden md:flex space-x-4">
                <a href="/login" className="px-8 py-2  bg-white border border-black rounded-full text-black">Log in</a>
                <a href="/signup" className="px-8 py-2 bg-black text-white rounded-full hover:bg-gray-600 transition-colors">Sign up</a>
            </div>
            <button className="md:hidden ">Menu</button>
        </nav>
    );
}

export default NavBar;