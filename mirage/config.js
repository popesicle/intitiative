export default function() {
  this.urlPrefix = 'http://localhost:3000';

  this.get('/players');
  this.post('/players');
  this.patch('/players/:id');
  this.del('/players/:id');
}
