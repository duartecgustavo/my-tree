import Footer from '../components/footer/footer';
import Navbar from '../components/home/home-navbar';
import InfosTabs from '../components/informacoes-de-cuidado/infos-tabs';
import InfosContent from '../components/informacoes-de-cuidado/infos-content';
import { useSelectedInfos } from '../hooks/useSelectedInfos';
import { textoAdubagem, textoDefault, textoJardinagem, textoLocaisAridos, textoOrquideas, textoVerduras } from '../components/informacoes-de-cuidado/contents';
import { Chat } from '../components/informacoes-de-cuidado/infos-chat';

export default function InformacoesDeCuidado() {

    const { infos } = useSelectedInfos();
    let text = [];
    let baseVideo = 'https://www.youtube.com/embed/';
    let video = '';

    switch (infos) {
        case "orquidia":
            text = textoOrquideas;
            video = `${baseVideo}z_vPvK6nDu8`
            break;
        case "jardinagem":
            text = textoJardinagem;
            video = `${baseVideo}CSwnRUCs5gA`
            break;
        case "adubagem":
            text = textoAdubagem;
            video = `${baseVideo}CSwnRUCs5gA`
            break;
        case "arido":
            text = textoLocaisAridos;
            video = `${baseVideo}m1ZOFStR4MA`
            break;
        case "verduras":
            text = textoVerduras;
            video = `${baseVideo}lOiAYi3taEo`
            break;
        default:
            text = textoDefault;
            break;
    }

    return (
        <>
            <Navbar />
            <InfosTabs />
            <InfosContent title={infos} content={text} video={video} />
            <Chat />
            <Footer />
        </>
    )
}