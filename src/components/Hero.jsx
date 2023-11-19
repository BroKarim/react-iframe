// Penjelasan untuk konten : https://youtu.be/h61uA37aasc?si=sX-3DXcwD3gbpdhR

export default function Hero() {
  return (
    <>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12">
          <a href="#" className="inline-flex justify-between items-center py-1 px-2 mb-7 text-sm text-gray-700 border-black border-2 rounded-full  " role="alert">
            Hello Friends👋
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl ">OpenUI</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Free Open Source Tailwind CSS Components</p>
        </div>
      </section>
    </>
  );
}
