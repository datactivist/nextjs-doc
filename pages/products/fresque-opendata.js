import ProductPage from "../../components/products/ProductPage"
import Layout from "../../components/Layout"

export default function Produit() {
  const produit = {
    docsList: ['livret-fresque-opendata','cartes-fresque-opendata','lexique-opendata','fresque-opendata-images','fresque-cd-93','fresque-donnees-territoriale'],
    nom: 'Fresque des données ouvertes',
    baseline: 'Sensibilisez tous les publics à l‘ouverture des données',
    description: `La fresque des données ouvertes a pour but de rendre compréhensibles les tenants et aboutissants 
    de l’open data, de rappeler les bases historiques, le cadre réglementaire existant en France, ainsi que les 
    bénéfices qui découlent de cette démarche d’open data.
    <br></br>
    Elle est réalisée lors d'un <b>atelier avec différentes équipes</b>, à l'aide notammment d'un jeu de cartes et de carnets de bord
    <br></br>
    Les équipes sont challengées par les animateurs, pour faire avancer les échanges et aboutir à la fresque.`,
    imageUrl: '/images/products/fresque-opendata.webp',
    targets: ['👩‍🏫 Novices en matière de données, y compris les personnes n‘en manipulant pas', '🧑🏻‍💻 Agents publics qui manipulent déjà des données', '🧑‍💼 Personnes en charge d‘une stratégie data'],
    partnersIds: ['bercy-hub'],
    testimonials: [
      {text: "J’ai été très impressionné par ce qu’on fait, on a su travailler en intelligence collective et on a construit ensemble quelque chose de logique.", author: "Participant•e - BercyHub"},
      {text: "C’était ludique. On a fait ensemble et on retient.", author: "Participant•e - BercyHub"},
      {text: "J’ai beaucoup aimé, c’était très ludique, pas du tout descendant. Et puis on a appris sans s’en rendre vraiment compte, on était proactif.", author: "Participant•e - BercyHub"},
      {text: "C’est vraiment bien, on voit l’ensemble du process et pas juste les résultats de l’open data, ça permet de bien clarifier.", author: "Participant•e - BercyHub"},
      {text: "Avant l’atelier, j’avais un peu peur de venir parce que je n’y connais rien en data. En fait c’est vraiment accessible", author: "Participant•e - BercyHub"},
      {text: "C’est très créatif et collectif. On échange beaucoup entre nous.", author: "Participant•e - BercyHub"}

    ],
    liens: [
        {url: 'https://medium.com/datactivist/open-data-la-fresque-des-donn%C3%A9es-ouvertes-pour-sensibiliser-tous-les-publics-71f1220e8450', texte: '🔎 Lire notre article complet'},
        {url: 'mailto:ventes@datactivist.coop?subject=Demande d\'informations - fresque des données ouvertes', texte: '✉️ Nous contacter pour en savoir plus'},
      ]
  }

  return (
    <Layout>
    <br></br>
    <ProductPage {...produit} />
    </Layout>
  )
}
