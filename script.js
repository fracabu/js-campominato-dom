/*
-Creare una griglia 8*8
-al click su una cella devo controllare se c'è la bomba
    -se si il gioco finisce
    -altrimenti l'utente può cliccare su un'altra cella
*/

/*
-funzione che genera griglia 8*8
    -creo un array con X numeri random che rappresentano le bombe
    -per fare l'array creo una funzione che genera numeri random unici
    -creo una variabile dove salvare il numero totale di celle create
    -in base al numero di celle da creare,con un ciclo
        -creo l'html di ogni cella
        -appendo l'html alla griglia
        -aggiungo un eventListener sul click
            -al click controllo se la cella è una bomba
            -il numero (indice array) della cella cliccata fa parte dell'array delle bombe?
                -se si è una bomba mostro alert game over
                -altrimenti  non è una bomba l'utente continua a cliccare

*/

//Genera un array con numeri random unici

function generateBombsList(){

}


// matematica e logica per far funzionare la griglia

function generateGrid (){
    const totCells = 8 * 8;
    const bombsList = generateBombsList();

    renderGrid(totCells, bombsList)
}

//stampa solo la griglia in html

function renderGrid (totCells, bombsList){
    const gridContainer=document.querySelector(".grid-container");
    // Ciclo per creare il numero di celle previsto
    for (let i = 0; i < totCells; i++){
        //creo una cella html
        const cell = document.createElement('div');
        cell.classList.add('cell');

        //aggiungo la cella alla griglia
        gridContainer.append(cell);

    }

}