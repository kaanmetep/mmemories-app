function Memory({ memoryObj }) {
  return (
    <li className="bg-red-50 even:bg-opacity-80 odd:bg-opacity-40 p-4 font-monospace">
      <h2 className="border-solid border-b-2 pb-1 font-semibold">
        {memoryObj.topic}
      </h2>
      <p className="mt-2">{memoryObj.text}</p>
      <div className="mt-3 flex gap-1 items-center justify-end">
        <img src={memoryObj.imgUrl} alt="avatar" className="w-6 rounded-full" />
        <p>{memoryObj.author}</p>
        <p className="text-[8px]">{memoryObj.verifiedUser ? "✔" : "❌"}</p>
      </div>
    </li>
  );
}

export default Memory;
