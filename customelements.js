class SiennaElement extends HTMLElement{
connectedCallback(){
this.innerHTML = "Sienna was here"; 
}
}

customElements.define("x-sienna", SiennaElement);