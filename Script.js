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
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером №${i + 1}?`);
            if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == "") {
                i--;
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
