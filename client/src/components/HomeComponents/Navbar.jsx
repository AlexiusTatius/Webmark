import React from "react";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  let logoColour = "#1361F5";
  const { isAuthenticated, user } = useAuth();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="z-30 w-full top-4 md:top-6 fixed">
      <div className="pl-4 pr-4 md:pl-6 md:pr-6 max-w-[72rem] ml-auto mr-auto">
        <div className="bg-white pl-3 opacity-90 pr-3 rounded-[1rem] h-[3.5rem] flex justify-between items-center relative gap-3 shadow">
          <div className="flex items-center flex-1">
            <a className="inline-flex" href="/">
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
          <nav className="hidden md:flex md:flex-grow text-[#374252]">
            <ul className="flex flex-grow flex-wrap justify-center items-center gap-4 lg:gap-8 text-sm">
              <li
                onClick={() => scrollToSection("home")}
                className="cursor-pointer hover:bg-gray-50 hover:text-black hover:font-[500] rounded pt-1 pb-1 pl-3 pr-3">
                home
              </li>
              <li
                onClick={() => scrollToSection("features")}
                className="cursor-pointer hover:bg-gray-50 hover:text-black hover:font-[500] rounded pt-1 pb-1 pl-3 pr-3">
                features
              </li>
              <li
                onClick={() => scrollToSection("how-to-use")}
                className="cursor-pointer hover:bg-gray-50 hover:text-black hover:font-[500] rounded pt-1 pb-1 pl-3 pr-3">
                how to use
              </li>
              <li
                onClick={() => scrollToSection("about-us")}
                className="cursor-pointer hover:bg-gray-50 hover:text-black hover:font-[500] rounded pt-1 pb-1 pl-3 pr-3">
                about us
              </li>
              <li
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer hover:bg-gray-50 hover:text-black hover:font-[500] rounded pt-1 pb-1 pl-3 pr-3">
                contact
              </li>
            </ul>
          </nav>
          <ul className="flex flex-1 justify-end items-center gap-3">
            {isAuthenticated ? (
              <li>
                <a
                  className="inline-flex cursor-pointer shadow bg-[#1f2937] hover:bg-[#000] text-[#E5E7EB] pl-3 pr-3 pt-[5px] pb-[5px] rounded-lg text-[0.875rem] leading-[1.5715] font-[500]"
                  href="/user/dashboard">
                  Dashboard
                </a>
              </li>
            ) : (
              <>
                <li>
                  <a
                    className="inline-flex cursor-pointer shadow text-[#1f2937] bg-white pl-3 pr-3 pt-[5px] pb-[5px] rounded-lg text-[0.875rem] leading-[1.5715] font-[500] hover:bg-gray-50"
                    href="/auth">
                    Login
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex cursor-pointer shadow bg-[#1f2937] hover:bg-[#000] text-[#E5E7EB] pl-3 pr-3 pt-[5px] pb-[5px] rounded-lg text-[0.875rem] leading-[1.5715] font-[500]"
                    href="/auth">
                    Signup
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
