export class Pag404page{
    logoImage(){
        return cy.get("img[alt='Logo Turismo']")
    }

    home(){
        return cy.get("li:nth-child(1) a:nth-child(1)") 
    }
    
    eventos(){
        return cy.get("a[href='/eventos']") 
    }

    gastronimia(){
        return cy.get("a[href='/gastronomia']") 
    }

    hospedaje(){
        return cy.get("a[href='/hospedaje']") 
    }

    imagenFondo(){
        return cy.get("img[alt='Página no encontrada']")
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