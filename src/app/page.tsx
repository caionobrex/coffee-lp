
import Image from "next/image"
import Logo from '@/assets/logo.png'
import HeroCoffee from '@/assets/hero-coffee-bean.png'
import RightArrow from '@/assets/right-arrow.svg'
import HomeCoffee from '@/assets/home-coffee.png'
import ArrowDown from '@/assets/arrow-down.svg'
import AboutCoffee from '@/assets/about-coffee.png'
import BgCoffeeBeans from '@/assets/bg-coffee-beans 1.png'
import BgCoffeeBeansSteps from '@/assets/bg-coffee-beans-steps.png'
import TestimonialCoffee from '@/assets/testimonial-coffee.png'
import FacebookIcon from '@/assets/social-media-icons/ri_facebook-fill.svg'
import InstaIcon from '@/assets/social-media-icons/ri_instagram-fill.svg'
import Twitter from '@/assets/social-media-icons/ri_twitter-fill.svg'
import SteppedLine from '@/assets/steps-line-dashed.png'
import Step1 from '@/assets/steps-green-coffee.png'
import Step2 from '@/assets/steps-coffee-beans.png'
import Step3 from '@/assets/steps-ground-coffee 1.png'
import { clsx } from "clsx"
import { pacifico } from "@/fonts/pacifico"

export const LogoWithText = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image src={Logo} alt="Logo" />
      <span className={clsx(pacifico.className, 'text-white')}>
        Coffetoo
      </span>
    </div>
  )
}

export const Header = () => {
  return (
    <header className="bg-primary py-4 flex justify-center border-b border-dashed border-gray-500">
      <LogoWithText />
    </header>
  )
}

export const HeroSection = () => {
  return (
    <section className="hero-gradient pt-8 pb-16">
      <div className="flex flex-col gap-y-5 items-center">
        <span className="uppercase text-secondary font-medium">
          EXCEPTIONAL QUALITY
        </span>
        <h1
          className={clsx(pacifico.className, 'text-white text-5xl flex flex-col items-center w-96')}
        >
          <span>
            {`It's time for a`}
          </span>
          <span className="flex gap-x-1">
            good coffee
            <Image
              src={HeroCoffee}
              alt="coffee bean"
              className="-translate-y-2"
            />
          </span>
        </h1>
        <p className="text-center text-white w-80">
          Each select coffee bean reflects
          our commitment to Peruvian coffee growers,
          who bring the best select coffee to your table.
        </p>
        <button type="button" className="bg-secondary flex items-center gap-x-2 hero-bnt-shadow rounded-full px-6 py-4 mt-6">
          Get Started <Image src={RightArrow} alt="" />
        </button>
        <Image src={HomeCoffee} alt="home coffee" />
      </div>
    </section>
  )
}

