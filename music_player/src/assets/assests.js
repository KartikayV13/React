//import images
import atif_img from "./Atif.jpg";
import rahat_img from "./Back-2-Love.jpg";
import honey_img from "./HoneySingh.jpg";
import kk_img from "./kk_img.jpg";
import fav_img from "./Fav_img.jpg";
import Logo from "./Music.png";

export const assets = {
  Logo,
};

//import Atifsongs
import atifS1 from "./Atif/01DilDiyangalla.mp3";
import atifS2 from "./Atif/02JeenaJeena.mp3";
import atifS3 from "./Atif/03JeeneLagaHoon.mp3";
import atifS4 from "./Atif/04JudaHokeBhi.mp3";
import atifS5 from "./Atif/05MarJaayen(Reprise).mp3";
import atifS6 from "./Atif/06RaftaRaftaSanam.mp3";
import atifS7 from "./Atif/07RaftaRafta.mp3";
import atifS8 from "./Atif/08TuChahiye.mp3";
import atifS9 from "./Atif/09TuJaaneNa.mp3";
import atifS10 from "./Atif/10WohLamhe.mp3";

//import KKSongs
import kkS1 from "./kk/01AbhiAbhi(Male).mp3";
import kkS2 from "./kk/02BeeteLamhe.mp3";
import kkS3 from "./kk/03SuchKehRahahai.mp3";
import kkS4 from "./kk/04Dilibadat.mp3";
import kkS5 from "./kk/05DilKyunYehMeraShor.mp3";
import kkS6 from "./kk/06DilnashinDilnashin.mp3";
import kkS7 from "./kk/07EkDinMeriBahoMe.mp3";
import kkS8 from "./kk/08Laapata.mp3";
import kkS9 from "./kk/09LabonKo.mp3";
import kkS10 from "./kk/10ZindagiDoPalKi.mp3";

//import Rahat Songs
import RahatS1 from "./Rahat back to love/01Rabjaane.mp3";
import RahatS2 from "./Rahat back to love/02Habibi.mp3";
import RahatS3 from "./Rahat back to love/03RimJhim.mp3";
import RahatS4 from "./Rahat back to love/04ZarooriTha.mp3";
import RahatS5 from "./Rahat back to love/05NachDumadum.mp3";
import RahatS6 from "./Rahat back to love/06SabJhoote.mp3";
import RahatS7 from "./Rahat back to love/07DilKeTaar.mp3";
import RahatS8 from "./Rahat back to love/08SharabEHusn.mp3";
import RahatS9 from "./Rahat back to love/09AagLagi.mp3";
import RahatS10 from "./Rahat back to love/10FusionInRaag.mp3";

//import Honey Songs
import HoneyS1 from "./Honey singh/01BlueEyes.mp3";
import HoneyS2 from "./Honey singh/02PartyWithBhoothnath.mp3";
import HoneyS3 from "./Honey singh/03LungiDance.mp3";
import HoneyS4 from "./Honey singh/04AngrejiBeat.mp3";
import HoneyS5 from "./Honey singh/05DhireDhireSe.mp3";
import HoneyS6 from "./Honey singh/06FuglyFuglyKyaHai.mp3";
import HoneyS7 from "./Honey singh/07Gatividhi.mp3";
import HoneyS8 from "./Honey singh/08DesiKalakaar.mp3";
import HoneyS9 from "./Honey singh/09OneBottleDown.mp3";
import HoneyS10 from "./Honey singh/10SaiyaanJi.mp3";

//import Fav Songs
import Fav1 from "./Fav_songs/01MereNishan.mp3";
import Fav2 from "./Fav_songs/02JeenaJeena.mp3";
import Fav3 from "./Fav_songs/03HoSanna.mp3";
import Fav4 from "./Fav_songs/04LaboKo.mp3";
import Fav5 from "./Fav_songs/05DilIbadat.mp3";
import Fav6 from "./Fav_songs/06Chaahat.mp3";
import Fav7 from "./Fav_songs/07JeeneLagaHoon.mp3";
import Fav8 from "./Fav_songs/08MaiAgarKahoon.mp3";
import Fav9 from "./Fav_songs/09TuJoMila.mp3";
import Fav10 from "./Fav_songs/10AnkhonnMeteri.mp3";

