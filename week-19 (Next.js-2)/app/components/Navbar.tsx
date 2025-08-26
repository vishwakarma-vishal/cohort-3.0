
export default function Navbar() {
    return(
        <div className="w-full bg-gray-800 flex justify-left items-center gap-12 px-8">
            <h1 className="text-xl font-bold">Next.js</h1>
            <ul className="p-4xl flex flex-wrap sm:flex-nowrap gap-4 my-4 text-sm">
                <li className="cursor-pointer hover:underline duration-200">Home</li>
                <li className="cursor-pointer hover:underline duration-200">Category</li>
                <li className="cursor-pointer hover:underline duration-200">Blog</li>
                <li className="cursor-pointer hover:underline duration-200">Privacy Policy</li>
                <li className="cursor-pointer hover:underline duration-200">Contact Us</li>
            </ul>
        </div>
    );
}