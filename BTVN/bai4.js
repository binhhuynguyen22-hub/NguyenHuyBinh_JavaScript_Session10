const players = [
  { name: "Messi", years: 18, salary: 100 },
  { name: "Ronaldo", years: 20, salary: 95 },
  { name: "Neymar", years: 12, salary: 90 },
  { name: "Mbappe", years: 7, salary: 85 },
  { name: "Haaland", years: 5, salary: 80 },
  { name: "Modric", years: 22, salary: 70 },
  { name: "Benzema", years: 19, salary: 75 },
];

function analyzeSalary(minYears, teamPlayers) {
  const filteredPlayers = teamPlayers.filter(
    (player) => player.years >= minYears,
  );
  if (filteredPlayers.length === 0) {
    return null;
  }
  const totalSalary = filteredPlayers.reduce(
    (sum, player) => sum + player.salary,
    0,
  );

  const highestPaid = filteredPlayers.reduce((max, player) =>
    player.salary > max.salary ? player : max,
  );

  const lowestPaid = filteredPlayers.reduce((min, player) =>
    player.salary < min.salary ? player : min,
  );

  return {
    totalSalary: totalSalary,
    highestPaid: { name: highestPaid.name, salary: highestPaid.salary },
    lowestPaid: { name: lowestPaid.name, salary: lowestPaid.salary },
  };
}

console.log("Phân tích lương cầu thủ có >= 10 năm kinh nghiệm");
console.log(analyzeSalary(10, players));