import Footer from "../ui/Footer";
import HeaderNav from "../ui/HeaderNav"
import Carousellogo from "./Carousellogo";
import { Video, VideoSosmed } from "./Video"


const PortfolioPage = () => {
  return (
    <>
      <HeaderNav
        Title="Portfolio Vidio"
        Caption="Melalui portofolio kami, Anda dapat melihat bagaimana inovasi dan kreativitas menyatu untuk memperkuat sektor pariwisata dan ekonomi kreatif. Kami telah bekerja sama dengan berbagai mitra untuk mengembangkan strategi iklan yang efektif, membantu meningkatkan eksposur dan daya tarik destinasi wisata, serta membangun brand yang kuat."
      />
      <div data-testid="CarousellogoTest"><Carousellogo/></div>
      <div data-testid="Videotest"><Video/></div>
      <div data-testid="Videososmed"><VideoSosmed/></div>
      <div data-testid="Footer"></div> <Footer/> <div/>
    </>
  )
}
export default PortfolioPage;