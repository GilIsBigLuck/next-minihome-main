export default function Gallery() {
  const projects = [
    {
      title: "Artist Portfolio",
      category: "Personal",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDNjWAdBsAw-nmxge_dbgWVbbrUQbsZvPkuNfrLYnpv_y2WnQ0W0BpASjFXgZ4SMfp8m4YBjgkSEV5Ow-OsqTLLlXjdWw7eMu6m32pDbBTehZ7Pf0kQ7yuVdANOn7O4ioHhbcFLiYdhviCkC1dmmZNCo0nzOcLXA2KXljzCE4IBrVgnDaP7zDnM9XwDRjvclhABBqU2YCTn5YbTtglpYiIQ9s59fRUYuxUTpfdJGdGii4VswQRq_BiemCrnH6sJvo2McLoqmuwGlN0H",
    },
    {
      title: "Eco Brand Story",
      category: "Business",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBLtzrNErhsonEt9WzSFTCBTwUDHktPumbdTyHZ9pwBKTLhRMss6ktL4kB7nsqe7QmJv6MgSZJjQyDyJ_ARvpNO4t183fbWRr92OivT1NwgwTQF-bx07fVkRvDrvlQGs6eQXdwzOZst7AaMM5ixyakrBEPBkbSwCkz4UHZhYl_EdzJZysc703FPo0psUpzQq0N8n9p2akPHtIQXpe4j-3Gq_Fv1qDDSal50BR-G8npNeeFJKhWcDClkefQCICgaY9EFpQ9jkVr1Ii7X",
      offset: true,
    },
    {
      title: "Minimal Blog",
      category: "Archive",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAEfiPrI4NwU9wsgo5ehqSVngC6Uh7-UyxXxWsmkhf37GuA82CWnhoqKMHw53w8ZodsLW6SQWja9SEr1gUaL0Mjvf63E5Rd9aJXrXK3EpZDrq6m3VBRN43RppWozf2tC-04OLTAe-x-Eo5LZPW_WZb7eDOM9DMmlwnfva_fcE4i0LaJ2cnbo2lyliDIk2R4rj-H8EVK3jKHWJT6Tezs6Y2ejLaL4bm2eqYPjxDwe2b2B1Oc_gkAHG9Kh0UaVT-Eb_HHwbLM-vp8QCsD",
    },
    {
      title: "Event Landing",
      category: "Promotion",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCH6sBHogOQFyS1_wfnCgCwuS7B_Jasc84jGMjPFcv8dcCxBfXhA5EBbN-WfkPK5lNH01t7XWaA-yBUzyxhbIJ0VDf21gYIB9B3cYljGK6_d-0-a8Axlw-0FWtvpV1YFvsY-gQ1vyKlibYjfk9IYPVByJb94dlfF6L6Sm1DpK8dCW4E8kSk4pXhtoWNbqLQj7I2FYGq0o9bgi2pHrJSJQrwIbYb_Kn2ha0vm8Mfu5AsWC-2sFYz7ScQx_5px4t2mX2vNV5G_87S3JDf",
      offset: true,
    },
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#141414]" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-2 block">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Personalized Websites
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md text-right md:text-left">
            다양한 라이프스타일과 취향을 반영한 웹사이트 작업물입니다.<br />
            각기 다른 개성을 담은 미니홈의 포트폴리오를 확인해보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer ${project.offset ? "md:mt-16" : ""}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="absolute top-0 w-full h-6 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center gap-1.5 px-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h3 className="font-bold text-lg">
                  {project.title}{" "}
                  <span className="font-normal text-gray-400 text-sm ml-2">
                    / {project.category}
                  </span>
                </h3>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                  arrow_outward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

