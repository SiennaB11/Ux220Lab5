class SiennaElement extends HTMLElement{
connectedCallback(){
this.innerHTML = "Sienna was here"; 
}
}

customElements.define("x-sienna", SiennaElement);

class CenterElement extends HTMLElement{
connectedCallback(){
this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>
`;

}
}

customElements.define("x-center", CenterElement);

class YearElement extends HTMLElement{
connectedCallback(){
this.innerHTML = new Date().getFullYear();

}
}

customElements.define("x-fullyear", YearElement);

class TextElement extends HTMLElement{
connectedCallback(){
this.innerHTML = `<div style="text-align:right">${this.innerHTML}</div>
`;
this.innerHTML = `<div style="color:Magenta">${this.innerHTML}</div>
`;

}
}

customElements.define("x-text", TextElement);