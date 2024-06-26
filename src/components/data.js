import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Entenda um pouco mais",
  desc: " Diferente das agências comuns, estudamos a fundo a sua empresa para criar um plano de ação estratégico e eficaz.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Entenda o cliente",
      desc: "Conosco, você poderá entender o que o cliente deseja.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Impulsione o seu alcance",
      desc: "Faça com que seus cliente visitem e conheçam seu produto",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Mantenha o cliente",
      desc: "Criamos estrategias para que, além de ser alcançado, o cliente permaneça.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Conheça um pouco mais",
  desc: "Nosso compromisso é sempre alcançar os objetivos finais dos nossos clientes, garantindo resultados concretos e duradouros.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Na palma da mão",
      desc: "Os clientes saberão e conhecerão seu produto do conforto de casa.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Conhecimento técnico",
      desc: "Conte com uma equipe altamente capacitada.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    // {
    //   title: "",
    //   desc: "Nextly comes with a zero-config light & dark mode. ",
    //   icon: <SunIcon />,
    // },
  ],
};


export {benefitOne, benefitTwo};
