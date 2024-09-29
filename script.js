// Initialize chemicals array from local storage or default values
let chemicals = JSON.parse(localStorage.getItem('chemicals')) || [
    { id: 1, name: "Acetic Acid", vendor: "Supplier A", density: "1.05 g/cm³", viscosity: "0.89 mPa·s", packaging: "Bottle", packSize: "1L", unit: "L", quantity: 100 },
    { id: 2, name: "Benzene", vendor: "Supplier B", density: "0.87 g/cm³", viscosity: "0.65 mPa·s", packaging: "Drum", packSize: "200L", unit: "L", quantity: 50 },
    { id: 3, name: "Water", vendor: "Supplier C", density: "1.00 g/cm³", viscosity: "0.89 mPa·s", packaging: "Bottle", packSize: "1L", unit: "L", quantity: 150 },
];

// Function to display data in the table
function displayData() {
    const tbody = document.getElementById("chemicalTableBody");
    tbody.innerHTML = ""; // Clear existing rows

    chemicals.forEach(chemical => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><input type='checkbox' /></td>
            <td contenteditable>${chemical.name}</td>
            <td contenteditable>${chemical.vendor}</td>
            <td contenteditable>${chemical.density}</td>
            <td contenteditable>${chemical.viscosity}</td>
            <td contenteditable>${chemical.packaging}</td>
            <td contenteditable>${chemical.packSize}</td>
            <td contenteditable>${chemical.unit}</td>
            <td contenteditable>${chemical.quantity}</td>`;
        tbody.appendChild(row);
    });
}

// Function to add a new row
function addRow() {
    const newId = chemicals.length + 1; // Simple ID generation
    const newChemical = { 
        id:newId,
        name:"New Chemical ", 
        vendor:"New Vendor ", 
        density:"0 g/cm³ ", 
        viscosity:"0 mPa·s ", 
        packaging:"New Packaging ", 
        packSize:"New Pack Size ", 
        unit:"New Unit ", 
        quantity :0 
    };
    
    chemicals.push(newChemical);
    displayData();
}

// Function to save data to local storage
function saveData() {
    const tbody = document.getElementById("chemicalTableBody");
    
    // Update chemicals array with current table data
    const rows = Array.from(tbody.rows);
    
    chemicals = rows.map((row, index) => ({
        id: index + 1,
        name: row.cells[1].innerText,
        vendor: row.cells[2].innerText,
        density: row.cells[3].innerText,
        viscosity: row.cells[4].innerText,
        packaging: row.cells[5].innerText,
        packSize: row.cells[6].innerText,
        unit: row.cells[7].innerText,
        quantity: row.cells[8].innerText,
    }));

    localStorage.setItem('chemicals', JSON.stringify(chemicals));
}

// Function to delete selected rows
function deleteRow() {
    const tbody = document.getElementById("chemicalTableBody");
    const selectedRows = Array.from(tbody.querySelectorAll('input[type=checkbox]:checked')).map(input => input.closest('tr'));
    
    selectedRows.forEach(row => {
        const index = Array.from(tbody.children).indexOf(row); // Get index in the tbody
        chemicals.splice(index, 1); // Remove from array
        row.remove(); // Remove from DOM
    });
    
    saveData(); // Save updated data after deletion
}

// Function to move selected row up
function moveRowUp() {
    const tbody = document.getElementById("chemicalTableBody");
    const selectedRows = Array.from(tbody.querySelectorAll('input[type=checkbox]:checked')).map(input => input.closest('tr'));

    selectedRows.forEach(row => {
        if (row.previousElementSibling) {
            tbody.insertBefore(row, row.previousElementSibling);
        }
    });
}

// Function to move selected row down
function moveRowDown() {
    const tbody = document.getElementById("chemicalTableBody");
    const selectedRows = Array.from(tbody.querySelectorAll('input[type=checkbox]:checked')).map(input => input.closest('tr'));

    selectedRows.reverse().forEach(row => {
        if (row.nextElementSibling) {
            tbody.insertBefore(row.nextElementSibling, row);
        }
    });
}

// Load data from local storage when the page loads
window.onload = () => {
    displayData();
};