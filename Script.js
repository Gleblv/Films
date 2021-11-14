'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", ""); // Написали плюс для того чтобы ответ являлся числом

        while (personalMovieDB.count == " " || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");  
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?",""),
                  b = prompt("На сколько оцените его?", "");
        
            if (a != null && b != null && a != " " && b != " " && a.length < 50) {
                personalMovieDB.movies[a] = b; // Вместо квадратных скобок можно разместить точку, но тогда вохможны баги
            } else {
                i--;
            };
        };
    },
    detecdPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довльно мало филмов");
        } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман!");
        } else {
            console.log("Произошла ошибка");
        };
    },
    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        };
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == null || genre == "") {
                console.log("Нкорректный ответ");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre; // Написали i - 1, потому что последовательность в массиве должна начинаться с 0
            };
        };

        personalMovieDB.genres.forEach(function(item, num){
            console.log(`Любимый жанр #${num + 1} - это ${item}`)
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        };   
    }
};
