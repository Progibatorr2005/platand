import Image from "next/image"
export default function Header() {
    return(
    <header>
            <div className="header_container">
                <Image src={"/image/logo.svg"} alt={"logo"} width={119} height={22}></Image>
                <p className="text-white">артисты</p>
                <p className="text-white">информация</p>
                <p className="text-white">карта</p>
                <p className="text-white">контакты</p>
                <button className="button_main">купить билет</button>
            </div>
    </header>
    ) 
}