const ProductsSection = () => {
  return (
    <section className="bg-primary pt-12 rounded-t-3xl -translate-y-6 pb-20">
      <div className="custom-container">
        <div className="flex justify-center">
          <button type="button" className="bg-primary-alt text-white flex items-center gap-x-2 product-section-btn-shadow rounded-full px-8 py-5">
            Scroll Down <Image src={ArrowDown} alt="" />
          </button>
        </div>
        <p className="text-white mt-6 text-center">
          We strive to form deep partnerships with farmers from all over the world to create perspective together and form healthy working relationships built on trust and respect.
        </p>
        <ul className="grid grid-cols-2 gap-y-8 mt-10">
          {products.map((product) => (
            <li key={product.name}>
              <div className="text-center text-white">
                <div className="relative h-56">
                  <Image src={product.img} alt={product.name} fill />
                </div>
                <h1 className={clsx(pacifico.className, 'text-xl')}>
                  {product.name}
                </h1>
                <span className={clsx(pacifico.className, 'text-lg')}>
                  {product.price.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export const AboutCoffeeSection = () => {
  return (
    <section className="bg-white rounded-t-3xl -translate-y-10 pt-12 pb-10">
      <div className="custom-container">
        <h2 className={clsx(pacifico.className, 'text-center text-3xl')}>
          Our History
        </h2>
        <p className="mt-6 text-center text-text text-lg">
          We make and grow the best coffee in Peru,
          accompanying families since 1930, with professional workers who harvest, collect and select the coffee with quality work, thus providing exquisite coffee to enjoy together as a family.
        </p>
        <div className="flex justify-center mt-8">
          <Image src={AboutCoffee} alt="" />
        </div>
      </div>
    </section>
  )
}

export const TestimonialCoffeeSection = () => {
  return (
    <section className="bg-white rounded-t-3xl -translate-y-10 pt-12 pb-10">
      <div className="custom-container">
        <h3 className={clsx(pacifico.className, 'text-center text-3xl')}>
          Coffee is the best drink in the morning, it keeps you focused.
        </h3>
        <span className="text-text text-center block mt-4">
          Jhon Doe
        </span>
        <div className="flex justify-center mt-8">
          <Image src={TestimonialCoffee} alt="" />
        </div>
      </div>
    </section>
  )
}

export const Footer = () => {
  return (
    <footer className="relative footer-bg rounded-t-3xl pt-14 pb-10">
      <Image src={BgCoffeeBeans} fill alt="footer background" />
      <div className="custom-container flex flex-col items-center">
        <LogoWithText />
        <p className={clsx(pacifico.className, 'text-white text-3xl mt-3')}>
          Sign up for our newsletter
        </p>
        <div className="flex flex-col gap-y-3 mt-14">
          <input type="text" className="rounded-full bg-transparent border-2 p-6 outline-none border-text-400" placeholder="Enter e-mail address" />
          <button type="button" className="bg-secondary flex items-center justify-center gap-x-2 hero-bnt-shadow rounded-full px-6 py-6 font-medium">
            Get Started <Image src={RightArrow} alt="" />
          </button>
          <p className="text-white text-sm mt-3">
            We care about your data. Read our <span className="text-secondary">Privacy Policy</span>
          </p>
        </div>
        <ul className="flex items-center gap-x-6 mt-20">
          <li>
            <Image src={FacebookIcon} alt="facebook icon" />
          </li>
          <li>
            <Image src={InstaIcon} alt="facebook icon" />
          </li>
          <li>
            <Image src={Twitter} alt="facebook icon" />
          </li>
        </ul>
        <p className="text-text-400 mt-8 text-sm">
          Copyright Bedimcode. All rights reserved
        </p>
      </div>
    </footer>
  )
}

const products = [
  {
    name: 'Classic Coffee',
    price: 17.90,
    img: '/images/products/product-coffee-1.png',
  },
  {
    name: 'Black coffee',
    price: 24.90,
    img: '/images/products/product-coffee-2.png',
  },
  {
    name: 'Strong coffee',
    price: 32.90,
    img: '/images/products/product-coffee-3.png',
  }
]

export const Step = ({ step, desc, img }) => {
  return (
    <div className="overflow-hidden">
      <div className="relative bg-primary-400 rounded-full w-40 h-40 flex flex-col items-center justify-center">
        <div className="bg-primary w-16 h-16 rounded-full absolute -top-2 -left-2 flex justify-center items-center">
          <div className="bg-secondary w-10 h-10 rounded-full flex justify-center items-center font-medium">
            {step}
          </div>
        </div>
        <Image src={step === '01' ? Step1 : step === '02' ? Step2 : Step3} alt="" />
      </div>
      <p className="text-white mt-4 w-64">
        {desc}
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ProductsSection />
        <AboutCoffeeSection />
        <section className="relative bg-primary pt-10 pb-20 rounded-t-3xl">
          <Image src={BgCoffeeBeansSteps} alt="" fill />
          <div className="custom-container flex flex-col items-center">
            <h4 className={clsx(pacifico.className, 'text-white text-3xl text-center')}>
              Steps of manufacturing our products
            </h4>
            {/* <div className="mt-32 relative w-full flex flex-col items-center">
              <Image src={SteppedLine} alt="" />
              <div className="absolute -top-20 left-0">
                <Step />
              </div>
              <div className="absolute top-52 -right-20">
                <Step />
              </div>
              <div className="absolute -bottom-52 left-0">
                <Step />
              </div>
            </div> */}
            <div className="relative flx flex-col mt-64 w-full">
              <Image src={SteppedLine} alt="" />
              <div className="absolute -top-40 w-full flex flex-col gap-y-16">
                <div className="">
                  <Step step="01" desc="Harvest occurs annually when the coffee beans reach maturity and are collected for processing." />
                </div>
                <div className="self-end">
                   <Step step="02" desc="The beans are dried using a wet or dry technique, depending on the taste we want to obtain." />
                </div>
                <div className="">
                  <Step step="03" desc="The coffee is roasted and acquires its flavor by processing the grain in ovens." />
                </div>
              </div>
            </div>
            <p className="text-white w-52 self-start mt-80">The coffee is roasted and acquires its flavor by processing the grain in ovens.</p>
          </div>
        </section>
        <TestimonialCoffeeSection />
      </main>
      <Footer />
    </>
  )
}
