import Header from "@/components/Header";
import Social from "@/components/social";
import Tabs from "@/components/Tabs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="preview">
        <div className="flex justify-center items-center h-screen"> 
        <Image width={500} height={300} src={"/image/logo.png"} alt={"logo"}></Image>
        </div>
      </div>
      <Header/>
      <main>
        <div className="headliners">
          <div className="container">
            <div className="w-full">
              <h2>{"ХЭДЛАЙНЕРЫ"}</h2>
              <div className="headliners_container">
                <div className="headliners_card">
                  <Image width={300} height={300} src={"/image/image1.png"} alt="image"></Image>
                  <p>МЕДЖИКУЛ</p>
                </div>
                <div className="headliners_card">
                  <Image width={300} height={300} src={"/image/image2.png"} alt="image2"></Image>
                  <p>КОЛЯ МАНЮ</p>
                </div>
                <div className="headliners_card">
                  <Image width={300} height={300} src={"/image/image3.png"} alt="image3"></Image>
                  <p>БЕЛКИ НА АКАЦИИ</p>
                </div>
                <div className="headliners_card">
                  <Image width={300} height={300} src={"/image/image4.png"} alt="image4"></Image>
                  <p>PLASH MOON</p>
                </div>
              </div>
              <h3>артисты</h3>
              <div className="flex justify-between">
                <div className="artist_card">
                  <Image width={150} height={150} src={"/image/a1.png"} alt="a1"></Image>
                  <p>ONE LOVE</p>
                </div>
                <div className="artist_card">
                  <Image width={150} height={150} src={"/image/a2.png"} alt="a2"></Image>
                  <p>ШИSHКА</p>
                </div>
                <div className="artist_card">
                  <Image width={150} height={150} src={"/image/a3.png"} alt="a3"></Image>
                  <p>УКАЧАЛО</p>
                </div>
                <div className="artist_card">
                  <Image width={150} height={150} src={"/image/a4.png"} alt="a4"></Image>
                  <p>АСОМНИЯ</p>
                </div>
                <div className="artist_card">
                  <Image width={150} height={150} src={"/image/a5.png"} alt="a5"></Image>
                  <p>МИША МИЩЕНКО</p>
                </div>
                <div className="w-[280px]">
                  <p className="text-base leading-4">Список приглашенных артистов постоянно пополняется</p>
                  <p className="text-xs mt-4 mb-4">Подписывайся на нас в соц. сетях чтобы не пропустить обновления</p>
                  <Social/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headliners overflow-hidden">
          <div className="container ">
            <h2 >ИНФОРМАЦИЯ</h2>
            <div className="info_container ">
              <div className="w-[500px] z-10">
              <p className="text-4xl w-[400px] ">Мексика, Коламбия, Эквадор, Доминиканы</p>
              <p className="mt-8">Все, что выхотели узнать об этих странах, теперь можете попробовать и увидеть!</p>
              <p className="text-2xl mt-8">Мастер-классы, квесты, барабанные шоу от ведущих аниматоров из латинской Америки!</p>
              <p className="mt-8">И конечно же, множество кулинарных открытий и сюрпризов вас ждет на нашем фуд-корте!</p>
              </div>

              <div>
                <Image className="ml-[150px] overflow-hidden z-3 " width={1000} height={830} alt="1" src={"/image/listic2.png"} ></Image>
                <Image className="mt-[-800px] ml-[400px] z-2 " width={800} height={810} alt="2" src={"/image/listic.png"}></Image>
                <Image className="mt-[-800px] ml-[350px] z-3" width={900} height={760} alt="3" src={"/image/women.png"}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="map_block">
          <div className="container">
            <h2>КАРТА</h2>
            <div className="flex gap-[20px] mt-5 ">
              <Image width={60} height={35} src={"/image/number1.png"} alt="number1"></Image>
              <p>Главнвая сцена <br/>Platand Fest</p>
            </div>
            <div className="flex gap-[20px] mt-5">
              <Image width={60} height={35} src={"/image/number2.png"} alt="number2"></Image>
              <p>Главнвая сцена <br/>Platand Fest</p>
            </div>
            <div className="flex gap-[20px] mt-5">
              <Image width={60} height={35} src={"/image/number3.png"} alt="number3"></Image>
              <p>Главнвая сцена <br/>Platand Fest</p>
            </div>
            <div className="flex gap-[20px] mt-5">
              <Image width={60} height={35} src={"/image/number4.png"} alt="number4"></Image>
              <p>Главнвая сцена <br/>Platand Fest</p>
            </div>
            <div className="flex gap-[20px] mt-5">
              <Image width={60} height={35} src={"/image/number5.png"} alt="number5"></Image>
              <p>Главнвая сцена <br/>Platand Fest</p>
            </div>
            <div className="flex gap-[20px] mt-5 mb-30">
              <Image width={60} height={35} src={"/image/number6.png"} alt="number6"></Image>
              <p>Главнвая сцена <br/>Platand Fest</p>
            </div>
          </div>
        </div>
        <div className="tickets ">
          <div className="container">
            <h2>КУПИТЬ БИЛЕТЫ</h2>
            <p  className="w-[800px]">Цены увеличиваются по датам и квотам. На каждую ценовую категорию выделено ограниченное колличество билетов. Как только билеты в категории заканчваются — цена увеличивается.</p>
            <div className="poducts mt-10 flex flex-wrap justify-between pb-20">
              <div className="product_card">
                <div className="product_card_left">
                  <p className="text-xs">2 ИЮНЯ / ДЮРСО</p>
                  <p className="text-xl mt-4">БАЗОВЫЙ ОДИН<br/>ДЕНЬ</p>
                  <p className="text-s mt-2">кемпинг / 1 мастер-класс / 1 квест</p>
                  <p className="text-xs text-slate-500 mt-2">* ВОЗМОЖНА АРЕНДА ПАЛАТКИ</p>
                </div>
                <div className="product_card_line"></div>
                <div className="product_card_right text-sm">
                  <button className="button_main mt-3 mb-3">купить билет</button>
                  <p>ДО 30.05 — 1 000 ₽</p>
                  <p>ДО 15.06 — 1 500 ₽</p>
                  <p>ДО 2.07 — 2 000 ₽</p>
                </div>
              </div>
              <div className="product_card">
                <div className="product_card_left">
                  <p className="text-xs">2 ИЮНЯ / ДЮРСО</p>
                  <p className="text-xl mt-4">БАЗОВЫЙ ОДИН<br/>ДЕНЬ</p>
                  <p className="text-s mt-2">кемпинг / 1 мастер-класс / 1 квест</p>
                  <p className="text-xs text-slate-500 mt-2">* ВОЗМОЖНА АРЕНДА ПАЛАТКИ</p>
                </div>
                <div className="product_card_line"></div>
                <div className="product_card_right text-sm">
                  <button className="button_main mt-3 mb-3">купить билет</button>
                  <p>ДО 30.05 — 1 000 ₽</p>
                  <p>ДО 15.06 — 1 500 ₽</p>
                  <p>ДО 2.07 — 2 000 ₽</p>
                </div>
              </div>
              <div className="product_card">
                <div className="product_card_left">
                  <p className="text-xs">2 ИЮНЯ / ДЮРСО</p>
                  <p className="text-xl mt-4">БАЗОВЫЙ ОДИН<br/>ДЕНЬ</p>
                  <p className="text-s mt-2">кемпинг / 1 мастер-класс / 1 квест</p>
                  <p className="text-xs text-slate-500 mt-2">* ВОЗМОЖНА АРЕНДА ПАЛАТКИ</p>
                </div>
                <div className="product_card_line"></div>
                <div className="product_card_right text-sm">
                  <button className="button_main mt-3 mb-3">купить билет</button>
                  <p>ДО 30.05 — 1 000 ₽</p>
                  <p>ДО 15.06 — 1 500 ₽</p>
                  <p>ДО 2.07 — 2 000 ₽</p>
                </div>
              </div>
              <div className="product_card">
                <div className="product_card_left">
                  <p className="text-xs">2 ИЮНЯ / ДЮРСО</p>
                  <p className="text-xl mt-4">БАЗОВЫЙ ОДИН<br/>ДЕНЬ</p>
                  <p className="text-s mt-2">кемпинг / 1 мастер-класс / 1 квест</p>
                  <p className="text-xs text-slate-500 mt-2">* ВОЗМОЖНА АРЕНДА ПАЛАТКИ</p>
                </div>
                <div className="product_card_line"></div>
                <div className="product_card_right text-sm">
                  <button className="button_main mt-3 mb-3">купить билет</button>
                  <p>ДО 30.05 — 1 000 ₽</p>
                  <p>ДО 15.06 — 1 500 ₽</p>
                  <p>ДО 2.07 — 2 000 ₽</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="route">
          <div className="container">
            <h2 className="text-white">КАК ДОБРАТЬСЯ</h2>
            <Tabs></Tabs>
          </div>
        </div>
      </main>
      <footer>
      <div className="route text-white" >
          <div className="container">
            <h2 className="text-white">КОНТАКТЫ</h2>
            <div className="footer_container flex justify-between">
              <div className="footer_left">
                <p>Общие вопрсы</p>
                <p className="">+7 923-43-51</p>
                <p>inf0@platand@gmail.com</p>
                <p className="mt-5">Партнерам</p>
                <p>+7 923 513-43-94</p>
                <p>artist@platand@gmail.com</p>
                <p className="mt-5">Продолжить маршрут</p>
                <div className="flex gap-5 mt-3">
                  <button className="button_main">яндекс карты</button>
                  <button className="button_main">google maps</button>
                </div>
                <Image className="mt-20" width={452} height={1} src={"/image/footer.png"} alt="footer"/>
              </div>
              <div className="footer_right">
                <Image width={575} height={1} src={"/image/bigmap.png"} alt="bigmap"/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
