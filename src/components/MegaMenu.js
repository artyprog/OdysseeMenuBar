
import 'w3-css/w3.css';

let menuItems = new Map ();

let V = new Map();



V.set("k", {
  icon: "h",
  items: []
});


let icn_diriger = function (h) {
  return (
    <svg style={{ "width": "24px", "height": "24px" }} 
      viewBox="0 0 24 24">
      <path d="M14.19,14.19L6,18L9.81,9.81L18,6M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,10.9A1.1,1.1 0 0,0 10.9,12A1.1,1.1 0 0,0 12,13.1A1.1,1.1 0 0,0 13.1,12A1.1,1.1 0 0,0 12,10.9Z" />
    </svg>
  )
}

let icn_preserver = function (h) {
  return ( 
    <svg version="1.1">
       <path id="myPath" style={{ "fontFamily": "Verdana", "marginBottom": "10px", "WebkitTransition": "all", "msTransition": "all" }} />
    </svg>
  )
}

let icn_appuyer = function (h) {
  return (
    <svg viewBox="0 0 24 24">
        <path d="M23.294,11.901l-1.375-0.793C21.973,10.734,22,10.363,22,10c0-0.363-0.027-0.734-0.081-1.107l1.375-0.794&#xA;          c0.229-0.132,0.398-0.351,0.466-0.608c0.068-0.257,0.033-0.529-0.1-0.759l-2-3.463c-0.277-0.478-0.887-0.643-1.366-0.367&#xA;          l-1.378,0.795C18.33,3.24,17.684,2.865,17,2.586V0.999c0-0.552-0.447-1-1-1h-4c-0.553,0-1,0.448-1,1v1.586&#xA;          C10.316,2.864,9.67,3.24,9.084,3.697L7.706,2.902c-0.229-0.133-0.503-0.168-0.759-0.1C6.691,2.87,6.473,3.038,6.34,3.267l-2,3.464&#xA;          c-0.275,0.478-0.112,1.09,0.365,1.366l1.376,0.795C6.027,9.265,6,9.636,6,10c0,0.363,0.027,0.734,0.081,1.108l-1.375,0.793&#xA;          c-0.229,0.133-0.398,0.35-0.466,0.607c-0.068,0.257-0.033,0.529,0.1,0.759L4.763,14H6l4-1l3,3v1h4.842&#xA;          c0.374-0.206,0.736-0.434,1.074-0.697L20.125,17h1.298c0.091-0.074,0.175-0.16,0.237-0.268l2-3.464&#xA;          c0.133-0.23,0.168-0.502,0.1-0.759C23.691,12.252,23.523,12.034,23.294,11.901z M14,12c-1.106,0-2-0.896-2-2s0.894-2,2-2&#xA;          c1.104,0,2,0.896,2,2S15.104,12,14,12z" />
        <path d="M19.924,18.617C19.77,18.244,19.404,18,19,18h-8.586l0.293-0.293c0.391-0.391,0.391-1.024,0-1.414l-1-1&#xA;          C9.424,15.01,9,14.923,8.629,15.071L5,16.521V23h11c0.266,0,0.52-0.105,0.707-0.293l3-3C19.993,19.42,20.078,18.991,19.924,18.617&#xA;          z" />
        <path d="M3,15H1c-0.553,0-1,0.448-1,1v7c0,0.553,0.447,1,1,1h2c0.553,0,1-0.447,1-1v-7C4,15.448,3.553,15,3,15z" />
    </svg>
  )
}

menuItems.set ("diriger",  { 
  icon: icn_diriger,
  items : [
    "Objectifs & plan d'actions", 
    "Tableau de bord", 
    "Risques", 
    "Offre de services"
  ]
});

menuItems.set("ameliorer", {
  icon: "",
  items: [
    "Anomalies",
    "Améliorations",
    "Métadoc",
    "Programme d'audit",
    "Rapports d'audit",
    "Satisfaction client"
  ]
});


menuItems.set("preserver", {
  icon: "",
  items: [
   "DUERE",
   "Registre des déchets",
   "Exposition/risque"
  ]
});

menuItems.set("traiterdemande", {
  icon: "",
  items: [
    "Clients/Fournisseurs",
    "Saisie des commandes",
    "Suivi de commandes",
    "Devis",
    "Programmes d'essais"

  ]
});


function createEntryMenu (h, title, key) {
  return (
    <div>
      <div class="w3-text-blue">{title}</div>
      <div>
        {menuItems.get(key).items.map(l => <li>{l}</li>) }    
      </div>
    </div>
  )
}

// h: injecter automatiquement par VueJS <=> createElement
// comp <=> composant Header
function displayMegaMenu (h, comp) {
  return (
    <div class="megaMenu">      
        <ul class="ulmenu">
          <li>{createEntryMenu(h, "DIRIGER", "diriger")}</li>
          <li>{createEntryMenu(h, "AMELIORER", "ameliorer")}</li>
        </ul>
        <ul class="ulmenu">
          <li>{createEntryMenu(h, "PRESERVER", "preserver")}</li>
          <li>{createEntryMenu(h, "TRAITER LA DEMANDE", "traiterdemande")}</li>
          <li>ANALYSER</li>
        </ul>     
        <ul class="ulmenu">
          <li>APPUYER</li>
          <li>COOPERER</li>
          <li>DEVELOPPER</li>
          <li>MOYENS HUMAINS</li>
        </ul>   
        <ul class="ulmenu">
          <li>MOYENS D''EXPLOITATION</li>
          <li>COOPERER</li>
          <li>DEVELOPPER</li>
          <li>MOYENS HUMAINS</li>
        </ul>             
    </div>
  )
}


export default displayMegaMenu;