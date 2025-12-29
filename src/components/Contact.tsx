"use client";

export default function Contact() {
  return (
    <section className="py-32 px-6 bg-white dark:bg-[#111]" id="contact">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <span className="material-symbols-outlined text-4xl mb-4 text-gray-800 dark:text-gray-200">
            mail
          </span>
          <h2 className="text-3xl font-bold mb-4">Start Your Project</h2>
          <p className="text-gray-500 dark:text-gray-400 font-light">
            당신의 아이디어를 들려주세요. <br />
            MINI home이 당신만의 웹사이트를 현실로 만들어드립니다.
          </p>
        </div>
        <form className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative">
              <input
                className="peer w-full border-0 border-b border-gray-300 dark:border-gray-700 bg-transparent py-2.5 text-gray-900 dark:text-white focus:border-black dark:focus:border-white focus:ring-0 placeholder-transparent transition-colors"
                id="name"
                placeholder="Name"
                type="text"
              />
              <label
                className="absolute left-0 -top-3.5 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black dark:peer-focus:text-white"
                htmlFor="name"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                className="peer w-full border-0 border-b border-gray-300 dark:border-gray-700 bg-transparent py-2.5 text-gray-900 dark:text-white focus:border-black dark:focus:border-white focus:ring-0 placeholder-transparent transition-colors"
                id="email"
                placeholder="Email"
                type="email"
              />
              <label
                className="absolute left-0 -top-3.5 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black dark:peer-focus:text-white"
                htmlFor="email"
              >
                Email
              </label>
            </div>
          </div>
          <div className="relative">
            <select
              className="peer w-full border-0 border-b border-gray-300 dark:border-gray-700 bg-transparent py-2.5 text-gray-900 dark:text-white focus:border-black dark:focus:border-white focus:ring-0 transition-colors appearance-none"
              id="type"
              defaultValue=""
            >
              <option className="bg-white dark:bg-gray-800" disabled value="">
                관심있는 템플릿 혹은 서비스 선택
              </option>
              <option className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" value="template">
                디자인 템플릿 구매
              </option>
              <option className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" value="custom">
                맞춤형 웹사이트 제작
              </option>
              <option className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" value="other">
                기타 문의
              </option>
            </select>
            <label
              className="absolute left-0 -top-3.5 text-sm text-gray-500 dark:text-gray-400"
              htmlFor="type"
            >
              Inquiry Type
            </label>
          </div>
          <div className="relative">
            <textarea
              className="peer w-full border-0 border-b border-gray-300 dark:border-gray-700 bg-transparent py-2.5 text-gray-900 dark:text-white focus:border-black dark:focus:border-white focus:ring-0 placeholder-transparent transition-colors resize-none"
              id="message"
              placeholder="Message"
              rows={4}
            ></textarea>
            <label
              className="absolute left-0 -top-3.5 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black dark:peer-focus:text-white"
              htmlFor="message"
            >
              Message
            </label>
          </div>
          <div className="text-center pt-8">
            <button
              className="group relative px-12 py-4 bg-primary dark:bg-white text-white dark:text-black rounded-full overflow-hidden transition-all hover:shadow-lg"
              type="button"
            >
              <div className="absolute inset-0 w-0 bg-gray-700 dark:bg-gray-200 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative font-medium tracking-widest text-sm flex items-center gap-2">
                SEND MESSAGE{" "}
                <span className="material-symbols-outlined text-sm">send</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

