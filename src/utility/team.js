import Rasuljon from "../image/team/rasulovrasuljon.png";
// import Alisher from "../image/team/alisherzayniddinov.png";
import Samandar from "../image/team/samandarbozorboyev.png";
import Shoxrux from "../image/team/shoxruxasadov.png";
import Ezoza from "../image/team/ezozanomozova.png";
import Madina from "../image/team/madinanematova.png";
import Sevinch from "../image/team/rasulovasevinch.png";
import Munisa from "../image/team/munisarazzokova.png"
import User from "../image/team/user.png";

import MiniShoxrux from "../image/team/mini/shoxruxasadov.png";
import MiniRasuljon from "../image/team/mini/rasulovrasuljon.png";
// import MiniAlisher from "../image/team/mini/alisherzayniddinov.png";
import MiniSamandar from "../image/team/mini/samandarbozorboyev.png";
import MiniSevinch from "../image/team/mini/rasulovasevinch.png";
import MiniMadina from "../image/team/mini/madinanematova.png";
import MiniEzoza from "../image/team/mini/ezozanomozova.jpg.png";
import MiniMunisa from "../image/team/mini/munisarazzokova.png"
import MiniUser from "../image/team/mini/user.png";

import Regular from "../image/company/regular.jpg";
import EmpireSoft from "../image/company/empiresoft.jpg";
// import Jobirov from "../image/company/jobirov.jpg";
// import RegularHD from "../image/company/regular.png";
// import Asphalt from "../image/company/asphalt.png";
// import Alibaba from "../image/company/alibaba.png";
// import Dilya from "../image/company/dilya.png";
// import Money from "../image/company/money.png";
// import Berramode from "../image/company/berramode.png";
// import CafeFlorya from "../image/company/ganga.png";
import ITPARK from "../image/company/itpark.webp";
import TIZIM from "../image/company/tizim.jpg";
import SHSAL from "../image/company/sirojiddinov.png"

import TUIT from "../image/educations/tuit.png";
import ShiftAcademy from "../image/educations/shiftacademy.png";
import uzmu from "../image/educations/uzmu.png";
import UZDJTU from "../image/educations/uzswlu.png";
import ISFT from "../image/educations/isft.jpg";
import Impuls from "../image/educations/impuls.png";
import TDSHUAL from "../image/educations/tdshu.jpg";
import TTPU from "../image/educations/ttpu.png";
import SAMJST from "../image/educations/SAMJST.png"
import TDPU from "../image/educations/tdpu.jpg"
import TIPME from "../image/educations/tipme.jpg"
import NUU from "../image/educations/NUU.png"

