import sortParam from './sortParam';

export default function* sorting(arr) {
  const sortElem = ['id', 'title', 'year', 'imdb'];
  let i = 0;
  const direcrion = ['straight', 'conversely'];

  while (true) {
    if (i === sortElem.length) {
      i = 0;
    }
    yield sortParam(arr, sortElem[i], direcrion[0]);
    yield sortParam(arr, sortElem[i], direcrion[1]);
    i += 1;
  }
}
