import React from "react";

const Footer = () => {
  let logoColour = "#1361F5";
  return (
    <section>
      <div className="pl-4 pr-4 sm:pl-6 sm:pr-6 max-w-[72rem] ml-auto mr-auto">
        <div className="pt-8 pb-8 md:pt-12 md:pb-12 grid gap-10 sm:grid-cols-12">
          <div className="sm:col-span-12 lg:col-span-4">
            <div>
              <a className="inline-flex" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="110"
                  height="26"
                  viewBox="0 0 123 29"
                  fill="none">
                  <path
                    d="M3.28222 28.3282L0.42334 4.82263H5.23829L6.81493 17.4423L8.16259 4.82263H13.0757L14.6785 17.4423L15.9934 4.82263H21.2925L18.2766 28.3282H12.657L10.9888 14.9694L9.51026 28.3282H3.28222Z"
                    fill={logoColour}
                  />
                  <path
                    d="M28.5539 28.5834C26.1334 28.5834 24.3965 27.921 23.3465 26.5946C22.2997 25.2698 21.7764 23.2892 21.7764 20.6544V11.2142C21.7764 9.05208 22.3979 7.40349 23.6409 6.26844C24.8838 5.13503 26.6175 4.5675 28.8418 4.5675C33.3591 4.5675 35.6194 6.78363 35.6194 11.2142V12.9152C35.6194 14.6292 35.5965 16.021 35.5539 17.089H27.396V21.6488C27.396 22.4649 27.481 23.1044 27.6511 23.5656C27.8245 24.0236 28.1892 24.2526 28.7437 24.2526C29.1754 24.2526 29.4796 24.125 29.6595 23.8666C29.8427 23.6098 29.949 23.3154 29.9801 22.9834C30.0145 22.653 30.0324 22.1656 30.0324 21.5245V19.2413H35.6194V20.589C35.6194 23.3285 35.0895 25.3451 34.0296 26.6404C32.9698 27.9357 31.1446 28.5834 28.5539 28.5834ZM30.0324 14.2955V11.2797C30.0324 9.58853 29.6138 8.74134 28.7764 8.74134C27.8343 8.74134 27.3633 9.58853 27.3633 11.2797V14.2955H30.0324Z"
                    fill={logoColour}
                  />
                  <path
                    d="M45.9365 28.5834C44.3926 28.5834 43.2886 27.6642 42.6262 25.8226V28.3282H36.8496V0.583374H42.6262V5.94786C43.5241 5.0287 44.5725 4.56749 45.773 4.56749C47.5917 4.56749 48.8968 5.10884 49.6917 6.18992C50.4849 7.27263 50.8823 8.82964 50.8823 10.8609V22.1983C50.8823 24.1217 50.4734 25.6689 49.659 26.8366C48.8477 28.0011 47.6064 28.5834 45.9365 28.5834ZM44.0393 24.2198C44.4269 24.2198 44.7001 24.0988 44.8571 23.8535C45.0174 23.6049 45.1139 23.2941 45.1449 22.918C45.1793 22.5434 45.1973 21.9612 45.1973 21.1712V11.3778C45.1973 10.5404 45.1204 9.91889 44.9683 9.51328C44.8195 9.10767 44.4989 8.90487 44.0066 8.90487C43.4734 8.90487 43.1104 9.10767 42.9141 9.51328C42.7211 9.91889 42.6262 10.5191 42.6262 11.3123V21.1712C42.6262 22.1967 42.7113 22.9621 42.8814 23.4675C43.0547 23.9696 43.4407 24.2198 44.0393 24.2198Z"
                    fill={logoColour}
                  />
                  <path
                    d="M52.2363 4.82265H57.7251V7.55722C57.9819 6.54975 58.4202 5.80068 59.0401 5.30676C59.6632 4.81447 60.5415 4.5675 61.6765 4.5675C62.5957 4.5675 63.3922 4.77685 64.0644 5.19554C64.7398 5.61096 65.2174 6.18176 65.4971 6.90956C65.9681 6.09835 66.4915 5.50629 67.0672 5.13012C67.6461 4.75559 68.4492 4.5675 69.4746 4.5675C71.3146 4.5675 72.5919 5.13012 73.3083 6.25536C74.0279 7.37732 74.3877 9.00793 74.3877 11.1488L74.3223 28.3283H68.6765V11.0507C68.6765 9.53293 68.2905 8.77405 67.5186 8.77405C66.9821 8.77405 66.5961 9.039 66.3606 9.56564C66.1251 10.089 66.0074 10.7138 66.0074 11.4367V28.3283H60.3877V11.0507C60.3877 10.3883 60.3174 9.85349 60.1784 9.44788C60.0426 9.04227 59.7499 8.83947 59.3017 8.83947C58.7211 8.83947 58.3139 9.12405 58.0784 9.68993C57.8429 10.2575 57.7251 10.9378 57.7251 11.7311V28.3283H52.2363V4.82265Z"
                    fill={logoColour}
                  />
                  <path
                    d="M80.5437 28.5834C78.7201 28.5834 77.4705 27.9799 76.7951 26.7712C76.1229 25.5642 75.7876 23.8339 75.7876 21.5834C75.7876 19.7434 76.0264 18.332 76.5072 17.3507C76.9913 16.3661 77.6603 15.6432 78.5156 15.1853C79.3743 14.724 80.6811 14.2138 82.4343 13.6544L83.9783 13.1441V10.7301C83.9783 10.1119 83.854 9.63596 83.6054 9.30395C83.36 8.97358 83.0656 8.80676 82.7222 8.80676C82.4245 8.80676 82.1628 8.94741 81.9371 9.22545C81.7147 9.50512 81.6035 9.87965 81.6035 10.3507V11.7572H76.1409V10.9918C76.1409 8.68082 76.6806 7.03222 77.7633 6.04601C78.8444 5.06143 80.6042 4.5675 83.0427 4.5675C84.9923 4.5675 86.5771 5.07615 87.7988 6.0918C89.0189 7.10909 89.6306 8.54835 89.6306 10.4096V28.3283H84.0437V25.5348C83.764 26.4997 83.3191 27.2488 82.7091 27.7853C82.0974 28.3184 81.3761 28.5834 80.5437 28.5834ZM82.7549 24.2198C83.1818 24.2198 83.4876 24.0432 83.6708 23.6899C83.854 23.3367 83.9455 22.9033 83.9455 22.3881V15.8395C83.1082 16.1584 82.4899 16.564 82.0941 17.0563C81.7016 17.5502 81.5054 18.2339 81.5054 19.1105V22.1329C81.5054 23.5247 81.9208 24.2198 82.7549 24.2198Z"
                    fill={logoColour}
                  />
                  <path
                    d="M90.8608 4.82264H96.4805V7.42638C96.7552 6.50722 97.241 5.79577 97.9393 5.29367C98.6361 4.78829 99.498 4.53479 100.523 4.53479V9.22544C99.7286 9.22544 98.8569 9.33993 97.9066 9.56563C96.9548 9.78806 96.4805 10.0497 96.4805 10.3507V28.3282H90.8608V4.82264Z"
                    fill={logoColour}
                  />
                  <path
                    d="M101.852 28.3282V0.583374H107.406V12.9151L110.101 4.82263H115.91L112.384 15.0348L116.879 28.3282H110.906L107.406 17.2525V28.3282H101.852Z"
                    fill={logoColour}
                  />
                  <rect
                    x="118.18"
                    y="23.8208"
                    width="4.39626"
                    height="4.39626"
                    fill={logoColour}
                  />
                </svg>
              </a>
            </div>
            <div className="mt-2 text-[#4b5563] text-[0.875rem] leading-[1.5715]">
              © Webmark.in - All rights reserved
            </div>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 text-[0.875rem] leading-[1.5715]">
            <h3 className="font-[500] text-[#111827]">Product</h3>
            <ul className="mt-2 text-[#4b5563]">
              <li>
                <a href="#">Features</a>
              </li>
              <li className="mt-2">
                <a href="#">How to use</a>
              </li>
              <li className="mt-2">
                <a href="#">Pricing &amp; Plans</a>
              </li>
              <li className="mt-2">
                <a href="#">Tips</a>
              </li>
              <li className="mt-2">
                <a href="#">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 text-[0.875rem] leading-[1.5715]">
            <h3 className="font-[500] text-[#111827]">Company</h3>
            <ul className="mt-2 text-[#4b5563]">
              <li>
                <a href="#">About us</a>
              </li>
              <li className="mt-2">
                <a href="#">Diversity and Inclusion</a>
              </li>
              <li className="mt-2">
                <a href="#">Careers</a>
              </li>
              <li className="mt-2">
                <a href="#">Hiring</a>
              </li>
              <li className="mt-2">
                <a href="#">Financial Statements</a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 text-[0.875rem] leading-[1.5715]">
            <h3 className="font-[500] text-[#111827]">Resources</h3>
            <ul className="mt-2 text-[#4b5563]">
              <li>
                <a href="#">Community</a>
              </li>
              <li className="mt-2">
                <a href="#">Term of Service</a>
              </li>
              <li className="mt-2">
                <a href="#">Report a Vulnerability</a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 text-[0.875rem] leading-[1.5715]">
            <h3 className="font-[500] text-[#111827]">Social</h3>
            <ul className="flex gap-1">
              <li className="cursor-pointer">
                <a href="">
                  <svg
                    className="opacity-85 hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none">
                    <path
                      d="M14.6786 14.0223C14.4186 14.1961 14.1953 14.4195 14.0217 14.6796C13.848 14.9397 13.7272 15.2314 13.6663 15.5382C13.5432 16.1577 13.6713 16.8008 14.0223 17.3259C14.3734 17.851 14.9187 18.2151 15.5382 18.3382C16.1577 18.4613 16.8008 18.3332 17.3259 17.9821C17.851 17.6311 18.2151 17.0858 18.3382 16.4663C18.4613 15.8467 18.3332 15.2037 17.9821 14.6786C17.6311 14.1535 17.0858 13.7893 16.4663 13.6663C15.8467 13.5432 15.2037 13.6713 14.6786 14.0223ZM21.0313 10.9688C20.7991 10.7366 20.5179 10.5536 20.2098 10.433C19.4018 10.1161 17.6384 10.1295 16.5 10.1429C16.317 10.1429 16.1473 10.1473 16 10.1473C15.8527 10.1473 15.6786 10.1473 15.4911 10.1429C14.3527 10.1295 12.5982 10.1116 11.7902 10.433C11.4821 10.5536 11.2054 10.7366 10.9688 10.9688C10.7321 11.2009 10.5536 11.4821 10.433 11.7902C10.1161 12.5982 10.1339 14.3661 10.1429 15.5045C10.1429 15.6875 10.1473 15.8571 10.1473 16C10.1473 16.1429 10.1473 16.3125 10.1429 16.4955C10.1339 17.6339 10.1161 19.4018 10.433 20.2098C10.5536 20.5179 10.7366 20.7946 10.9688 21.0313C11.2009 21.2679 11.4821 21.4464 11.7902 21.567C12.5982 21.8839 14.3616 21.8705 15.5 21.8571C15.683 21.8571 15.8527 21.8527 16 21.8527C16.1473 21.8527 16.3214 21.8527 16.5089 21.8571C17.6473 21.8705 19.4018 21.8884 20.2098 21.567C20.5179 21.4464 20.7946 21.2634 21.0313 21.0313C21.2679 20.7991 21.4464 20.5179 21.567 20.2098C21.8884 19.4062 21.8705 17.6473 21.8571 16.5045C21.8571 16.317 21.8527 16.1429 21.8527 15.9955C21.8527 15.8482 21.8527 15.6786 21.8571 15.4866C21.8705 14.3482 21.8884 12.5893 21.567 11.7813C21.4464 11.4732 21.2634 11.1964 21.0313 10.9598V10.9688ZM18.0357 12.9554C18.8432 13.4953 19.4031 14.3338 19.5924 15.2866C19.7816 16.2393 19.5845 17.2282 19.0446 18.0357C18.7773 18.4355 18.4338 18.7788 18.0338 19.0459C17.6339 19.313 17.1852 19.4987 16.7134 19.5924C15.7607 19.7816 14.7718 19.5845 13.9643 19.0446C13.1568 18.5053 12.5966 17.6673 12.407 16.715C12.2174 15.7627 12.4138 14.774 12.9531 13.9665C13.4924 13.159 14.3304 12.5989 15.2828 12.4092C16.2351 12.2196 17.2238 12.416 18.0313 12.9554H18.0357ZM19.3393 12.8973C19.2009 12.8036 19.0893 12.6696 19.0223 12.5134C18.9554 12.3571 18.942 12.1875 18.9732 12.0179C19.0045 11.8482 19.0893 11.7009 19.2054 11.5804C19.3214 11.4598 19.4777 11.3795 19.6429 11.3482C19.808 11.317 19.9821 11.3304 20.1384 11.3973C20.2946 11.4643 20.4286 11.5714 20.5223 11.7098C20.6161 11.8482 20.6652 12.0134 20.6652 12.183C20.6652 12.2946 20.6429 12.4063 20.6027 12.5089C20.5625 12.6116 20.4955 12.7054 20.4196 12.7857C20.3438 12.8661 20.2455 12.9286 20.1429 12.9732C20.0402 13.0179 19.9286 13.0402 19.817 13.0402C19.6473 13.0402 19.4821 12.9911 19.3438 12.8973H19.3393ZM26 8.85714C26 7.28125 24.7188 6 23.1429 6H8.85714C7.28125 6 6 7.28125 6 8.85714V23.1429C6 24.7188 7.28125 26 8.85714 26H23.1429C24.7188 26 26 24.7188 26 23.1429V8.85714ZM21.9375 21.9375C21.1027 22.7723 20.0893 23.0357 18.9464 23.0938C17.7679 23.1607 14.2321 23.1607 13.0536 23.0938C11.9107 23.0357 10.8973 22.7723 10.0625 21.9375C9.22768 21.1027 8.96429 20.0893 8.91071 18.9464C8.84375 17.7679 8.84375 14.2321 8.91071 13.0536C8.96875 11.9107 9.22768 10.8973 10.0625 10.0625C10.8973 9.22768 11.9152 8.96429 13.0536 8.91071C14.2321 8.84375 17.7679 8.84375 18.9464 8.91071C20.0893 8.96875 21.1027 9.22768 21.9375 10.0625C22.7723 10.8973 23.0357 11.9107 23.0893 13.0536C23.1562 14.2277 23.1562 17.7589 23.0893 18.942C23.0312 20.0848 22.7723 21.0982 21.9375 21.933V21.9375Z"
                      fill="#1361F5"
                    />
                  </svg>
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="">
                  <svg
                    className="opacity-85 hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none">
                    <path
                      d="M8.85714 6C7.28125 6 6 7.28125 6 8.85714V23.1429C6 24.7188 7.28125 26 8.85714 26H13.2411V19.4911H10.8839V16H13.2411V14.4955C13.2411 10.6071 15 8.80357 18.8214 8.80357C19.5446 8.80357 20.7946 8.94643 21.308 9.08929V12.25C21.0402 12.2232 20.5714 12.2054 19.9866 12.2054C18.1116 12.2054 17.3884 12.9152 17.3884 14.7589V16H21.1205L20.4777 19.4911H17.3839V26H23.1429C24.7188 26 26 24.7188 26 23.1429V8.85714C26 7.28125 24.7188 6 23.1429 6H8.85714Z"
                      fill="#1361F5"
                    />
                  </svg>
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="">
                  <svg
                    className="opacity-85 hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none">
                    <path
                      d="M7.875 9C6.83984 9 6 9.83984 6 10.875C6 11.4648 6.27734 12.0195 6.75 12.375L15.25 18.75C15.6953 19.082 16.3047 19.082 16.75 18.75L25.25 12.375C25.7227 12.0195 26 11.4648 26 10.875C26 9.83984 25.1602 9 24.125 9H7.875ZM6 13.375V21.5C6 22.8789 7.12109 24 8.5 24H23.5C24.8789 24 26 22.8789 26 21.5V13.375L17.5 19.75C16.6094 20.418 15.3906 20.418 14.5 19.75L6 13.375Z"
                      fill="#1361F5"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* BIG TEXT */}
      <div className="relative w-full h-60 mt-[-4rem]">
        <div className="pointer-events-none absolute left-[50%] text-center text-[352px] font-[700] translate-x-[-50%] leading-none text-gray-100">
          <span className="drop-shadow-sm">Webmark</span>
        </div>
        {/* GLOW */}
        <div className="translate-y-[66%] translate-x-[-50%] left-[50%] bottom-0 absolute">
          <div className="w-56 h-56 blur-[80px] border-[#1d4ed8] border-[20px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
