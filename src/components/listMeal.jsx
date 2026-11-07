import CardMeal from './cardMeal.jsx';

export default function ListMeal({resultApi}){
    //console.log(resultApi);
   if(!resultApi || resultApi.length == 0){
        return <p>No result</p>
    }
    return (
        <article className="mealsResult">
            {resultApi.map((oneReceipe) => (
                <CardMeal key={oneReceipe.idMeal} name={oneReceipe.name} image={oneReceipe.image} ingredients={oneReceipe.ingredients} instructions={oneReceipe.instructions}></CardMeal>
            ))}
        </article>
    );
}