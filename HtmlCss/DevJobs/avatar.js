class DevJobsAvatar extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode: "open"}) // Sirve para apartar del DOM
  }
  render(){
    // Usamos shadowRoot por que abrimos el Shadow un DOM aparte
    this.shadowRoot.innerHTML=`
    <img src="https://unavatar.io/github/inyte13" alt="Avatar de Inyte13" class="avatar" style="width: 40px; height: 40px; border-radius: 100%;"/>`
  }
// Le decimos que cuando el render se añada al DOM, llamamos a render()
  connectedCallback(){
    this.render()
  }
}
customElements.define("devjobs-avatar",DevJobsAvatar)