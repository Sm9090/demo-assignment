import ClientSection from "../features/Home/Client-Section";

function Home() {
  return (
    <>
      <div className="bg-[#f5f5f5] h-screen px-[96px] xl:px-[40px]">
        <div className="text-[12px] text-[#731054] text-right  p-4">
          <span className="border-[1px] border-[#731054] px-[5px] py-[2px] rounded-full text-[10px] mr-1">
            ?
          </span>{" "}
          Help
        </div>
        <ClientSection />
      </div>
    </>
  );
}

export default Home;
