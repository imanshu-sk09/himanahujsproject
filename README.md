# Chemical Inventory Application
A web-based application for managing chemical inventory, designed with dynamic table functionality and implemented as a Progressive Web App (PWA). This application is suitable for mobile, desktop, and various browsers.

Features
Add, Delete, Edit Chemicals: Dynamically manage chemical records in an editable table.
Local Storage: Data is saved locally in the browser and persists across sessions.
Sorting and Movement: Ability to sort table columns and move rows up or down.
Progressive Web App (PWA): Installable, offline-first functionality for mobile, desktop, and cross-browser compatibility.
Responsive Design: Adjusts seamlessly to different screen sizes and devices using TailwindCSS.
Table of Contents
Features
Installation
Usage
PWA Setup
Technologies
Contributing
License
Installation
To run this project locally:

# Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/chemical-inventory-app.git
Navigate to the project folder:

bash
Copy code
cd chemical-inventory-app
Open the index.html file in your browser:


open index.html
For a local development server, you can use the Live Server extension in VSCode or any other static server like http-server:


npm install -g http-server
http-server
Access the application at http://localhost:8080 (or whichever port is shown).


Add New Chemicals
Click the plus icon to add a new chemical row.
Edit the details directly in the table cells.
Edit Existing Chemicals
Double-click any cell to edit the content. Changes are saved when you press Enter or click outside the cell.
Delete Chemicals
Select the rows by checking the checkbox, and click the trash icon to delete.
Sorting
Click the header of any column to sort it.
Save Data
Click the save icon to save your changes to the local storage.
Moving Rows
Select the row and use the up or down arrows to reorder the row in the table.
PWA Setup
The Chemical Inventory app is a Progressive Web App (PWA), which allows it to work offline and be installed as a standalone app.

To enable offline functionality, a service worker is registered. It caches important assets for offline use.
A manifest.json file is included to provide installation options for mobile and desktop.
How to Install the PWA:
Open the app in your browser.
On mobile, you’ll see an Add to Home Screen prompt (or use the browser menu to install it).
On desktop, click the install button in the address bar.
Technologies
HTML5: Markup for structuring the web page.
TailwindCSS: Utility-first CSS framework for responsive design.
JavaScript (ES6): Dynamic table functionality and local storage.
FontAwesome: Icons for buttons and actions.
PWA: Service workers and a web manifest for offline and installable features.
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch:

git checkout -b feature-branch
Make your changes and commit them:

git commit -m "Add new feature"
Push to the branch:

git push origin feature-branch
Create a pull request.

## Deployment :
<a href="https://imanshu-sk09.github.io/himanahujsproject/"> Website Link </a>
