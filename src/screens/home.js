import Footer from "../components/footer/footer";
import ContentBuyTree from "../components/home/home-content-buy-tree";
import ContentPrimary from "../components/home/home-content-primary";
import ContentSecondary from "../components/home/home-content-secondary";
import ContentThird from "../components/home/home-content-third";
import Navbar from "../components/home/home-navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <ContentPrimary />
      <ContentBuyTree />
      <ContentSecondary />
      <ContentThird />
      <Footer />
    </>
  );
}
