import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
    window.cardFrontBack = {};
    window.cardFrontBack.handleClick = (event) => {
        const $cardFrontBack = event.target.closest('.card-front-back');
        $cardFrontBack.classList.toggle('-active');
        // console.log(event.target);
    }
    
    return /*html*/`
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("javascript", "Logo do JS")}
            </div>
        </article>

    `

}
export default CardFrontBack;
