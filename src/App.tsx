import Logo from "../src/assets/images/logo.svg?react";
import Button from "./components/Button";
import SearchInput from "./components/SearchInput";
import SunnyIcon from "./assets/images/icon-sunny.webp";
import Dropdown from "./components/Dropdown";

export default function App() {
  return (
    <div className="px-4">
      <header className="mt-4 flex items-center justify-between">
        <Logo />
        <Dropdown />
      </header>
      <main className="mb-10 grid gap-8">
        <h1 className="font-display text-center text-4xl">
          How’s the sky looking today?
        </h1>
        <div className="grid gap-3">
          <SearchInput />
          <Button />
        </div>
        <div className="rounded-[20px] bg-[url(../src/assets/images/bg-today-small.svg)] bg-cover bg-center bg-no-repeat px-[24.5px] py-[41px] text-center">
          <h2 className="text-xl">Berlin, Germany</h2>
          <p className="mt-3 text-base opacity-80">Tuesday, Aug 5, 2025</p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <img className="max-w-[120px]" src={SunnyIcon} alt="" />
            <span className="text-7xl italic">20°</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="card space-y-6 p-5">
            <h3 className="text-base text-neutral-200">Feels Like</h3>
            <span className="text-2xl">18°</span>
          </div>
          <div className="card space-y-6 p-5">
            <h3 className="text-base text-neutral-200">Humidity</h3>
            <span className="text-2xl">46%</span>
          </div>
          <div className="card space-y-6 p-5">
            <h3 className="text-base text-neutral-200">Wind</h3>
            <span className="text-2xl">14 km/h</span>
          </div>
          <div className="card space-y-6 p-5">
            <h3 className="text-base text-neutral-200">Precipitation</h3>
            <span className="text-2xl">0 mm</span>
          </div>
        </div>

        <div className="space-y-5">
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
        </div>

        <div className="space-y-4 rounded-[20px] bg-neutral-800 px-4 py-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg">Hourly forecast</h2>
            <div>Tuesday</div>
          </div>

          <div className="space-y-4">
            <div className="card flex items-center gap-2 bg-neutral-700 py-2.5 pr-4 pl-3">
              <img className="max-w-[40px]" src={SunnyIcon} alt="" />
              <span className="text-lg">3 PM</span>
              <span className="ml-auto text-sm">20°</span>
            </div>

            <div className="card flex items-center gap-2 bg-neutral-700 py-2.5 pr-4 pl-3">
              <img className="max-w-[40px]" src={SunnyIcon} alt="" />
              <span className="text-lg">3 PM</span>
              <span className="ml-auto text-sm">20°</span>
            </div>

            <div className="card flex items-center gap-2 bg-neutral-700 py-2.5 pr-4 pl-3">
              <img className="max-w-[40px]" src={SunnyIcon} alt="" />
              <span className="text-lg">3 PM</span>
              <span className="ml-auto text-sm">20°</span>
            </div>

            <div className="card flex items-center gap-2 bg-neutral-700 py-2.5 pr-4 pl-3">
              <img className="max-w-[40px]" src={SunnyIcon} alt="" />
              <span className="text-lg">3 PM</span>
              <span className="ml-auto text-sm">20°</span>
            </div>

            <div className="card flex items-center gap-2 bg-neutral-700 py-2.5 pr-4 pl-3">
              <img className="max-w-[40px]" src={SunnyIcon} alt="" />
              <span className="text-lg">3 PM</span>
              <span className="ml-auto text-sm">20°</span>
            </div>

            <div className="card flex items-center gap-2 bg-neutral-700 py-2.5 pr-4 pl-3">
              <img className="max-w-[40px]" src={SunnyIcon} alt="" />
              <span className="text-lg">3 PM</span>
              <span className="ml-auto text-sm">20°</span>
            </div>

            <div className="card flex items-center gap-2 bg-neutral-700 py-2.5 pr-4 pl-3">
              <img className="max-w-[40px]" src={SunnyIcon} alt="" />
              <span className="text-lg">3 PM</span>
              <span className="ml-auto text-sm">20°</span>
            </div>

            <div className="card flex items-center gap-2 bg-neutral-700 py-2.5 pr-4 pl-3">
              <img className="max-w-[40px]" src={SunnyIcon} alt="" />
              <span className="text-lg">3 PM</span>
              <span className="ml-auto text-sm">20°</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