const expertMates = [
  {
    main: Rasuljon,
    image: MiniRasuljon,
    city: "Tashkent Uzbekistan",
    name: "Rasuljon Rasulov",
    expert: "IT tadbirkor",
    job: "Asoschi",
    communication: 4,
    technicalSkill: 4,
    contact: {
      telegram: "https://t.me/rasulov_rasuljon",
      call: false,
      email: "rasulovrasuljon@gmail.com",
    },
    socialnet: {
      instagram: "https://instagram.com/rasuljon_rasulovv",
      facebook: "https://www.facebook.com/profile.php?id=100095256084784",
      telegramChannel: "https://t.me/rasuljon_rasulov",
      youtube: "https://www.youtube.com/@rasuljonrasulov7751/about",
      tiktok: "https://www.tiktok.com/@rasuljon.rasulov?_t=8gnkSkFvhas&_r=1",
      linkedin: false,
      github: false,
      portfolio: false,
    },
    skills: [
      "Boshqaruv",
      "Tizimlashtirish",
      "Photoshop",
      "Buxgalteriya",
      "Microsoft Office",
      "CRM",
    ],
    aboutme:
      "Juda ham izlanuvchan, yosh bo‘lishiga qaramasdan bir necha yutuqlar egasi. “Tadbirkorlar maktabi” ni hamda “Tizimlashtirish” sohasini ham tugallagan. Shuningdek, O‘zDJTU Akademik litseyining eng namunali bitiruvchisi va hozirda ISFT Universitet talabsi hisoblanadi. Front-end dasturchisi.                    Xorijiy filmlarni ko‘rishni, shuningdek ochiq tabiatda yurishni yaxshi ko‘radi, Chunki uning ilg’or g’oya va fikrlarini shu jarayonda keladi. Ko‘proq vaqtini oila davrasida o‘tkazishni yaxshi ko‘radi.",
    experience: [
      {
        companys: [
          { name: "Regular School", duration: "1yil", image: Regular },
          { name: "Tizim markaz", duration: "5oy", image: TIZIM },
        ],
        name: "O'quv markaz tizimlashtirish",
        time: "Full Time",
        skills: ["Boshqaruv", "Tizimlashtirish"],
      },
      {
        companys: [
          { name: "Regular School", duration: "8oy", image: Regular },
          { name: "Freelancer", duration: "1yil", image: false },
        ],
        name: "Grafik dizaynerlik",
        time: "Full Time",
        skills: ["Photoshop", "Illustrator"],
      },
      {
        companys: [{ name: "Progress pro", duration: "", image: false }],
        name: "Front-end dasturlash",
        time: "Part Time",
        skills: ["HTML / CSS", "JavaScript", "jQuery", "Bootstrap"],
      },
      {
        companys: [
          { name: "Regular AR SIM", duration: "8oy", image: Regular },
          { name: "REAL WHITE", duration: "1yil", image: false },
        ],
        name: "Buxgalteriya",
        time: "Full Time",
        skills: ["Buxgalteriya", "1C", "Word", "Excel"],
      },
    ],
    education: [
      {
        name: "O'zbekiston Davlat Jahon tillari Universiteti, Akademik litseyi",
        bachelor: "Xorijiy filologiya",
        image: UZDJTU,
      },
      {
        name: "International school of finance technology and science",
        bachelor: "Xalqaro amaliy buxgalteriya va moliya",
        image: ISFT,
      },
    ],
  },
  {
    main: Shoxrux,
    image: MiniShoxrux,
    city: "Tashkent Uzbekistan",
    name: "Shoxrux Asadov",
    expert: "Frontend dasturchi",
    job: "Frontend dasturchi",
    communication: 5,
    technicalSkill: 5,
    contact: {
      telegram: "https://t.me/Shoxruxasadov",
      call: "+998914157833",
      email: false,
    },
    socialnet: {
      instagram: "https://instagram.com/Shoxruxasadovv",
      facebook: false,
      telegramChannel: "https://t.me/Shoxruxasadovv",
      youtube: false,
      linkedin: "https://linkedin.com/in/Shoxruxasadov",
      github: "https://github.com/Shoxruxasadov",
      tiktok: false,
      portfolio: "https://Shoxruxasadov.uz",
    },
    skills: [
      "React JS",
      "Next JS",
      "Redux",
      "Firebase",
      "HTML / CSS",
      "Git / Github",
      "JavaScript",
      "Node JS", "Express JS", "Mongodb"
    ],
    aboutme:
      "Shoxrux Asadov frontend dasturchi u dastur ishlab chiqishda bir yarim yildan ortiq tajribaga ega. 'Shift Academy'ni tugatgandan so'ng, u 'Regular Digital Company'ning ko'plab startaplarini amalga oshirdi va bir qancha yirik loyihalarga boshchilik qilgan.",
    experience: [
      {
        company: "Regular School",
        name: "Web Developer",
        time: "Full Time",
        duration: "6oy",
        category: [
          "Ilovani noldan yaratish va strukturani loyihalashda ishtirok etdi.",
          "Qayta foydalanish mumkin bo'lgan UI komponentlarini yaratish ustida ishlagan.",
          "Tashqi ma'lumotlar manbalari va API'lardan foydalanish.",
        ],
        skills: [
          "React JS",
          "Redux",
          "JavaScript",
          "HTML / CSS",
          "Git / Github",
        ],
        image: Regular,
      },
      {
        company: "Empire Soft",
        name: "Frontend Developer",
        time: "Part Time",
        duration: "3oy",
        category: [
          "UI komponentalarini takomillashtirish va qayta ishlash",
          "Barcha qurilmalarga moslashuvchan va adaptive design tayorlash",
          "API malumotlarini tekshirish, qayta ishlash, o'zgartirish va shriflash...",
        ],
        skills: ["Next JS", "React JS", "Redux", "TypeScript", "JavaScript"],
        image: EmpireSoft,
      },
      {
        company: "RStudio",
        name: "React Developer",
        time: "Freelance",
        duration: "3oy",
        category: [
          "Kelajakda foydalanish uchun qayta ishlatiladigan komponentlar.",
          "Dizayn jamoasi bilan ishlash, ijodiy kirish va texnik imkoniyatlarni taqdim eting.",
          "CRM xizmatini ishlab chiqish va qo'llab-quvvatlash.",
        ],
        skills: [
          "React JS",
          "Redux",
          "JavaScript",
          "Firebase",
          "JWT",
          "REST API",
        ],
        image: false,
      },
    ],
    education: [
      {
        name: "Toshkent Axborot Texnologiyalari Universiteti",
        bachelor: "Dasturiy injiniringi fakulteti (TATU)",
        image: TUIT,
      },
      {
        name: "Shift Academy",
        bachelor: "Web Dasturlash",
        image: ShiftAcademy,
      },
    ],
  },
  // {
  //   main: Alisher,
  //   image: MiniAlisher,
  //   city: "Tashkent Uzbekistan",
  //   name: "Alisher Zayniddinov",
  //   expert: "Targetolog",
  //   job: "Targetolog",
  //   communication: 4,
  //   technicalSkill: 4,
  //   contact: {
  //     telegram: "https://t.me/alisherzayniddinovv",
  //     call: "+998901220163",
  //     email: false,
  //   },
  //   socialnet: {
  //     instagram: "https://www.instagram.com/alisherzaynddnvv",
  //     facebook: "https://www.facebook.com/alisherzayniddinov001",
  //     telegramChannel: false,
  //     youtube: false,
  //     tiktok: false,
  //     linkedin: false,
  //     github: false,
  //     portfolio: false,
  //   },
  //   skills: ["SMM", "Target", "Marketing"],
  //   aboutme:
  //     "Alisher Zayniddinov SMM Mutaxasisi. 2 yildan buyon shu sohada ishlab kelmoqda. Undan tashqari Target yo'lanishi bo'yicha ham katta tajribaga ega mutaxasis. 'Jobirov School' kurslarini tamomlagan va 15+ blogger, birnechta expertlar va xalq tanigan aktyorlar bilan ishlab kelmoqda.",
  //   experience: [
  //     {
  //       company: "Regular School",
  //       name: "Target Marketing",
  //       image: RegularHD,
  //     },
  //     {
  //       company: "Jobirov School",
  //       name: "Target Marketing",
  //       image: Jobirov,
  //     },
  //     {
  //       company: "Asphalt Dream",
  //       name: "Target Marketing",
  //       image: Asphalt,
  //     },
  //     {
  //       company: "Alibaba",
  //       name: "Target Marketing",
  //       image: Alibaba,
  //     },
  //     {
  //       company: "Dilya Stilist",
  //       name: "Target Marketing",
  //       image: Dilya,
  //     },
  //     {
  //       company: "Old Money",
  //       name: "Target Marketing",
  //       image: Money,
  //     },
  //     {
  //       company: "Berra Mode",
  //       name: "Target Marketing",
  //       image: Berramode,
  //     },
  //     {
  //       company: "Cafe Florya",
  //       name: "Target Marketing",
  //       image: CafeFlorya,
  //     },
  //   ],
  //   education: [
  //     {
  //       name: "TATU Akademik Litseyi",
  //       bachelor: "Iqdisod yo'nalishi",
  //       image: TUIT,
  //     },
  //   ],
  // },
  {
    main: Samandar,
    image: MiniSamandar,
    city: "Tashkent Uzbekistan",
    name: "Samandar Bozorboyev",
    expert: "Backend dasturchi",
    job: "Backend dasturchi",
    communication: 4,
    technicalSkill: 4,
    contact: {
      telegram: "https://t.me/Samandar_Bozorboyev",
      call: false,
      email: "mrbscoder@gmail.com",
    },
    socialnet: {
      instagram: "https://instagram.com/samandarbozorboyevv",
      facebook: false,
      telegramChannel: false,
      youtube: false,
      tiktok: false,
      linkedin: "https://linkedin.com/in/samandar-bozorboyev/",
      github: "https://github.com/bscoderuz",
      portfolio: false,
    },
    skills: [
      "Python",
      "Django",
      "PostgreSQL",
      "DjangoRestFramework",
      "MySQL",
      "Postman",
      "Celery",
      "Docker",
      "HTML / CSS",
      "Git / Github",
    ],
    aboutme:
      "Samandar Bozorboyev backend dasturchi u dastur ishlab chiqishda ikki yildan ortiq tajribaga ega. Impuls Ta'lim markazini tugatgan va bir qancha yirik loyihalarda ishlagan.",
    experience: [
      {
        company: "Regular School",
        name: "Backend Developer",
        time: "Part Time",
        duration: "1yil",
        category: [
          "Yirik loyihalarda ishtirok etish.",
          "Schoolda Python Mentorlik qilish.",
          "Tashkiliy ishlarga bosh bo'lish.",
        ],
        skills: [
          "Python",
          "Django",
          "PostgreSQL",
          "HTML / CSS",
          "Git / Github",
        ],
        image: Regular,
      },
      {
        company: "IT PARK Uzbekistan",
        name: "Full Stack Mentor",
        time: "Part Time",
        duration: "1yil 2oy",
        category: [
          "Schoolda Python Mentorlik qilish.",
          "Tashkiliy ishlarga bosh bo'lish.",
        ],
        skills: [
          "Python",
          "Django",
          "DjangoRestFramework",
          "PostgreSQL",
          "Docker",
        ],
        image: ITPARK,
      },
    ],
    education: [
      {
        name: "Toshkent Axborot Texnologiyalari Universiteti",
        bachelor: "Televizion texnologiyalar fakulteti (TATU)",
        image: TUIT,
      },
      {
        name: "Impuls Ta'lim",
        bachelor: "Web Dasturlash",
        image: Impuls,
      },
    ],
  },
  {
    main: Ezoza,
    image: MiniEzoza,
    city: "Tashkent Uzbekistan",
    name: "E'zoza Nomozova",
    expert: "Adminstrator",
    job: "Adminstrator",
    communication: 4,
    technicalSkill: 4,
    contact: {
      telegram: false,
      call: false,
      email: "ezozanomozova@gmail.com",
    },
    socialnet: {
      instagram: "https://instagram.com/noejmo",
      facebook: false,
      telegramChannel: false,
      youtube: false,
      tiktok: false,
      linkedin: false,
      github: false,
      portfolio: false,
    },
    skills: ["Operator", "Menejer", "Word", "Excel"],
    aboutme:
      "Kirishimli yaxshi muomalada bo'la oladigan, kompyuterda ishlay oladigan. Xar doim yordamga tayor E'zoza",
    experience: [
      {
        company: "Regular School",
        name: "Operator Menejer",
        time: "Full Time",
        duration: "6oy",
        category: [],
        skills: ["Operator", "Menejer"],
        image: Regular,
      },
      {
        company: "Bio Farm",
        name: "Operator Menejer",
        time: "Full Time",
        duration: "6oy",
        category: [],
        skills: ["Operator", "Menejer"],
        image: false,
      },
      {
        company: "Nyu Farm",
        name: "Operator Menejer",
        time: "Full Time",
        duration: "6oy",
        category: [],
        skills: ["Operator", "Menejer"],
        image: false,
      },
    ],
    education: [
      {
        name: "Toshkent Turin Politexnika Universiteti",
        bachelor: "Axborot texnologiyalari",
        image: TTPU,
      },
      {
        name: "TDSHU Akademik litseyi",
        bachelor: "Xorijiy tillar yo‘nalishi",
        image: TDSHUAL,
      },
    ],
  },
  {
    main: Madina,
    image: MiniMadina,
    city: "Tashkent Uzbekistan",
    name: "Madinabonu Ne'matova",
    expert: "Adminstrator",
    job: "Adminstrator",
    communication: 4,
    technicalSkill: 4,
    contact: {
      telegram: "https://t.me/regularschooladmin",
      call: false,
      email: "madinabonunematova8@gmail.com",
    },
    socialnet: {
      instagram: "https://instagram.com/e.for1m",
      facebook: false,
      telegramChannel: false,
      youtube: false,
      tiktok: false,
      linkedin: false,
      github: false,
      portfolio: false,
    },
    skills: [
      "English Learning",
      "Matematika",
      "Leadership",
      "Operator",
      "Menejer",
    ],
    aboutme: false,
    experience: [
      {
        company: "Regular School",
        name: "Adminstrator",
        time: "Full Time",
        duration: "6oy",
        category: [],
        skills: ["Operator", "Menejer"],
        image: Regular,
      },
      {
        company: "Self-defense U.S Embassy ",
        name: "English Learning",
        time: "Full Time",
        duration: "1yil 6oy",
        category: [],
        skills: ["English Learning"],
        image: false,
      },
      {
        company: "Wisconsin-Madison University",
        name: "Women's Leadership",
        time: "Full Time",
        duration: "6oy",
        category: [],
        skills: ["Leadership"],
        image: false,
      },
    ],
    education: [
      {
        name: "O'zbekiston Davlat Jahon tillari Universiteti, Akademik litseyi",
        bachelor: "Xorijiy filologiya",
        image: UZDJTU,
      },
      {
        name: "Mirzo Ulug'bek nomidagi O'zbekiston Milliy universiteti",
        bachelor: "Jahon iqtisodiyoti va xalqaro iqtisodiy munosabatlar",
        image: uzmu,
      },
    ],
  },
  {
    main: Sevinch,
    image: MiniSevinch,
    city: "Tashkent Uzbekistan",
    name: "Sevinch Rasulova",
    expert: "Ingliz tili o'qituvchi",
    job: "Ingliz tili o'qituvchi",
    communication: 4,
    technicalSkill: 4,
    contact: {
      telegram: false,
      call: false,
      email: false,
    },
    socialnet: {
      instagram: "https://instagram.com/platzss",
      facebook: false,
      telegramChannel: false,
      youtube: false,
      tiktok: false,
      linkedin: false,
      github: false,
      portfolio: false,
    },
    skills: [],
    aboutme: false,
    experience: false,
    education: false,
  },
  {
    main: User,
    image: MiniUser,
    city: "Tashkent Uzbekistan",
    name: "Susana Narmuhamedova",
    expert: "Buxgalter",
    job: "Buxgalter",
    communication: 4,
    technicalSkill: 4,
    contact: {
      telegram: false,
      call: false,
      email: false,
    },
    socialnet: {
      instagram: false,
      facebook: false,
      telegramChannel: false,
      youtube: false,
      tiktok: false,
      linkedin: false,
      github: false,
      portfolio: false,
    },
    skills: ["1C", "Word", "Excel"],
    aboutme:
      "Narmuhamedova Susana yetti yildan beri buxgalteriya sohasida ishlab keladi. Ayni damda Regular IT schoolda o'z ish faoliyatini olib boradi.",
    experience: [
      {
        company: "Regular AR SIM",
        name: "Buxgalteriya",
        time: "Full Time",
        duration: "1 yil",
        category: ["Regular AR SIM Buxgalteriya bo'limi boshqaruvi."],
        skills: ["1C", "Word", "Excel"],
        image: Regular,
      },
      {
        company: "OOO AGRO SELECT",
        name: "Registrator",
        time: "Full Time",
        duration: "3 yil",
        category: ["Tashqi savdo shartnomalarini ro'yxatdan o'tkazish."],
        skills: ["1C", "Word", "Excel"],
        image: false,
      },
      {
        company: "CONFIDENT BROKER SERVICE",
        name: "Buxgalteriya",
        time: "Full Time",
        duration: "2 yil",
        category: [],
        skills: ["1C", "Word", "Excel"],
        image: false,
      },
    ],
    education: [
      {
        name: "Chimkent shahridagi M.Auvezov nomidegi Universitet",
        bachelor: "'Iqtisodiyot va moliya' yo'nalishi ",
        image: false,
      },
      {
        name: "Tijorat va Tadbirkorlik kolleji",
        bachelor: "Soliq va soliqqa tortish yo'nalishi",
        image: false,
      },
    ],
  },
  {
    main: Munisa,
    image: MiniMunisa,
    city: "Tashkent Uzbekistan",
    name: "Munisa Razzokova",
    expert: "Menejer",
    job: "Menejer",
    communication: 5,
    technicalSkill: 5,
    contact: {
      telegram: "https://t.me/munisaaxadovna",
      call: false,
      email: "munisaaxadovna03@gmail.com",
    },
    socialnet: {
      instagram: "https://instagram.com/munisa.axadovna",
      facebook:
        "https://www.facebook.com/profile.php?id=61552480730304&mibextid=2JQ9oc",
      telegramChannel: false,
      youtube: false,
      tiktok: false,
      linkedin: false,
      github: false,
      portfolio: false,
    },
    skills: ["Menejer", "Metadist", "Biolog", "Ped Texnolog"],
    aboutme:
      "O'z ustida ko'p ishlaydigan va bir vaqtning o'zida O'zDJTU akademik litseyda Metadist bo'lib ishlamoqda va 'Regular IT School'da Menejer lavozimida ishlab kelmoqda. Hozirgi vaqtda 'META ta'lim'da Turk tilini o'rganmoqda, bo'sh vaqtlarida sayr qilishni yaxshi ko'radi, farzandlariga mehribon ona.",
    experience: [
      {
        company: "Regular School",
        name: "Menejer",
        time: "Full Time",
        duration: "1 yil",
        category: [
          "Boshqaruv bo'yicha yosh kadrlarga bilim malaka berib kelmoqda.",
          "Yangi Ped Texnologiyalar bo'yicha bilim ko'nikmalar hosil qilishda yordam berib kelmoqda.",
        ],
        skills: ["Menejer"],
        image: Regular,
      },
      {
        company: "O'zDJTU Akademik litsey",
        name: "Metadist",
        time: "Full Time",
        duration: "3yil",
        category: [
          "Yangi Ped Texnologiya bo'yicha ko'nikma va malaka ishlarini olib borgan.",
        ],
        skills: ["Ped Texnolog"],
        image: UZDJTU,
      },
      {
        company: "S.H.Sirojiddinov Nomidagi Akademik litsey",
        name: "Biolog",
        time: "Full Time",
        duration: "11yil",
        category: ["Yosh kadrlarga bilim berish.", "Ishlash jarayonida Magistr darajasiga chiqish."],
        skills: ["Biolog O'qituvchi", "Magistratura"],
        image: SHSAL,
      },
      {
        company: "BIO ECO SAN",
        name: "To'garak rahbari",
        time: "Full Time",
        duration: "1yil",
        category: ["Ekologiya bo'yicha ko'nikma va malakaga ega bo'lgan"],
        skills: ["Ecolog"],
        image: false,
      },
      {
        company: "Samarqand viloyat Shifoxona",
        name: "Labarant",
        time: "Full Time",
        duration: "1yil 6oy",
        category: ["Labaratoriya ishlari va h.k."],
        skills: ["Qon tahlil", "Diagnostika"],
        image: false,
      },
    ],
    education: [
      {
        name: "Samarqand Med Texnikum",
        bachelor: "",
        image: SAMJST,
      },
      {
        name: "Toshkent Davlat Pedagogika Universiteti",
        bachelor: "Biofag (Biologiya va Xayot hafsizligi)",
        image: TDPU,
      },
      {
        name: "TIPME Malaka oshirish markazi",
        bachelor: "Klinik Labaratoriya",
        image: TIPME,
      },
      {
        name: "O‘zbekiston Milliy universiteti",
        bachelor: "Biofag (Magistratura)",
        image: NUU,
      },
      {
        name: "Metadist Akademik litsey boshqarmasi",
        bachelor: "Metadist yo'nalishida",
        image: false,
      },
    ],
  },
];

export default expertMates;
