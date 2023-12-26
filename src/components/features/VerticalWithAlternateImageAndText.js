import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

import image1 from "./../../images/ilustrations/1.png"
import image2 from "./../../images/ilustrations/2.jpg"
import image3 from "./../../images/ilustrations/3.jpg"
import image4 from "./../../images/ilustrations/4.jpg"

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  'background-size: cover;', // Agregamos esta línea para que la imagen se estire y cubra el contenedor
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-96 md:h-144 bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]); 
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
        image1,
      subtitle: "Finanzas",
      title: "Salí del veraz y recuperá tu historial crediticio",
      description:
        "Sabemos que lidiar con entidades financieras por teléfono, correo o carta documento es agotador y consume tiempo y energía. En Hacks Legales, podemos ayudarte a vencer el sistema de manera rápida y eficiente.",
      url: "https://www.instagram.com/p/C0m-TySvT2h/?img_index=1"
    },

    {
      imageSrc:
        image2,
      subtitle: "Consumidores",
      title: "Hace valer tus derechos como consumidor",
      description:
        "¡Conoce y ejerce tus derechos!. La Ley de Defensa del Consumidor establece las normas que regulan las relaciones entre proveedores y consumidores, brindando protección y defensa. Además, existen otras leyes complementarias, como la de tarjetas de crédito, lealtad comercial y metrología legal.",
      url: "https://www.instagram.com/p/C0h5IKDAIs6/?img_index=1"
    },

    {
      imageSrc:
        image3,
      subtitle: "Trabajadores",
      title: "Que no te pasen por arriba en el trabajo",
      description:
        "La ley de contrato de trabajo (Ley 20.744) es la que regula los derechos y obligaciones de los trabajadores y empleadores. Esta establece las normas generales del contrato de trabajo. También hay otras que la complementan, como la ley de jornada de trabajo, la de riesgos del trabajo, la de asociaciones sindicales.",
      url: "https://www.instagram.com/p/C0fL3IvPbYf/"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>¿Quienes somos?</HeadingTitle>
          <HeadingDescription>
          Sabemos que los problemas legales pueden ser un dolor de cabeza y entendemos lo fácil que es dejarlos sin resolver. Estamos acá para ofrecerte soluciones sencillas.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url}>Quiero saber más</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
