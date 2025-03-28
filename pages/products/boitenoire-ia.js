import ProductPage from "../../components/products/ProductPage"
import Layout from "../../components/Layout"

export default function Produit() {
  const produit = {
    docsList: ['appel-commentaires-cartes-boitenoire'],
    nom: 'La Boîte Noire de l\'IA',
    baseline: 'Un jeu pédagogique pour comprendre l\'IA et se former un avis éclairé',
    description: `À l'heure où les débats et ateliers sur l'Intelligence Artificielle se multiplient partout, une question s'impose : comment se positionner face à une technologie que même les experts peinent à suivre ? Pour la plupart d'entre nous, l'IA reste une boîte noire opaque qui fascine autant qu'elle inquiète.
    <br></br><br></br>
    <strong>La Boîte Noire de l'IA</strong> est un jeu pédagogique qui accompagne le grand public pour :
    <ul>
      <li>Comprendre le fonctionnement d'une IA générative de texte, en resituant son cycle de vie depuis l'extraction des minéraux jusqu'au coût énergétique des data centers</li>
      <li>Débattre des conséquences sociétales, environnementales et éthiques des IA</li>
      <li>Faire des choix en conscience de nos usages de cette technologie</li>
    </ul>
    <br></br>
    Notre conviction : on ne peut pas se positionner face aux enjeux de l'IA sans comprendre sa fabrique et son fonctionnement.
    <br></br><br></br>
    <strong>Nos partis pris :</strong>
    <ul>
      <li>Accessibilité à toutes et tous : l'atelier ne nécessite pas de pré-requis sur l'IA</li>
      <li>Pédagogie active, écoute et dialogue loin des discours d'experts</li>
      <li>Frugalité, adaptabilité et reproductibilité du format</li>
      <li>Focus sur l'IA générative, la technologie au centre de toutes les attentions</li>
      <li>Un contenu équilibré entre la découverte du cycle de vie d'une IA et l'explication du fonctionnement d'un modèle</li>
      <li>Un format d'animation adapté à des groupes de 7 personnes</li>
      <li>Développé par et pour les professionnels du réseau de la médiation numérique</li>
    </ul>
    <br></br>
    <em>Ouvrez la boîte, révélez les dessous de l'IA et formez-vous un avis éclairé sur l'IA générative !</em>`,
    imageUrl: '/images/products/boite_boite.png',
    targets: [
      '👥 Tout citoyen qui désire découvrir l\'IA',
      '🎯 Des médiateurs numériques qui souhaitent sensibiliser aux enjeux sociaux et environnementaux de l\'IA',
      '📊 Tout acteur politique, économique, associatif ou universitaire en prise avec les problématiques d\'IA'
    ],
    partis_pris: [
      'Accessibilité à toutes et tous : l\'atelier ne nécessite pas de pré-requis sur l\'IA',
      'Pédagogie active, écoute et dialogue loin des discours d\'experts',
      'Frugalité, adaptabilité et reproductibilité du format',
      'Focus sur l\'IA générative, la technologie au centre de toutes les attentions',
      'Un contenu équilibré entre la découverte du cycle de vie d\'une IA et l\'explication du fonctionnement d\'un modèle',
      'Un format d\'animation adapté à des groupes de 7 personnes',
      'Développé par et pour les professionnels du réseau de la médiation numérique'
    ],
    partnersIds: ['nantes-metropole'],
    testimonials: [],
    liens: [
      {url: 'mailto:contact@datactivist.coop?subject=Demande d\'informations - La Boîte Noire de l\'IA', texte: '✉️ Nous contacter pour en savoir plus'}
    ]
  }
  
  return (
    <Layout>
    <br></br>
    <ProductPage {...produit} />
    </Layout>
  )
}
