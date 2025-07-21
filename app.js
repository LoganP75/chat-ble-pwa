document.getElementById('scanBtn').addEventListener('click', async () => {
  try {
    const device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
    const li = document.createElement('li');
    li.textContent = `Nom: ${device.name || 'Inconnu'}, ID: ${device.id}`;
    document.getElementById('deviceList').appendChild(li);
  } catch (err) {
    console.error('Erreur BLE:', err);
  }
});
