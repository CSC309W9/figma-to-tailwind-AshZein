// app/page.js
export default function Home() {
  return (
    <div className="w-[1769px] h-[1151px] relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden shadow-lg">
      <div className="w-[150px] h-[52px] left-[1567px] top-[58px] absolute">
        <div className="w-[150px] h-[52px] left-[4px] top-[8px] absolute bg-[#000000] opacity-20 rounded-[49px]" />
        <div className="w-[150px] h-[52px] left-0 top-0 absolute bg-[#eaecd7] rounded-[49px]" />
        <div className="left-[50%] top-[50%] absolute transform -translate-x-1/2 -translate-y-1/2 justify-center text-[#db4439] text-base font-black font-['Inknut_Antiqua']">Click</div>
      </div>
      <div className="origin-top-left rotate-[-8.64deg] w-[543px] h-[590.40px] left-[1068.69px] top-[226px] absolute">
        <div className="w-[543px] h-[590.40px] left-[88.69px] top-0 absolute bg-[#d9d9d9] rotate-[15deg] shadow-md" />
        <img className="w-[543px] h-[590.40px] left-[88.69px] top-0 absolute rotate-[15deg] absolute" src="istockphoto-174680810-612x612.jpg" />
      </div>
      <div className="w-[680px] left-[143px] top-[500px] absolute justify-start text-[#eaecd7] text-[110px] font-black font-['Inknut_Antiqua'] leading-[134.20px]">Bla Bla Coffee!</div>
      <div className="w-[680px] left-[148px] top-[740px] absolute justify-start text-[#eaecd7] text-[40px] font-semibold font-['Inknut_Antiqua'] leading-[48.80px]">Your NO.1 Choice </div>
      <div className="left-[270px] top-[46px] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Menu</div>
      <div className="left-[64px] top-[46px] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Home</div>
      <div className="left-[476px] top-[46px] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Login</div>
      <div className="w-full h-[102px] left-0 top-[1049px] absolute bg-white flex justify-around items-center"></div>

      <div className="w-full h-[80px] left-0 top-[1049px] absolute bg-white flex justify-around items-center">
        <div className="justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">Contact Information</div>
        <div className="justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">Company Policy</div>
        <div className="justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">Be our partner today</div>
      </div>
    </div>
  );
}