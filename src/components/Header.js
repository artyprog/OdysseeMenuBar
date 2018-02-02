import Vue from 'vue';
import displayMegaMEnu from './MegaMenu'
import 'w3-css/w3.css';
import '../site.css';

function logo (h) {
  return (
    <svg height="24" width="24" fill="#ffffff" viewBox="0 0 24 24">
    <path d="M23.846 1.979L18.895 0 8.125 10.5 1.57 5.49l-1.424.705v11.64l1.41.69 6.555-4.995L18.906 24l4.948-1.949V1.995l-.012-.016h.004zM2.275 14.729V9.271l3.03 2.699-3.03 2.745v.014zm9.721-2.744L18.07 7.44v9.121l-6.074-4.576z" />
    </svg>
  )
}

function hamburger (h) {
  return (
      <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  )
}

function topBar (h, comp) {
  return (
    <div class="w3-blue">
      <div class="wrap-header">
        <div class="wrap-logo">
          <div class="logo-item" onClick={comp.hamburgerClick}>{hamburger(h)}</div>
          <div class="logo-item">{logo(h)}</div>
          <div class="title">{comp.title}</div>
        </div>
        <div class="wrap-input">
          <div class="innerleft">Anomalies</div>
          <input type="text" />
          <div class="innerright">
            <div class="search">&nbsp;</div>
          </div>
        </div>
        <div class="wrap-right">
          MENU
        </div>
      </div>
    </div>
  )
}

// Function renvoyant le composant à afficher.
function Header () {

  return Vue.component("m-h", {

    props : ['title'],

    data () {
      return {
        showMegaMenu : false 
      }
    },

    methods : {
      hamburgerClick () {
        this.showMegaMenu = !this.showMegaMenu;
      }
    },    

    render (h) {
      return (
        <div> 
          {topBar(h, this) }
          {this.showMegaMenu && displayMegaMEnu(h, this)}
        </div>
      )}
  })
}

export default Header;