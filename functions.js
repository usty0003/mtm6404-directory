// Create the list function
function list(clients) {
    return clients.map(client => `
      <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$${client.balance.toFixed(2)}</strong>
      </li>`).join('');
  }
  
  // Create the order function
  function order(clients, property) {
    return clients.sort((a, b) => {
      if (typeof a[property] === 'string') {
        return a[property].localeCompare(b[property]);
      } else {
        return a[property] - b[property];
      }
    });
  }
  
  // Create the total function
  function total(clients) {
    return clients.reduce((acc, client) => acc + client.balance, 0);
  }
  
  // Create the info function
  function info(index) {
    return clients.find(client => client.index === index);
  }
  
  // Create the search function
  function search(query) {
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()));
  }
  