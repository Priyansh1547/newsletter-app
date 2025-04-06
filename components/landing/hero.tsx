export function Hero() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-linear-145"></div>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <header className="pt-12 sm:pt-16">
              <div>
                <div className="flex justify-between group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
                  >
                    <div className="absolute inset-x-0 top-0 border-t border-black/5"></div>
                    <div className="absolute inset-x-0 top-2 border-t border-black/5"></div>
                    <div className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"></div>
                    <div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"></div>
                  </div>
                  <div className="relative flex gap-6">
                    <div className="py-3 group/item relative">
                      <svg
                        viewBox="0 0 15 15"
                        aria-hidden="true"
                        className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2"
                      >
                        <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 15 15"
                        aria-hidden="true"
                        className="absolute size-[15px] fill-black/10 -top-2 -right-2"
                      >
                        <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 15 15"
                        aria-hidden="true"
                        className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2"
                      >
                        <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 15 15"
                        aria-hidden="true"
                        className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2"
                      >
                        <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                      </svg>
                      <h1 className="text-2xl text-black font-semibold">
                        Stack Mail
                      </h1>
                    </div>
                  </div>
                  <nav className="relative lg:flex">
                    <div className="flex group/item relative">
                      <svg
                        viewBox="0 0 15 15"
                        aria-hidden="true"
                        className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2"
                      >
                        <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 15 15"
                        aria-hidden="true"
                        className="absolute size-[15px] fill-black/10 -top-2 -right-2"
                      >
                        <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 15 15"
                        aria-hidden="true"
                        className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2"
                      >
                        <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 15 15"
                        aria-hidden="true"
                        className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2"
                      >
                        <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                      </svg>
                      <a
                        className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply hover:bg-black/[2.5%]"
                        href="/login"
                      >
                        Login
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </header>
            <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
              <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
                Close every deal
              </h1>
              <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
                Radiant helps you sell more by revealing sensitive information
                about your customers.
              </p>
              <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white hover:bg-gray-800 w-52"
                  href="login"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
