import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-amber-400 text-white">
      <div className="flex flex-col justify-between items-center gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-bold">À propos</p>
          <a href="http://">L'histoire et l'équipe</a>
          <a href="http://">Nos guides explorateurs</a>
          <a href="http://">Confidentialité et mentions</a>
          <a href="http://">Conditions générales de vente</a>
          <a href="http://">Conditions générales d'utilisation</a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-bold">Services</p>
          <a href="http://">Rejoins-nous</a>
          <a href="http://">Agence</a>
          <a href="http://">FAQ</a>
          <a href="http://">Préférences cookies</a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-bold">Blog</p>
          <a href="http://">Podcasts</a>
          <a href="http://">Histoires d'explorateurs</a>
          <a href="http://">Conseils et préparation</a>
          <a href="http://">Actus</a>
          <a href="http://">Engagement Responsable</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
