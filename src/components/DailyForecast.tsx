import sunnyIcon from "../assets/images/icon-sunny.webp";

export default function DailyForecast() {
  return (
    <section className="space-y-5">
      <h2 className="text-lg">Daily Forecast</h2>
      <ul className="grid grid-cols-3 gap-4">
        <li className="card flex flex-col items-center gap-4 px-2.5 py-4">
          <h3 className="text-base">Tue</h3>
          <img className="max-w-[60px]" src={sunnyIcon} alt="" />
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">20°</span>
            <span className="text-sm">14°</span>
          </div>
        </li>

        <li className="card flex flex-col items-center gap-4 px-2.5 py-4">
          <h3 className="text-base">Tue</h3>
          <img className="max-w-[60px]" src={sunnyIcon} alt="" />
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">20°</span>
            <span className="text-sm">14°</span>
          </div>
        </li>

        <li className="card flex flex-col items-center gap-4 px-2.5 py-4">
          <h3 className="text-base">Tue</h3>
          <img className="max-w-[60px]" src={sunnyIcon} alt="" />
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">20°</span>
            <span className="text-sm">14°</span>
          </div>
        </li>

        <li className="card flex flex-col items-center gap-4 px-2.5 py-4">
          <h3 className="text-base">Tue</h3>
          <img className="max-w-[60px]" src={sunnyIcon} alt="" />
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">20°</span>
            <span className="text-sm">14°</span>
          </div>
        </li>
      </ul>
    </section>
  );
}

// function DailyForecastItem() {
//   return (
//     <li>
//       <article>
//         <h3>Tue</h3>
//         <span>20°</span>
//         <span>14°</span>
//       </article>
//     </li>
//   );
// }

{
  /* <div className="space-y-5">
          <h2>Daily Forecast</h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="card grid place-content-center space-y-4 px-2.5 py-4">
              <span className="text-base">Tue</span>
              <img className="max-w-[60px]" src={SunnyIcon} alt="" />
              <div className="flex items-center justify-between">
                <span>20°</span>
                <span>14°</span>
              </div>
            </div>

            <div className="card grid place-content-center space-y-4 px-2.5 py-4">
              <span className="text-base">Tue</span>
              <img className="max-w-[60px]" src={SunnyIcon} alt="" />
              <div className="flex items-center justify-between">
                <span>20°</span>
                <span>14°</span>
              </div>
            </div>

            <div className="card grid place-content-center space-y-4 px-2.5 py-4">
              <span className="text-base">Tue</span>
              <img className="max-w-[60px]" src={SunnyIcon} alt="" />
              <div className="flex items-center justify-between">
                <span>20°</span>
                <span>14°</span>
              </div>
            </div>

            <div className="card grid place-content-center space-y-4 px-2.5 py-4">
              <span className="text-base">Tue</span>
              <img className="max-w-[60px]" src={SunnyIcon} alt="" />
              <div className="flex items-center justify-between">
                <span>20°</span>
                <span>14°</span>
              </div>
            </div>

            <div className="card grid place-content-center space-y-4 px-2.5 py-4">
              <span className="text-base">Tue</span>
              <img className="max-w-[60px]" src={SunnyIcon} alt="" />
              <div className="flex items-center justify-between">
                <span>20°</span>
                <span>14°</span>
              </div>
            </div>

            <div className="card grid place-content-center space-y-4 px-2.5 py-4">
              <span className="text-base">Tue</span>
              <img className="max-w-[60px]" src={SunnyIcon} alt="" />
              <div className="flex items-center justify-between">
                <span>20°</span>
                <span>14°</span>
              </div>
            </div>

            <div className="card grid place-content-center space-y-4 px-2.5 py-4">
              <span className="text-base">Tue</span>
              <img className="max-w-[60px]" src={SunnyIcon} alt="" />
              <div className="flex items-center justify-between">
                <span>20°</span>
                <span>14°</span>
              </div>
            </div>
          </div>
        </div> */
}
