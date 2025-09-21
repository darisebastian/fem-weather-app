import DropdownIcon from "../assets/images/icon-dropdown.svg?react";
import sunnyIcon from "../assets/images/icon-sunny.webp";

export default function HoourlyForecast() {
  return (
    <section className="space-y-4 rounded-[20px] bg-neutral-800 px-4 py-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg">Hourly Forecast</h2>
        <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-neutral-600 px-4 py-2">
          <span className="font-medium">Tuesday</span>
          <DropdownIcon />
        </div>
      </div>

      <ul className="space-y-4">
        <li className="flex items-center gap-2 rounded-lg border border-neutral-600 bg-neutral-700 py-2.5 pr-4 pl-3">
          <img className="max-w-10" src={sunnyIcon} alt="" />
          <time className="text-lg" dateTime="15:00">
            3 PM
          </time>
          <span className="ml-auto text-sm">20°</span>
        </li>
        <li className="flex items-center gap-2 rounded-lg border border-neutral-600 bg-neutral-700 py-2.5 pr-4 pl-3">
          <img className="max-w-10" src={sunnyIcon} alt="" />
          <time className="text-lg" dateTime="16:00">
            4 PM
          </time>
          <span className="ml-auto text-sm">20°</span>
        </li>
        <li className="flex items-center gap-2 rounded-lg border border-neutral-600 bg-neutral-700 py-2.5 pr-4 pl-3">
          <img className="max-w-10" src={sunnyIcon} alt="" />
          <time className="text-lg" dateTime="17:00">
            5 PM
          </time>
          <span className="ml-auto text-sm">20°</span>
        </li>
        <li className="flex items-center gap-2 rounded-lg border border-neutral-600 bg-neutral-700 py-2.5 pr-4 pl-3">
          <img className="max-w-10" src={sunnyIcon} alt="" />
          <time className="text-lg" dateTime="18:00">
            6 PM
          </time>
          <span className="ml-auto text-sm">19°</span>
        </li>
        <li className="flex items-center gap-2 rounded-lg border border-neutral-600 bg-neutral-700 py-2.5 pr-4 pl-3">
          <img className="max-w-10" src={sunnyIcon} alt="" />
          <time className="text-lg" dateTime="19:00">
            7 PM
          </time>
          <span className="ml-auto text-sm">18°</span>
        </li>
        <li className="flex items-center gap-2 rounded-lg border border-neutral-600 bg-neutral-700 py-2.5 pr-4 pl-3">
          <img className="max-w-10" src={sunnyIcon} alt="" />
          <time className="text-lg" dateTime="20:00">
            8 PM
          </time>
          <span className="ml-auto text-sm">18°</span>
        </li>
        <li className="flex items-center gap-2 rounded-lg border border-neutral-600 bg-neutral-700 py-2.5 pr-4 pl-3">
          <img className="max-w-10" src={sunnyIcon} alt="" />
          <time className="text-lg" dateTime="21:00">
            9 PM
          </time>
          <span className="ml-auto text-sm">17°</span>
        </li>
        <li className="flex items-center gap-2 rounded-lg border border-neutral-600 bg-neutral-700 py-2.5 pr-4 pl-3">
          <img className="max-w-10" src={sunnyIcon} alt="" />
          <time className="text-lg" dateTime="22:00">
            10 PM
          </time>
          <span className="ml-auto text-sm">17°</span>
        </li>
      </ul>
    </section>
  );
}
