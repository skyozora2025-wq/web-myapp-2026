async function addSchedule() {

  const response = await fetch('/api/schedules', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: '買い出し',
      date: '2026-05-12',
      time: '18:00'
    })
  });

  const data = await response.json();

  console.log(data);
}