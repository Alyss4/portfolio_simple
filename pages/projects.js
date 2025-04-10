const projets = [
  {
    titre: 'Projet Jardin Connecté',
    description: 'Un jardin vertical automatisé avec capteurs et Raspberry Pi.',
  },
  {
    titre: 'ToDo App',
    description: 'Une application de gestion de tâches avec React et Firebase.',
  },
  {
    titre: 'Portfolio',
    description: 'Ce portfolio créé avec Next.js.',
  },
  {
    titre: 'API Météo',
    description: 'Affichage de la météo avec une API externe en temps réel.',
  },
];

export default function Projets() {
  return (
    <div className="projects">
      <h1>Mes Projets</h1>
      <div className="grid">
        {projets.map((projet, index) => (
          <div key={index} className="card">
            <h2>{projet.titre}</h2>
            <p>{projet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
