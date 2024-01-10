interface Student { firstName: string; lastName: string; age: number; location: string };

const student1: Student = {
    firstName: "Blob",
    lastName: "Spacer",
    age: 15,
    location: "Moon",
};
const student2: Student = {
    firstName: "Sterna",
    lastName: "Licht",
    age: 15,
    location: "Saturne",
};

const studentsList: Student[] = [student1, student2];

/* Create the table */
const tableElement: HTMLTableElement = document.createElement('table');
/* Create the header */
const tableHeader: HTMLTableSectionElement = document.createElement('thead');
/* Create the row */
const headerRow: HTMLTableRowElement = document.createElement('tr');
/* Create the cells */
const headerCell1: HTMLTableCellElement = document.createElement('th')
const headerCell2: HTMLTableCellElement = document.createElement('th')
headerCell1.textContent = "firstName";
headerCell2.textContent = "location";

headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);

tableHeader.appendChild(headerRow);

/* Table body */
const tableBody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student) => {
    const dataRow: HTMLTableRowElement = document.createElement('tr');
    const c1: HTMLTableCellElement = document.createElement('td');
    const c2: HTMLTableCellElement = document.createElement('td');

    c1.textContent = student.firstName;
    c2.textContent = student.location;

    dataRow.appendChild(c1);
    dataRow.appendChild(c2);

    tableBody.appendChild(dataRow);
});

tableElement.appendChild(tableHeader);
tableElement.appendChild(tableBody);

document.body.appendChild(tableElement);
