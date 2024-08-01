import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1592578629295-73a151d69c96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basic",
      description: "hello i am amazon",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "daily exercise",
      description: "this is daily exercise",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1689596509894-f9dbcd4f5de9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "fruits",
      description: "this is fruits",
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div className="w-52 bg-zinc-100 rounded-lg overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-3">{elem.description}</p>
            <button className="px-4 py-1 bg-sky-400 text-md rounded-full text-zinc-100">Know more</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
