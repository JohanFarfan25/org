import "./Footer.css";
const Footer = ()=>{
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer_.png)"}}>
        <div className="redes">
        <a href='https://www.facebook.com/JohanFarfanSierra/'> 
            <img src="/img/facebook.png" alt="Facebook"/>
        </a>
        <a href='https://twitter.com/JOHANFARFAN/'> 
            <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href='https://www.instagram.com/johanfarfansierra/'> 
            <img src="/img/instagram.png" alt="instagram" />
        </a>
        </div>
        <img src='/img/Logo.png' alt='org' /> 
        <strong>Desarrollado por Johan Farfan</strong>
    </footer>
}
export default Footer;