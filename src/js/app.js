import data from './data';
import sorting from './sorting';
import rendering from './rendering';

const table = document.getElementsByClassName('table')[0];
const dataMovie = data();

const generator = sorting(dataMovie);

// обновить всё в доме
setInterval(() => {
  table.innerHTML = `
    <thead>
        <tr>
          <td class="id"> id </td>
          <td class="title"> title </td>
          <td class="year"> year </td>
          <td class="imdb"> imdb </td>
        </tr>
    </thead>`;

  generator.next();
  rendering(dataMovie);
}, 2000);
