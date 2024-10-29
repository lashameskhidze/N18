
let age = (prompt("Enter your age:"));
let movieType = prompt("Enter movie type (regular or 3D):")
let timeOfDay = prompt("Enter time of day (matinee or evening):")
let hasDiscountTicket = confirm("Do you have a discount ticket?");
let ticketPrice;

switch (true) {
    case (age < 10):
        ticketPrice = 5;
        break;
    case (age >= 10 && age <= 65):
        ticketPrice = 15;
        break;
    case (age > 65):
        ticketPrice = 10;
        break;
    default:
        ticketPrice = 0; 
}


switch (movieType) {
    case '3d':
        ticketPrice += 5; 
        break;
    case 'regular':
        break;
    default:
        alert("დღის არასწორი დრო. გთხოვთ შეიყვანოთ „matinee“ ან „evening“.");
        ticketPrice = 0;
}


switch (timeOfDay) {
    case 'matinee':
        ticketPrice -= 2; 
        break;
    case 'evening':
        break;
    default:
        alert("დღის არასწორი დრო. გთხოვთ შეიყვანოთ „matinee“ ან „evening“");
        ticketPrice = 0;
}


if (ticketPrice > 0) {
    alert("ბილეთის ფასი არის: 25 ლარი.");
} else {
    alert("ბილეთის ფასის გამოთვლისას მოხდა შეცდომა");
}





if (hasDiscountTicket) {
    let discountType = prompt("Enter discount type (პროცენტული ან ფიქსირებული)")
    switch (discountType) {
        case "პროცენტული":
            ticketPrice *= 0.75;  
            break;
        case "ფიქსირებული":
            ticketPrice -= 5; 
            break;
        default:
            alert("ფასდაკლება არასწორია.");
    }
}


alert("ბილეთის ფასი თქვენთვის არის: 25 ლარი.");
