document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('barChart');
    const context = canvas.getContext('2d');

    const data = [111, 35, 42, 30, 98];
    const labels = ['John Smit', 'Emily Jonson', 'Michael Devis', 'Sarah Miller', 'Brian Clark'];
    const chartWidth = canvas.width - 100;
    const chartHeight = canvas.height - 100;
    const barWidth = chartWidth / data.length;
    const maxValue = Math.max(...data);
    const barSpacing = 10;

    data.forEach((value, index) => {
      const barHeight = (value / maxValue) * chartHeight;
      const x = index * (barWidth + barSpacing) + 40;
      const y = chartHeight - barHeight + 10;

      context.fillStyle = 'blue';
      context.fillRect(x, y, barWidth - barSpacing, barHeight);
    });
    context.fillStyle = 'black';
    context.font = '12px Arial';
    labels.forEach((label, index) => {
      const x = index * (barWidth + barSpacing) + 30 + (barWidth - barSpacing) / 2;
      const y = chartHeight + 30;
      context.fillText(label, x, y);
    });
  });