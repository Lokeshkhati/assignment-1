import Hero from "@/components/Hero";
import PrimaryFeatures from "@/components/PrimaryFeatures";
import SecondaryFeatures from "@/components/SecondaryFeatures";
import { Pricing } from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Reviews from "@/components/Reviews";
import ToolsIntegration from "@/components/ToolsIntegration";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    < >
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <ToolsIntegration />
      <Faqs />
      <Pricing />
      <Reviews />
      <CallToAction />
    </>
  )
}
