import { RowID, RowElement } from "./interface";
/// <reference path="path/to/crud.d.ts" />
import * as CRUD from './crud';
import { insertRow } from "./crud";

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

const newRowID: RowID = insertRow(row);

const updatedRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
