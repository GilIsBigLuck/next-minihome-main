export default function Header() {
  return (
    <header className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20">
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full artistic-blur -z-10 animate-pulse"
        style={{ animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-100 dark:bg-orange-900/20 rounded-full artistic-blur -z-10 animate-pulse"
        style={{ animationDuration: "6s" }}
      ></div>
      <div className="max-w-5xl w-full text-center z-10 space-y-12">
        <h1 className="font-display tracking-tighter leading-none text-primary dark:text-white flex flex-col items-center">
          <span className="text-7xl md:text-[9rem] font-black tracking-tight mb-2">
            mini
          </span>
          <span className="text-4xl md:text-[2rem] font-light tracking-widest opacity-80">
            home.page
          </span>
        </h1>
        <div className="relative w-full h-32 md:h-48 flex items-center justify-center my-8">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-400 dark:via-gray-600 to-transparent absolute"></div>
          {/* <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-2 z-10 flex items-center justify-center shadow-xl">
            <img
              alt="Agency Symbol"
              className="w-full h-full object-cover rounded-full opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALHPNBKuv_R8B-P6R_GINacvM0LALk6EpdrQhWah03J4mJ1n7M-y6dVq1Oa_q4_9WwK6SVXL6_WLvbct5ISWu6YnCvSF0XW_ja4316lkly1AwzVUrjZda9e0IqrNYuSxxIGpziCUkldfJL4jp1gVrdsJIivaRzqDnFeoTfbnC1xZAQSjpKUhWr_XDaIR50tRsQVu4316ChPnqBik9OQPzY1fnVgVb4kygY65c5buu9E6zPbd9HecmXhn-XE60NjZyU7SytuyNr7X6x"
            />
          </div> */}
        </div>
        <div className="space-y-6 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
            작지만 완전한,<br />
            당신만의 웹 공간을 만듭니다.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 leading-7 font-light text-sm md:text-base">
            복잡한 것은 덜어내고 본질만 남긴 미니멀 웹사이트.<br />
            오직 당신만을 위한 디지털 공간을 설계합니다.<br />
            1인 웹 에이전시 mini에서 당신을 소개하세요.
          </p>
        </div>
      </div>
    </header>
  );
}

