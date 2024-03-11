"use client";
import Image from "next/image";

export default function Home() {
  const posturl = process.env.POST_URL;
  const geturl = process.env.GET_URL;

  const handleClick = async () => {
    try {
      const getdata = await fetch(geturl as string);

      // const data = await getdata.json();
      console.log(await getdata.text());
    } catch (error) {
      console.log(error);
    }
  };

  const postHit = async () => {
    try {
      const postit = await fetch(posturl as string, {
        method: "POST",
      });
      console.log("all done");
      console.log(await postit.text());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1> Hi thsi is client </h1>

      <button onClick={handleClick}> Click to get result </button>
      <button onClick={postHit}> post hit </button>
    </div>
  );
}
