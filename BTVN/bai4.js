const players = [
  { name: "Messi", years: 18, salary: 100 },
  { name: "Ronaldo", years: 20, salary: 95 },
  { name: "Neymar", years: 12, salary: 90 },
  { name: "Mbappe", years: 7, salary: 85 },
  { name: "Haaland", years: 5, salary: 80 },
  { name: "Modric", years: 22, salary: 70 },
  { name: "Benzema", years: 19, salary: 75 },
];

function analyzeSalary(year, teamPlayers) {

  const filteredPlayers = teamPlayers.filter(function(player) {
    return player.years >= year;
  });

  const totalSalary = filteredPlayers.reduce(function(sum, player) {
    return sum + player.salary;
  }, 0);

  const highestPaid = filteredPlayers.reduce(function(max, player) {
    if (player.salary > max.salary) {
      return player;
    } else {
      return max;
    }
  });

  const lowestPaid = filteredPlayers.reduce(function(min, player) {
    if (player.salary < min.salary) {
      return player;
    } else {
      return min;
    }
  });

  return {
    totalSalary: totalSalary,
    highestPaid: {
      name: highestPaid.name,
      salary: highestPaid.salary
    },
    lowestPaid: {
      name: lowestPaid.name,
      salary: lowestPaid.salary
    }
  };
}

console.log("Phân tích lương cầu thủ có >= 10 năm kinh nghiệm");
console.log(analyzeSalary(10, players));
