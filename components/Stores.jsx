import Image from "next/image";

const Stores = () => {
  return (
    <div className="flex gap-2">
      <Image src="/stores/app_store.png" width={120} height={120} />
      <Image src="/stores/play_store.png" width={120} height={120} />
    </div>
  );
};

export default Stores;
