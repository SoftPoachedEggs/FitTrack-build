const ctx = document.getElementById("myChart");
const second = document.getElementById("secondChart");
const third = document.getElementById("thirdChart");

const getActivities = async () => {
  try {
    const response = await fetch("/api/graph/activities");
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getGoals = async () => {
  try {
    const response = await fetch("/api/graph/goals");
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const activityData = async () => {
  const data = await getActivities();
  console.log(data);
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.map((row) => row.entry_date),
      datasets: [
        {
          label: "duration",
          data: data.map((row) => row.duration),
          borderWidth: 1,
          backgroundColor: [
            "rgba(100, 20, 4, 0.5)",
            "rgba(20, 100, 4, 0.5)",
            "rgba(4, 20, 100, 0.5)",
            "rgba(30, 40, 30, 0.5)",
          ],
          borderRadius: 20,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

activityData();

const goalsData = async () => {
  const data = await getGoals();
  new Chart(second, {
    type: "bar",
    data: {
      labels: data.map((row) => row.activity_type),
      datasets: [
        {
          label: "duration",
          data: data.map((row) => row.duration),
          borderWidth: 1,
        },
      ],
    },
  });
};

goalsData();

const myData3 = async () => {
  const data = await getData();
  new Chart(third, {
    type: "polarArea",
    data: {
      labels: data.map((row) => row.entry_date),
      datasets: [
        {
          label: "duration",
          data: data.map((row) => row.duration),
          borderWidth: 1,
        },
      ],
    },
  });
};

myData3();
