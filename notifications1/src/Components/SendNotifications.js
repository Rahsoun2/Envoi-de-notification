import React, { useState } from "react";
import "./SendNotification.css";

function SendNotificationForm() {
  // Définir les états pour les champs du formulaire
  const [nomEleve, setStudentName] = useState("");
  const [nomParent, setParentName] = useState("");
  const [description, setDescription] = useState("");
  const [sanction, setSanction] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

     // Envoyer les données à Affichage.jsx
     const data = { nomParent, nomEleve, description, sanction };
     localStorage.setItem('formData', JSON.stringify(data));
     window.location.href = './parent.js';
    
    // console.log("Nom de l'élève:", nomEleve);
    // console.log("Nom du Parent:", nomParent);
    // console.log("Description:", description);
    // console.log("Sanction:", sanction);
    // alert(`bonjour mr ${nomParent}`);
  };

  // Fonction pour effacer les champs du formulaire
  const handleReset = () => {
    setStudentName('');
    setParentName('');
    setDescription('');
    setSanction('');
  };

  return (
    <div className="container">
      <h2>Envoi de Notification</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input">
          <label htmlFor="eleve">Nom de l'élève :</label>
          <input
            type="text"
            id="eleve"
            value={nomEleve}
            onChange={e => setStudentName(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="parent">Nom du Parent :</label>
          <input
            type="text"
            id="parent"
            value={nomParent}
            onChange={e => setParentName(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="description">Description: </label>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="sanction">Sanction :</label>
          <textarea
            type="text"
            id="sanction"
            value={sanction}
            onChange={e => setSanction(e.target.value)}
          />
        </div>
        <div className="submit-container">
          <button type="submit">Envoyer</button>
          <button type="button" onClick={handleReset}>Effacer</button>
        </div>
      </form>
    </div>
  );
}

export default SendNotificationForm;
