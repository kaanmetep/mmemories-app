function Memory({ memoryObj }) {
  return (
    <li className="bg-red-100 even:bg-opacity-20 odd:bg-opacity-50 p-4 font-monospace border-solid border-2">
      <h2 className="border-solid  pb-1 font-semibold text-base">
        {memoryObj.topic}
      </h2>
      <p className="mt-2 border-b-2 pb-4">{memoryObj.text}</p>
      <div className="mt-3 flex gap-1 items-center justify-end">
        <p className="mr-auto italic text-xs">{memoryObj.createdAt}</p>
        <img src={memoryObj.imgUrl} alt="avatar" className="w-6 rounded-full" />
        <p>{memoryObj.author}</p>
        <p className="text-[8px]">{memoryObj.verifiedUser ? "✔" : "❌"}</p>
      </div>
    </li>
  );
}

export default Memory;
