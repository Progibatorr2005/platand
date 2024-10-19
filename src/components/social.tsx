import Image from "next/image"
export default function Social() {
    return(
        <div className="flex gap-2">
            <Image width={30} height={30} src={"/image/Vk.svg"} alt="1"></Image>
            <Image width={30} height={30} src={"/image/IG.svg"} alt="2"></Image>
            <Image width={30} height={30} src={"/image/TG.svg"} alt="3"></Image>
        </div>
    )
}