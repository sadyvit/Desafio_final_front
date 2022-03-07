import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginacao({ setOffset, totalArray }) {
  const [pagina, setPagina] = React.useState(1)

  const total = Math.ceil(totalArray / 10)
  function offsetfunction(event) {
    if (event.target.textContent !== "") {
      setPagina(event.target.textContent)
      setOffset(event.target.textContent <= 1 ? 0 : (event.target.textContent - 1) * 10);
    }
    else {
      if
        ((event.target.attributes[3] !== undefined && event.target.attributes[3].value === "Go to previous page")
        || event.target.parentNode.dataset.testid === 'NavigateBeforeIcon'
        || event.target.dataset.testid === 'NavigateBeforeIcon') {
        setOffset((pagina - 1 - 1) * 10);
        setPagina(pagina <= 1 ? 1 : pagina - 1);
      }
      else if
        ((event.target.attributes[3] !== undefined && event.target.attributes[3].value === "Go to next page")
        || event.target.parentNode.dataset.testid === 'NavigateNextIcon'
        || event.target.dataset.testid === 'NavigateNextIcon') {
        setOffset((pagina - 1 + 1) * 10);
        setPagina(pagina >= total ? total : pagina + 1);
      }
    }
  }
  return (
    <Stack spacing={2} sx={{ alignSelf: 'center' }}>
      <Pagination onClick={(e) => offsetfunction(e)} count={total} variant="outlined" shape="rounded" color='secondary' />
    </Stack>
  );
}