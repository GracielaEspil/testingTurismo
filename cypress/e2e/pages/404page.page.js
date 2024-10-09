export class Pag404page{
    


    textoerror(){
        return cy.get("h1[class='text-[#E65829] font-arima text-4xl font-bold leading-[65px] mb-4 text-center relative z-10']")
    }

    btVolver(){
        return cy.get(".btnhome")
    }

    textoH2(){
        return cy.get("section[class='divcontainer'] h2")
    }

    textoH3(){
        return cy.get("section[class='divcontainer'] h3")
    }


    piePagina(){
        return cy.get("footer[class='w-full bg-[#CBD5E1] text-white py-6 mt-auto']")
    }


}