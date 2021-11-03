'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""); // Написали плюс для того чтобы ответ являлся числом

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?",""),
          b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != " " && b != " " && a.length < 50) {
        personalMovieDB.movies[a] = b; // Вместо квадратных скобок можно разместить точку, но тогда вохможны баги
    } else {
        i--;
    };
};

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довльно мало филмов");
} else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман!");
} else {
    console.log("Произошла ошибка");
};

console.log(personalMovieDB);