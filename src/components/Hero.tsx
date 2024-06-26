import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Transforme Sua Presença Online Em Um Poder De Vendas
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">

            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-yellow-600 rounded-md ">
                Entre em contato
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Empresas que confiam em nosso trabalho
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400 flex justify-center items-center">
              <Image
                src="/img/brands/fiat.svg.png"
                alt="N"
                width="150"
                height="320"
                className="w-30"
              />                
            </div>
            <div className="text-gray-400 dark:text-gray-400 flex justify-center items-center">
              <Image
                src="/img/brands/carol.svg.png"
                alt="N"
                width="300"
                height="280"
                className="w-30"
              />      
            </div>
            <div className="text-gray-400 dark:text-gray-400 flex justify-center items-center">
              <Image
                src="/img/brands/splash.png"
                alt="N"
                width="240"
                height="300"
                className="w-30"
              />      
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}