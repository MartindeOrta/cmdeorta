let select = document.querySelector('select');
let para =document.querySelector('p');

select.addEventListener('change',setWeather);

function setWeather(){
    let choice= select.value;

    switch (choice){
        case 'sunny':
            para.textContent='It is nice y sunny outside today. Wear short! Go to the beach, or the park, and get an ice cream.';
            break;
        case 'rainy':
            para.textContent='Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too loog.';
            break;
        case 'snowing':
        para.textContent = 'The snow is coming down - it is Freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
        break;
        case 'overcast':
            para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; is could turn any minute, so rain coat just in case,';
            break;
        default:
            para.textContent = '';
    }
}