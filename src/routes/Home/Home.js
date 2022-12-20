import { Link, Route, Routes } from "react-router-dom";
import Layout from '../../components/Layout';
import HeroSection from '../../components/sections/HeroSection';
import PartnerSection from '../../components/sections/PartnerSection';
import CreditCardSection from '../../components/sections/CreditCardSection';
import TradingToolsSection from '../../components/sections/TradingToolsSection';
import SecuritySection from '../../components/sections/SecuritySection';
import StepSection from '../../components/sections/StepSection';
import FaqSection from '../../components/sections/FaqSection';
import BackToTopSection from '../../components/sections/BackToTopSection';

function Home() {
  return (
    <Layout>
      <HeroSection />
      {/* <CryptocurrencySection /> */}
      {/* <BuyAndTradeSection /> */}
      <PartnerSection />
      <CreditCardSection />
      <TradingToolsSection />
      <SecuritySection />
      <StepSection />
      <FaqSection />
      <BackToTopSection />
    </Layout>
  );
}


  export default Home; 