export default function CardMeal({name, image, ingredients, instructions}){
    return (
        <article className="recipe-card-item"> 
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <ul>
                {ingredients.map((ingr, index) => 
                    <li key={index}>{ingr}</li>
                )}
            </ul>
            <p>{instructions}</p>
        </article>
    );
}