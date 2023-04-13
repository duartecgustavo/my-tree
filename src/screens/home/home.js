import Navbar from '../../components/home/home-navbar';
import ContentPrimary from '../../components/home/home-content-primary';
import ContentSecondary from '../../components/home/home-content-secondary';
import Footer from '../../components/footer/footer'
import ContentThird from '../../components/home/home-content-third';

export default function Home() {
    return (
        <>
            <Navbar />
            <ContentPrimary />
            <ContentSecondary />
            <ContentThird />
            <Footer />
        </>
    )
}