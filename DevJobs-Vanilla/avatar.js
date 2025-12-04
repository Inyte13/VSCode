class DevJobsAvatar extends HTMLElement{ // 
  constructor(){
    super()
    this.attachShadow({mode: "open"}) // Sirve para apartar del DOM
  }
  render(){
    // Usamos shadowRoot para acceder al Shadow DOM
    this.shadowRoot.innerHTML=`
    <img src="https://media.licdn.com/dms/image/v2/D4E03AQH2aKgTN3Xv8Q/profile-displayphoto-shrink_200_200/B4EZTuSgpTHgAY-/0/1739164618694?e=2147483647&v=beta&t=ctoIzpUijuUHWbhXd_C7qiSptzgVkzRBB1UNNye17U8" alt="Avatar de Oriana" class="avatar" style="width: 40px; height: 40px; border-radius: 100%;"/>`
  }
// Cuando el render se añada al DOM, llamamos a render()
  connectedCallback(){
    this.render()
  }
}
customElements.define("devjobs-avatar",DevJobsAvatar)