(this.webpackJsonpfirtapp=this.webpackJsonpfirtapp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(3),c=a.n(r),o=(a(14),a(15),a(4)),i=a(5),m=a(7),u=a(6),s=a(1),E=a(8),h=(a(16),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this))).state={binario:"",decimal:0,carecterErro:"",convertSucess:""},a.converte=a.converte.bind(Object(s.a)(a)),a}return Object(E.a)(t,e),Object(i.a)(t,[{key:"converte",value:function(){var e=this.state.binario;if(null!==e.match(/[^0-1]/g))this.setState({carecterErro:"Somente 0 e 1"}),this.setState({convertSucess:""});else{this.setState({carecterErro:""});var t=parseInt(e,2);this.setState({decimal:t}),this.setState({convertSucess:"Convertido"})}console.log(this.state)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"conversor"},n.a.createElement("h2",null,"Binario para decimal"),n.a.createElement("input",{type:"text",onChange:function(t){e.setState({binario:t.target.value})}}),n.a.createElement("input",{type:"button",value:"converte",onClick:this.converte}),n.a.createElement("h2",null,this.state.decimal),n.a.createElement("h4",{className:"erro"},this.state.carecterErro),n.a.createElement("h4",{className:"sucesso"},this.state.convertSucess)),n.a.createElement("div",{className:"teoria"},n.a.createElement("h2",null,"Convers\xe3o Binario Decimal"),n.a.createElement("p",null,"A convers\xe3o de binaria decimal ou codifica\xe7\xe3o binaria \xe9 conhecida como BCD (Binary-coded decimal), \xe9 um sistema de numera\xe7\xe3o muito utilizado em inform\xe1tica. \xc9 um sistema de base 2. Nele, utilizamos dois algarismos: 0(zero) e 1(um)."),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Sistema Decimal"),n.a.createElement("td",null,"Sistema Bin\xe1rio")),n.a.createElement("tr",null,n.a.createElement("th",null,"0"),n.a.createElement("th",null,"0000")),n.a.createElement("tr",null,n.a.createElement("th",null,"1"),n.a.createElement("th",null,"0001")),n.a.createElement("tr",null,n.a.createElement("th",null,"2"),n.a.createElement("th",null,"0010")),n.a.createElement("tr",null,n.a.createElement("th",null,"3"),n.a.createElement("th",null,"0011")),n.a.createElement("tr",null,n.a.createElement("th",null,"4"),n.a.createElement("th",null,"0100")),n.a.createElement("tr",null,n.a.createElement("th",null,"5"),n.a.createElement("th",null,"0101")),n.a.createElement("tr",null,n.a.createElement("th",null,"6"),n.a.createElement("th",null,"0110")),n.a.createElement("tr",null,n.a.createElement("th",null,"7"),n.a.createElement("th",null,"0111")),n.a.createElement("tr",null,n.a.createElement("th",null,"8"),n.a.createElement("th",null,"1000")),n.a.createElement("tr",null,n.a.createElement("th",null,"9"),n.a.createElement("th",null,"1001")),n.a.createElement("tr",null,n.a.createElement("th",null,"10"),n.a.createElement("th",null,"1010")),n.a.createElement("tr",null,n.a.createElement("th",null,"100"),n.a.createElement("th",null,"1100100")))),n.a.createElement("p",null,"A convers\xe3o de binario para decimal utiliza o seguinte processo."),n.a.createElement("h3",null,"1 - Separa-se cada bit do n\xfamero bin\xe1rio:"),n.a.createElement("p",null,"1010 \u2192 1 - 0 - 1 - 0"),n.a.createElement("h3",null,"2 - Somam-se os produtos da base dois elevados a respectiva posi\xe7\xe3o:"),n.a.createElement("li",null,"a) 0 x 20 = 0"),n.a.createElement("li",null,"b) 1 x 21 = 2"),n.a.createElement("li",null,"c) 0 x 22 = 0"),n.a.createElement("li",null,"d) 1 x 23 = 8"),n.a.createElement("p",null,"Como trata-se de uma soma, tanto faz a sequencia dos resultados(0, 2, 0, 8), logo 0 + 2 + 0 + 8, que corresponde a 10 no sistema decimal."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,"Conteudo retidado de:",n.a.createElement("a",{href:"https://pt.wikipedia.org/wiki/Codifica%C3%A7%C3%A3o_bin%C3%A1ria_decimal"},"wikipedia"))))}}]),t}(l.Component));var d=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Convers\xe3o de base"),n.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f12d8aaf.chunk.js.map