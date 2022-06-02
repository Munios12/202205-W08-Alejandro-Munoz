export const loadPendingSeriesParrafo = ({ ...serie }) => {
  let pendingSeriesParrafo = `<p class="info">You have &{0} series pending to watch</p>`;

  return pendingSeriesParrafo;
};

export const showCardSerie = ({ ...serie }) => {
  let serieCard = `<li class="serie">
      <img
        class="serie__poster"
        src="${serie.poster}"
        alt="The Sopranos poster"
      />
      <h4 class="serie__title">${serie.name}</h4>
      <p class="serie__info">${serie.creator} (${serie.year})</p>
      <ul class="score">
        <li class="score__star">
          <i class="icon--score far fa-star" title="1/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score far fa-star" title="2/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score far fa-star" title="3/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score far fa-star" title="4/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score far fa-star" title="5/5"></i>
        </li>
      </ul>
      <i class="fas fa-times-circle icon--delete"></i>
    </li>`;

  return serieCard;
};

//Estrella entera  ->>>> "icon--score fas fa-star"

//Estrella vacia ->>>> "icon--score far fa-star"
