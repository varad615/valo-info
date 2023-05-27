import React, { useState, useRef, useEffect } from "react";

export default function TabsLgBasicFullWidth() {
  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 3
  });

  const wrapperRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab >= 1 &&
          tabSelected.currentTab < tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab + 1
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: 1
          });
        }
      }
    }

    if (e.keyCode === 37) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab > 1 &&
          tabSelected.currentTab <= tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab - 1
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.noTabs
          });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      {/*<!-- Component: Basic lg sized tab full width --> */}
      <section className="max-w-full " aria-multiselectable="false">
        <ul
          className="flex items-center bg-[#292C31]"
          role="tablist"
          ref={wrapperRef}
        >
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 1
                  ? "border-white stroke-white text-white hover:border-[#292C31]  hover:text-[#292C31] focus:border-[#292C31] focus:stroke-[#292C31] focus:text-[#292C31] disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-[#292C31] text-white hover:border-black hover:text-black focus:border-black focus:stroke-black focus:text-black disabled:text-slate-500"
              }`}
              id="tab-label-1a"
              role="tab"
              aria-setsize="3"
              aria-posinset="1"
              tabIndex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
              aria-controls="tab-panel-1a"
              aria-selected={`${
                tabSelected.currentTab === 1 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
            >
              <span>Agents</span>
            </button>
          </li>
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 2
                  ? "border-white stroke-white text-white hover:border-[#292C31]  hover:text-[#292C31] focus:border-[#292C31] focus:stroke-[#292C31] focus:text-[#292C31] disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-[#292C31] text-white hover:border-black hover:text-black focus:border-black focus:stroke-black focus:text-black disabled:text-slate-500"
              }`}
              id="tab-label-2a"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabIndex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
              aria-controls="tab-panel-2a"
              aria-selected={`${
                tabSelected.currentTab === 2 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
            >
              <span>Tab 2</span>
            </button>
          </li>
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 3
                  ? "border-white stroke-white text-white hover:border-[#292C31]  hover:text-[#292C31] focus:border-[#292C31] focus:stroke-[#292C31] focus:text-[#292C31] disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-[#292C31] text-white hover:border-black hover:text-black focus:border-black focus:stroke-black focus:text-black disabled:text-slate-500"
              }`}
              id="tab-label-3a"
              role="tab"
              aria-setsize="3"
              aria-posinset="3"
              tabIndex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
              aria-controls="tab-panel-3a"
              aria-selected={`${
                tabSelected.currentTab === 3 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
            >
              <span>Tab 3</span>
            </button>
          </li>
        </ul>
        <div className="">
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 1 ? "" : "hidden"
            }`}
            id="tab-panel-1a"
            aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-1a"
            tabIndex="-1"
          >
            <p>
              What is the recipe for successful achievement? To my mind there
              are just four essential ingredients: Choose a career you love,
              give it the best there is in you, seize your opportunities, and be
              a member of the team.
            </p>
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 2 ? "" : "hidden"
            }`}
            id="tab-panel-2a"
            aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-2a"
            tabIndex="-1"
          >
            <p>
              One must be entirely sensitive to the structure of the material
              that one is handling. One must yield to it in tiny details of
              execution, perhaps the handling of the surface or grain, and one
              must master it as a whole.
            </p>
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 3 ? "" : "hidden"
            }`}
            id="tab-panel-3a"
            aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-3a"
            tabIndex="-1"
          >
            <p>
              Even though there is no certainty that the expected results of our
              work will manifest, we have to remain committed to our work and
              duties; because, even if the results are slated to arrive, they
              cannot do so without the performance of work.
            </p>
          </div>
        </div>
      </section>
      {/*<!-- End Basic lg sized tab full width --> */}
    </>
  );
}
