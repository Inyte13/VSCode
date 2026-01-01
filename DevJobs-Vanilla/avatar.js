class DevJobsAvatar extends HTMLElement{ // 
  constructor(){
    super()
    this.attachShadow({mode: "open"}) // Sirve para apartar del DOM
  }
  render(){
    // Usamos shadowRoot para acceder al Shadow DOM
    this.shadowRoot.innerHTML=`
    <img src="" alt="Avatar" class="avatar" style="width: 40px; height: 40px; border-radius: 100%;"/>`
  }
// Cuando el render se añada al DOM, llamamos a render()
  connectedCallback(){
    this.render()
  }
}
customElements.define("devjobs-avatar",DevJobsAvatar)