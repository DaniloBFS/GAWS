"use client"; 

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
       <section id="home">
      <Hero />
      </section>
      <section id="solucoes">
      <SectionTitle
        preTitle="VANTAGENS GAWS"
        title="Porque você deve nos contatar"
      >
        Somos especialistas em Tráfego Pago, Design, 
        Automação de Processos e Social Mídia, oferecendo 
        serviços personalizados que vão além do marketing tradicional. 
      </SectionTitle>

      <Benefits data={benefitOne} />
      </section>
      <section id="sobre">
      <Benefits imgPos="right" data={benefitTwo} />
      </section>
      {/*Seção para vídeo caso necessário
      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> 

      <Video videoId="fZ0D0cnR88E" />
      */}
      {/* <SectionTitle
        preTitle="Depoimentos"
        title="Veja o que nossos clientes tem a dizer"
      >
        
      </SectionTitle>

      <Testimonials /> */}
{/* 
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq /> */}
      <section id="contato">
      <Cta />
      </section>
    </Container>
  );
}
