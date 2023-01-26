$(window).scroll(function () {

    if ($(this).scrollTop() > 100) {
        $('.nav').addClass('nav_bg', 1000, "easeOutBounce")
    } else {
        $('.nav').removeClass('nav_bg', 1000, "easeOutBounce")
    }

})


/* movie data */
let movies = [
    {
        name: 'Milli',
        image: 'images/milli.webp',
        time: '1h 45m',
        trailer: 'https://youtu.be/RX9sn_BRxZs'
    },
    {
        name: 'Money Heist',
        image: 'images/money-heist.jpg',
        time: '1h 20m',
        trailer: 'https://youtu.be/_InqQJRqGW4'
    },
    {
        name: 'Dictator',
        image: 'images/dictator.webp',
        time: '1h 20m',
        trailer: 'https://youtu.be/cYplvwBvGA4'
    },
    {
        name: 'Secred Games',
        image: 'images/secred-games.jpg',
        time: '1h 20m',
        trailer: 'https://youtu.be/AkUgf2jIPyI'
    },
    {
        name: 'Friends',
        image: 'images/friends.webp',
        time: '1h 20m',
        trailer: 'https://youtu.be/LTpmw0Ac6Zs'
    },
    {
        name: 'Fauda',
        image: 'images/fauda.jpg',
        time: '1h 20m',
        trailer: 'https://youtu.be/k-tILBxRiQ4'
    },

    {
        name: 'Chopsticks',
        image: 'images/chopsticks.jpg',
        time: '1h 20m',
        trailer: 'https://youtu.be/dxbCuuc-jp4'
    },
    {
        name: 'Marvik',
        image: 'images/marvik.jpg',
        time: '1h 20m',
        trailer: 'https://youtu.be/giXco2jaZ_4'
    },
    {
        name: 'Double XL',
        image: 'images/double-xl.webp',
        time: '1h 20m',
        trailer: 'https://youtu.be/cQmQy-Wu72g'
    },
]

// console.log(movies)


movies.forEach(function (result) {
    console.log(result)

    document.querySelector('.movie_list').innerHTML += `
        <div class="movie_card">
            <a href="${result.trailer}" target="_blank">
                <div class="movie_img">
                    <img src="${result.image}"/>
                </div>
                <div> ${result.name} <span>${result.time}</span></div>
            </a>
        </div>
    
    `
})


$(document).ready(function () {
    $('.movie_list').slick({
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });
});