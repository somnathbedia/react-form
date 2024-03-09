import Image from "next/image";

export default function Home() {
  return (
    <main className=" h-screen flex items-center justify-center">
      <form className="bg-white flex rounded-lg w-1/2 ">
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-3xl pb-2">Let's get started :</h1>
          <p className="text-lg text-gray-500">
            Join Our E-learning platform today and unlock over 100+ courses
          </p>

          <div clasName="mt-6">
            <div clasName="pb-4">
              <label className="block text-sm pb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border-2 border-gray-500 rounded-md w-1/2"
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
            </div>

            <div clasName="pb-4">
              <label className="block text-sm pb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-gray-500 rounded-md w-1/2"
                type="email"
                name="name"
                placeholder="Enter Your Email"
              />
            </div>

            <div clasName="pb-4">
              <label className="block text-sm pb-2" htmlFor="country">
                Country
              </label>
              <select className="border-2 border-gray-500 rounded-md w-1/2">
                <option>India</option>
                <option>India</option>
                <option>India</option>
                <option>India</option>
                <option>India</option>
              </select>
            </div>

            <div clasName="pb-4 flex items-center">
              <label className="block text-sm pb-2" htmlFor="terms">
                Terms of services
              </label>
              <div className="flex items-center">
                <input
                  className="border-2 border-gray-500 rounded-md"
                  type="checkbox"
                  name="terms"
                  value="checked"
                />
                <p>Hello Accept this form</p>
              </div>
            </div>

            <button type="submit" className="bg-teal-500 text-sm text-white py-3 w-full">Start Learning Today</button>
          </div>
        </div>
      </form>
    </main>
  );
}
