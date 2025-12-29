export default function Templates() {
  const templates = [
    {
      name: "Type A. Clean",
      description: "정보 전달에 집중한 깔끔한 레이아웃",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA8hZtAeKEeHF9bpXo1AufStdK1Z3vp88Ys2GXaCRyT6OvXJQygZeN9-jES09vX6st9xzef8N4_S4GgnYq4kwsTHlmOyxzWbzR67nZngt1nc8Z8PsLUdPg7znPzZhqnVkyjF341jJnovNeNA9tk3YQyTBzTGgHFkU6sORnW4B2melXip4iXSRbNHPehxH6soMjgKkP_KHndMpjdgO5wWtHGTTB8QakEo1JWQviOiungvURwS3kHJYAR9v1FvL4BdUhUzKFkJNVgGdhP",
      badge: "BEST",
      hoverEffect: "scale-110",
    },
    {
      name: "Type B. Soft",
      description: "부드러운 곡선과 감성적인 무드",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA6GRRm0DenRNXEhQxe3AUiV8TctTMVb8k7IZI2uCXAKmvxmD2rFLsGVeSZK2t2nBm8sss6Kp9oxPeGwGTDNX4uSuol0Kkh0jxQPPTkUqc3JtXyVD5InF9bsVtLvNI7hZJf5qGQ7t7YaJ3q9eUzULTa96Wk1HRqau-0g_eUQawagf9JJbzkBc5B-r8YV2n81fk6SyZlqIjMAvFOuOS0irnQ7dkIp25tqXFycnXCE5aqlPV_ZT8uM7XKerVYniUqt0rCQna4wtsoNKmq",
      hoverEffect: "rotate-6",
    },
    {
      name: "Type C. Creative",
      description: "독특한 인터랙션과 과감한 배치",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDWChq6Ig2ximyTVJgRyQIpgc1D3n47fByYAkO4DOyLKvUaOvU7H_ACAaT6jRxEMc87S_5pUbfR62QBHipm_qThO6wMurioc7SWGnX6rcctqRahVo8waxq58XJgtC99jSiQKvqzGnrUm-IFlA8kiwwWUtRlFxqFVivwhtor5q_Cq_lg0LGjbXMtKdgj18PI9jUNMQO4mSRQaRQga1XDzIBuvXaedgwXcdAnCsoAhnZH6Mb3M5ncrEei0UqwIM1J2Aava0wF3-YWvJMu",
      hoverEffect: "-rotate-12",
    },
    {
      name: "Type D. Bold",
      description: "강렬한 색감과 타이포그래피",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD4ox8Xj-dRQg_bWWWBdIhV7f3YYUoowq0wf26uUhTWAP6rH9fz3rFUg1pCPFKiB_7cgi2nQibG2VlHvftzxR4oWeJrWGv9ClIfhUCVjNtN9MGnh1sk4i2P67q0upmA0V47K_knk1fcrJdeyqDK7XYF42Z3_bRcsWGKqF2K462ju187R7LhSiA-rqf8DCZIXNdNBobIc436OuU-b6dO9ryzmk9iaB7SsKQbicyamAivfFWHV_akv4KvTcRi1K1SAAoQybAQiCoKfjk-",
      badge: "NEW",
      badgeColor: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
      hoverEffect: "scale-110",
    },
  ];

  return (
    <section className="py-24 px-6 bg-background-light dark:bg-background-dark" id="templates">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-2 block">
            Choose Your Style
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight mb-4">
            DESIGN <span className="font-light">Templates</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-light">
            가장 빠르고 아름답게 시작하는 방법. 취향에 맞는 템플릿을 선택하세요.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-square rounded-2xl bg-white dark:bg-card-dark flex items-center justify-center mb-6 shadow-sm group-hover:shadow-lg transition-all duration-300 relative overflow-hidden border border-gray-100 dark:border-gray-800">
                {template.badge && (
                  <div
                    className={`absolute top-4 left-4 ${
                      template.badgeColor || "bg-black text-white"
                    } text-[10px] font-bold px-2 py-1 rounded-full z-10`}
                  >
                    {template.badge}
                  </div>
                )}
                <img
                  alt={template.name}
                  className={`w-1/2 h-1/2 object-contain drop-shadow-md transform group-hover:${template.hoverEffect} transition-transform duration-500`}
                  src={template.image}
                />
              </div>
              <div className="text-left px-2">
                <h3 className="font-bold text-lg mb-1 group-hover:text-orange-500 transition-colors">
                  {template.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {template.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

