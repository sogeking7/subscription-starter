import Pricing from '@/components/ui/Pricing/Pricing';
import { createClient } from '@/utils/supabase/server';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Script from 'next/script';
import Link from 'next/link';


export default async function PricingPage() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase)
  ]);

  return (
    <div>
      {/* Hero Section */}
      <div className="background-image h-[calc(100dvh)] flex items-center justify-center bg-cover bg-center">
        <div className="text-center space-y-4 bg-black bg-opacity-60 p-8 rounded-lg flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold text-white sm:text-6xl">Welcome to FitAI</h1>
          <p className="text-2xl text-white">Your AI-powered fitness platform to achieve your goals.</p>
          <Link href="#pricing">
            <Button>See Our Plan</Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section id="featuresSection" className="py-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold sm:text-6xl">Our Features</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto px-6">
            We use the latest AI technology to provide personalized fitness plans tailored to your individual needs, helping you achieve your health and fitness goals faster and smarter.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto px-6">
          <div className="feature bg-zinc-900 shadow-lg rounded-lg p-6 max-w-sm text-center h-[400px]">
            <Image src="/workout_plan.jpg" alt="Personalized Workout Plans" width={200} height={200} className="mx-auto rounded-md" />
            <h3 className="text-2xl font-semibold text-white mt-4">Personalized Workout Plans</h3>
            <p className="text-gray-300 mt-2">Create customized workouts that fit your schedule and fitness level.</p>
          </div>
          <div className="feature bg-zinc-900 shadow-lg rounded-lg p-6 max-w-sm text-center h-[400px]">
            <Image src="/eat.jpg" alt="AI-Driven Nutrition Advice" width={200} height={200} className="mx-auto rounded-md" />
            <h3 className="text-2xl font-semibold text-white mt-4">AI-Driven Nutrition Advice</h3>
            <p className="text-gray-300 mt-2">Receive nutrition plans designed to fuel your fitness journey.</p>
          </div>
          <div className="feature bg-zinc-900 shadow-lg rounded-lg p-6 max-w-sm text-center h-[400px]">
            <Image src="/coach.jpg" alt="24/7 Virtual Coach" width={200} height={200} className="mx-auto rounded-md" />
            <h3 className="text-2xl font-semibold text-white mt-4">24/7 Virtual Coach</h3>
            <p className="text-gray-300 mt-2">Get guidance and support anytime you need it, right from your device.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="aboutSection" className="py-16 bg-zinc-900 text-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold sm:text-6xl">About Us</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto px-6">
            At AI Fitness Platform, we are dedicated to transforming the way people achieve their health and fitness goals. Our team of experts leverages cutting-edge AI technology to provide personalized fitness plans tailored to your individual needs.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto px-6">
          <div className="team-member bg-zinc-900 rounded-lg p-6 max-w-sm text-center">
            <Image src="/hacker.png" alt="Adiletali Abikenov" width={200} height={200} className="aspect-square mx-auto rounded-full" />
            <h3 className="text-2xl font-semibold mt-4">Adiletali Abikenov</h3>
            <p className="text-gray-400 mt-2">Co-Founder & Fitness Expert</p>
          </div>
          <div className="team-member bg-zinc-900 rounded-lg p-6 max-w-sm text-center">
            <Image src="/hacker.png" alt="Adil Zhalgas" width={200} height={200} className="aspect-square mx-auto rounded-full" />
            <h3 className="text-2xl font-semibold mt-4">Adil Zhalgas</h3>
            <p className="text-gray-400 mt-2">Co-Founder & Nutritionist</p>
          </div>
          <div className="team-member bg-zinc-900 rounded-lg p-6 max-w-sm text-center">
            <Image src="/hacker.png" alt="Tamerlan Tastanbek" width={200} height={200} className="aspect-square mx-auto rounded-full" />
            <h3 className="text-2xl font-semibold mt-4">Tamerlan Tastanbek</h3>
            <p className="text-gray-400 mt-2">AI Specialist</p>
          </div>
        </div>
        <p className="text-center mt-10 text-lg">Join us on this journey to a healthier you!</p>
      </section>

      {/* Pricing Section */}
      <div className="relative z-10 flex items-center justify-center h-full py-16 ">
        <Pricing
          user={user}
          products={products ?? []}
          subscription={subscription}
        />
      </div>

      <Script id="chatbase-config" strategy="afterInteractive">
        {`
          window.embeddedChatbotConfig = {
            chatbotId: "8p8Ba_D2-BPH7qeDwB7oo",
            domain: "www.chatbase.co"
          };
        `}
      </Script>

      <Script
        src="https://www.chatbase.co/embed.min.js"
        /*@ts-ignore*/
        chatbotId="8p8Ba_D2-BPH7qeDwB7oo"
        domain="www.chatbase.co"
        defer
        strategy="afterInteractive"
      />
    </div>
  );
}
