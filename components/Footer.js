// components/Footer.js
const Footer = () => {
  return (
      <footer className="bg-slate-950 text-white py-4 mx-8 px-8 rounded-xl">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Astroblog. Todos os direitos reservados.
          <div className="text-gray-400">Desenvolvido por Hudson Lima</div>
        </div>
      </footer>
  );
};

export default Footer;
