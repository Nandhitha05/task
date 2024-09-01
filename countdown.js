function calculateTimeUntilhackathon() {
    const today = new Date();
    const hackathon = new Date(today.getFullYear(), 8, 27);  
    if (today.getMonth() > 8 || (today.getMonth() === 8 && today.getDate() > 27)) {
        hackathon.setFullYear(hackathon.getFullYear() + 1);
    }
    const difference = hackathon - today;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
}

function updateCountdown() {
    const { days, hours, minutes, seconds } = calculateTimeUntilhackathon();
    
    document.getElementById('dleft').textContent = `${days}d`;
    document.getElementById('hour').textContent = hours.toString().padStart(2, '0');
    document.getElementById('min').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('sec').textContent = seconds.toString().padStart(2, '0');
    
    const today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const formattedDate = `${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`;
    document.getElementById('day').textContent = formattedDate;
    
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        document.getElementById('text').textContent = 'Oops';
        document.getElementById('msg').textContent = 'Registration Closed!';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
