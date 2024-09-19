const today = new Date();

function getSecondFriday(year, month) {
    const firstDay = new Date(year, month, 1);
    const firstFriday = new Date(firstDay.setDate((5 - firstDay.getDay() + 7) % 7 + 1));
    return new Date(firstFriday.setDate(firstFriday.getDate() + 7));
}

function formatDate() {
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    
    console.log("1:", today.toISOString().split('T')[0].replace(/-/g, '/'));

    
    const options = { year: 'numeric', month: 'long', day: 'numeric', locale: 'eu' };
    console.log("2:", new Intl.DateTimeFormat('eu-ES', options).format(today));

    
    const secondFriday = getSecondFriday(year, month);
    const monthName = new Intl.DateTimeFormat('eu-ES', { month: 'long' }).format(today);
    console.log("3:", `${monthName}-eko ${secondFriday.getDate()}. ostirala`);
}

formatDate();