export const atif_Songs = [
  {
    id: 0,
    name: "Dil Diyan galla",
    image: atif_img,
    file: atifS1,
    duration: "04:20",
  },
  {
    id: 1,
    name: "Jeena Jeena",
    image: atif_img,
    file: atifS2,
    duration: "03:49",
  },
  {
    id: 2,
    name: "Jeene Laga Hoon",
    image: atif_img,
    file: atifS3,
    duration: "03:57",
  },
  {
    id: 3,
    name: "Judo Hoke Bhi",
    image: atif_img,
    file: atifS4,
    duration: "06:31",
  },
  {
    id: 4,
    name: "Mar Jaayen (Reprise)",
    image: atif_img,
    file: atifS5,
    duration: "04:09",
  },
  {
    id: 5,
    name: "Rafta Rafta Sanam",
    image: atif_img,
    file: atifS6,
    duration: "03:33",
  },
  {
    id: 6,
    name: "Rafta Rafta",
    image: atif_img,
    file: atifS7,
    duration: "03:33",
  },
  {
    id: 7,
    name: "Tu Chahiye",
    image: atif_img,
    file: atifS8,
    duration: "04:32",
  },
  {
    id: 8,
    name: "Tu Jaane Na",
    image: atif_img,
    file: atifS9,
    duration: "05:37",
  },
  {
    id: 9,
    name: "Woh Lamhe",
    image: atif_img,
    file: atifS10,
    duration: "05:20",
  },
];
export const kk_Songs = [
  {
    id: 11,
    name: "Abhi Abhi (Male)",
    image: kk_img,
    file: kkS1,
    duration: "05:42",
  },
  {
    id: 12,
    name: "Beete Lamhe",
    image: kk_img,
    file: kkS2,
    duration: "04:59",
  },
  {
    id: 13,
    name: "Such Keh Raha hai",
    image: kk_img,
    file: kkS3,
    duration: "05:27",
  },
  {
    id: 14,
    name: "Dil ibadat",
    image: kk_img,
    file: kkS4,
    duration: "05:31",
  },
  {
    id: 15,
    name: "Dil Kyun Yeh Mera Shor",
    image: kk_img,
    file: kkS5,
    duration: "05:32",
  },
  {
    id: 16,
    name: "Dilnashin Dilnashin",
    image: kk_img,
    file: kkS6,
    duration: "04:53",
  },
  {
    id: 17,
    name: "Ek Din Meri Baho Me",
    image: kk_img,
    file: kkS7,
    duration: "02:45",
  },
  {
    id: 18,
    name: "Laapata",
    image: kk_img,
    file: kkS8,
    duration: "04:15",
  },
  {
    id: 19,
    name: "LabonKo",
    image: kk_img,
    file: kkS9,
    duration: "06:48",
  },
  {
    id: 20,
    name: "Zindagi Do Pal Ki",
    image: kk_img,
    file: kkS10,
    duration: "04:22",
  },
];
export const rahat_Songs = [
  {
    id: 21,
    name: "Rab jaane",
    image: rahat_img,
    file: RahatS1,
    duration: "06:24",
  },
  {
    id: 22,
    name: "Habibi",
    image: rahat_img,
    file: RahatS2,
    duration: "04:51",
  },
  {
    id: 23,
    name: "Rim Jhim",
    image: rahat_img,
    file: RahatS3,
    duration: "04:31",
  },
  {
    id: 24,
    name: "Zaroori Tha",
    image: rahat_img,
    file: RahatS4,
    duration: "05:42",
  },
  {
    id: 25,
    name: "Nach Dumadum",
    image: rahat_img,
    file: RahatS5,
    duration: "05:45",
  },
  {
    id: 26,
    name: "Sab Jhoote",
    image: rahat_img,
    file: RahatS6,
    duration: "04:00",
  },
  {
    id: 27,
    name: "Dil Ke Taar",
    image: rahat_img,
    file: RahatS7,
    duration: "04:55",
  },
  {
    id: 28,
    name: "Sharab E Husn",
    image: rahat_img,
    file: RahatS8,
    duration: "04:15",
  },
  {
    id: 29,
    name: "Aag Lagi",
    image: rahat_img,
    file: RahatS9,
    duration: "03:45",
  },
  {
    id: 30,
    name: "Fusin In Raag",
    image: rahat_img,
    file: RahatS10,
    duration: "04:30",
  },
];
export const honey_Songs = [
  {
    id: 31,
    name: "Blue Eyes",
    image: honey_img,
    file: HoneyS1,
    duration: "04:02",
  },
  {
    id: 32,
    name: "Party With Bhoothnath",
    image: honey_img,
    file: HoneyS2,
    duration: "05:21",
  },
  {
    id: 33,
    name: "Lungi Dance",
    image: honey_img,
    file: HoneyS3,
    duration: "04:35",
  },
  {
    id: 34,
    name: "Angreji beat",
    image: honey_img,
    file: HoneyS4,
    duration: "03:30",
  },
  {
    id: 35,
    name: "Dhire Dhire Se",
    image: honey_img,
    file: HoneyS5,
    duration: "05:04",
  },
  {
    id: 36,
    name: "Fugly Fugly Kya Hai",
    image: honey_img,
    file: HoneyS6,
    duration: "03:37",
  },
  {
    id: 37,
    name: "Gatividhi",
    image: honey_img,
    file: HoneyS7,
    duration: "04:20",
  },
  {
    id: 38,
    name: "Desi Kalakaar",
    image: honey_img,
    file: HoneyS8,
    duration: "04:18",
  },
  {
    id: 39,
    name: "One Bottle Down",
    image: honey_img,
    file: HoneyS9,
    duration: "03:16",
  },
  {
    id: 40,
    name: "Saiyaan Ji",
    image: honey_img,
    file: HoneyS10,
    duration: "03:25",
  },
];
export const fav_Songs = [
  {
    id: 41,
    name: "Mere Nishan",
    image: fav_img,
    file: Fav1,
    duration: "04:10",
  },
  {
    id: 42,
    name: "Jeena Jeena",
    image: fav_img,
    file: Fav2,
    duration: "03:49",
  },
  {
    id: 43,
    name: "Ho Sanna",
    image: fav_img,
    file: Fav3,
    duration: "05:31",
  },
  {
    id: 44,
    name: "Labo Ko",
    image: fav_img,
    file: Fav4,
    duration: "04:43",
  },
  {
    id: 45,
    name: "Dil Ibadat",
    image: fav_img,
    file: Fav5,
    duration: "05:29",
  },
  {
    id: 46,
    name: "Chaahat",
    image: fav_img,
    file: Fav6,
    duration: "04:22",
  },
  {
    id: 47,
    name: "Jeene Laga Hoon",
    image: fav_img,
    file: Fav7,
    duration: "03:57",
  },
  {
    id: 48,
    name: "Mai Agar Kahoon",
    image: fav_img,
    file: Fav8,
    duration: "05:10",
  },
  {
    id: 49,
    name: "Tu Jo Mila",
    image: fav_img,
    file: Fav9,
    duration: "04:02",
  },
  {
    id: 50,
    name: "Ankhoon Mein Teri",
    image: fav_img,
    file: Fav10,
    duration: "04:03",
  },
];

const albumData = [
  {
    id: 0,
    name: "Atif Aslam Top10",
    Image: atif_img,
    desc: "Atif most popular",
    bgColor: "#2a4365",
  },
  {
    id: 1,
    name: "K K Top10",
    Image: kk_img,
    desc: "K K most popular",
    bgColor: "#22543d",
  },
  {
    id: 2,
    name: "Honey Sing Top10",
    Image: honey_img,
    desc: "Honey Singh most popular",
    bgColor: "#742a2a",
  },
  {
    id: 3,
    name: "Rahat Fateh Ali Khan Top10",
    Image: honey_img,
    desc: "Rahat Fateh Ali Khan Back 2 Love Album",
    bgColor: "#44337a",
  },
  {
    id: 4,
    name: "My Fav",
    Image: fav_img,
    desc: "My Favourite Songs",
    bgColor: "#234e52",
  },
];
