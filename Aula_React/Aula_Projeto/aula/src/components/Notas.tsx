type Props = {
    numero:number;
}
export const Notas = ({numero} : Props) => {
    if(numero > 5 ) numero = 5;
    if(numero < 0 ) numero = 0;

    const rateInt = Math.floor(numero);
    const emojis = ['','🙁','😒','😐','😊','😁'];
    
    const stars = `${emojis[rateInt]}`.repeat(rateInt) + '😑'.repeat(5 - rateInt);



    return(
        <div className=" flex items-center text-6xl">
           <div className="bg-gray-700 p-2 rounded">{numero.toFixed(1)}</div>
           <div className="ml-3">{stars}</div>
        </div>
       
    )
}