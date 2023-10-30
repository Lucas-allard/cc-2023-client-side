import React from "react";

const Contact = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quam modi
        voluptates eveniet deleniti nesciunt saepe est nisi illo deserunt?
      </p>
      <div className="border-solid border-2">
        <span>Contact par mail</span>
        <span>Envoyer un message</span>
      </div>
      <div className="border-solid border-2">
        <span>Contact par téléphone</span>
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
      <div className="flex flex-wrap">
        <div className="flex space-x-4">
          <h4>Disponibles 5/7</h4>
        </div>
        <div>
          <h4>Démarche Responsable</h4>
        </div>
        <div>
          <h4>Des guides-explorateurs</h4>
        </div>
        <div>
          <h4>Matériel de qualité</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
