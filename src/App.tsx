import Button from "./components/Button";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

export default function App() {
  return (
    <div className="space-y-12 p-4 pb-12">
      <Header />
      <main className="space-y-12">
        <h1 className="font-display text-center text-4xl">
          How’s the sky looking today?
        </h1>
        {/* Main Content Start */}
        <div>
          {/* Search Container Start */}
          <div className="grid gap-3">
            <SearchInput />
            <Button />
          </div>
          {/* Search Container End */}
        </div>
        {/* Main Content End */}
      </main>
    </div>
  );
}

// import Header from "./components/Header";
// import SearchInput from "./components/SearchInput";
// import Button from "./components/Button";
// import sunnyIcon from "./assets/images/icon-sunny.webp";
// import DailyForecast from "./components/DailyForecast";
// import HoourlyForecast from "./components/HourlyForecast";

// export default function App() {
//   return (
//     <div className="space-y-12 px-4 pt-4 pb-12">
//       <Header />
//       <main className="mb-10 grid gap-8">
//         <h1 className="font-display text-center text-4xl">
//           How’s the sky looking today?
//         </h1>

//         {/* Main Content Start */}
//         <div className="space-y-8">
//           {/* Search Container Start */}
//           <div className="grid gap-3">
//             <SearchInput />
//             <Button />
//           </div>
//           {/* Search Container End */}

//           {/* Content Container Start */}
//           <div className="space-y-8">
//             {/* Weather Info Container Start */}
//             <div className="space-y-5">
//               {/* Weather Info Start */}
//               <div className="space-y-4 rounded-[20px] bg-[url(../src/assets/images/bg-today-small.svg)] bg-cover bg-no-repeat px-[24.5px] py-[41px]">
//                 <div className="space-y-3 text-center">
//                   <h2 className="text-xl">Berlin, Germany</h2>
//                   <p className="opacity-80">Tuesday, Aug 5, 2025</p>
//                 </div>
//                 <div className="flex items-center justify-center gap-5">
//                   <img className="w-[120px]" src={sunnyIcon} alt="" />
//                   <p className="text-7xl italic">20°</p>
//                 </div>
//               </div>
//               {/* Weather Info End */}

//               {/* Weather Details Container Start */}
//               <ul className="grid grid-cols-2 gap-4">
//                 <li className="card grid gap-6 p-5">
//                   <span className="text-neutral-200">Feels like</span>
//                   <span className="text-2xl">18°</span>
//                 </li>
//                 <li className="card grid gap-6 p-5">
//                   <span className="text-neutral-200">Humidity</span>
//                   <span className="text-2xl">46%</span>
//                 </li>
//                 <li className="card grid gap-6 p-5">
//                   <span className="text-neutral-200">Wind</span>
//                   <span className="text-2xl">14 km/h</span>
//                 </li>
//                 <li className="card grid gap-6 p-5">
//                   <span className="text-neutral-200">Precipitation</span>
//                   <span className="text-2xl">0 mm</span>
//                 </li>
//               </ul>
//               {/* Weather Details Container End */}
//             </div>
//             {/* Weather Info Container End */}
//             <DailyForecast />
//             <HoourlyForecast />
//           </div>
//           {/* Content Container End */}
//         </div>
//         {/* Main Content End */}
//       </main>
//     </div>
//   );
// }
