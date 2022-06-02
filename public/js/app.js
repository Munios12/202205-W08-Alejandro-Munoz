import { series } from "./series.js";
import { showCardSerie } from "./template/template.js";

const app = () => {
  let pendingArr = [];
  let watchedArr = [];
  let pendingSeriesParrafHtml = document.querySelector(".info-pending");
  let watchedSeriesParrafHtml = document.querySelector(".info-watched");
  let pendingSeriesListHtml = document.querySelector(".series-list");
  let watchedSeriesListHtml = document.querySelector(".series-list--watched");

  //Inyectar peliculas en funcion de vista o no vista
  for (let i = 0; i < series.length; i++) {
    if (!series[i].watched) {
      pendingSeriesListHtml.innerHTML += showCardSerie(series[i]);
      pendingArr.push(series[i]);
    } else {
      watchedSeriesListHtml.innerHTML += showCardSerie(series[i]);
      watchedArr.push(series[i]);
    }
  }

  //Delete Buttons Functionality
  const iconDeleteHtml =
    pendingSeriesListHtml.querySelectorAll(".icon--delete");
  const iconDeleteList = [...iconDeleteHtml];
  console.log(series);
  let newArr = [...series];

  const removeSerie = (arr, serieItem) => {
    let serieList = newArr.filter((serie) => serie.name !== serieItem.name);
    // let filmToRemove = document.querySelectorAll(`.serie__title`);

    newArr = serieList;

    return newArr;
  };

  for (let i = 0; i < iconDeleteList.length; i++) {
    iconDeleteList[i].addEventListener("click", (e) => {
      e.preventDefault();

      removeSerie(newArr, series[i]);
      console.log(newArr);
    });
  }

  //Parrafos dinamicos
  pendingSeriesParrafHtml.innerHTML = `You have ${pendingArr.length} series pending to watch`;
  watchedSeriesParrafHtml.innerHTML = `You have ${watchedArr.length} series pending to watch`;
};

app();
