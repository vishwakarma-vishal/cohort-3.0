
export default function SignIn() {
    return (
        <div className="h-[90vh] w-full flex justify-center items-center">
            <div className="w-[400px] rounded p-6 bg-gray-700 text-gray-400">
                <h1 className="text-2xl font-bold text-center">Sign In</h1>
                <form className="flex flex-col gap-3">
                    <div>
                        <label htmlFor="email">Email</label><br></br>
                        <input name="email" type="text" placeholder="enter your name.." className="mt-1 border outline-none w-full px-4 py-2 rounded-full"></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br></br>
                        <input name="password" type="text" placeholder="enter your password.." className="mt-1 border outline-none w-full px-4 py-2 rounded-full"></input>
                    </div>

                    <button className="my-2 bg-gray-900 w-full rounded-full py-2 cursor-pointer">Sing In</button>
                </form>
            </div>
        </div>
    )
}