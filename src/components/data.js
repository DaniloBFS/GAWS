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
      title: "Onboarding Estratégico",
      desc: "Conosco, você terá todo um estudo do seu negócio para juntos desenvolvermos um plano de ação estratégico personalizado.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Resultado Crescente",
      desc: "Aqui na Gawes focamos sempre no crescimento dos nossos parceiros ao longo prazo",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Parceria",
      desc: "Buscamos parceiros que tenham sede por resultado e não medem esforços para alcançalos.",
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
      title: "Design Criativo",
      desc: "Transforme sua presença online e descubra insights valiosos sobre sua marca e seu público-alvo. Desde a criação de uma identidade digital cativante até o direcionamento estratégico de conteúdo.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Tráfego Pago",
      desc: "Atraia mais clientes locais, aumente sua visibilidade e impulsione seu crescimento com estratégias de tráfego pago e geolocalização para transformação digital do seu negócio.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Social Media",
      desc: "Eleve sua marca ao próximo nível, reinvente sua presença online, conquiste a atenção do seu público-alvo através de conteúdo estratégico e aumente sua autoridade no mercado.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
