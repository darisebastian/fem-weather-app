export default function SearchInput() {
  return (
    <div className="rounded-xl bg-neutral-800 px-6 py-4 transition-colors focus-within:ring-2 focus-within:ring-neutral-100 focus-within:ring-offset-2 focus-within:ring-offset-neutral-900 hover:bg-neutral-700">
      <input
        className="text-neutral-100 outline-none placeholder:text-neutral-200"
        type="text"
        name=""
        id=""
        placeholder="Search for a place..."
      />
    </div>
  );
}
