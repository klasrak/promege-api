import app from './app';

const port = 3000;

app.listen(port, err => {
  if (err) {
    process.exit(1);
  }
  // eslint-disable-next-line no-console
  console.log('API Rodando');
});
