class doctrinePage{

    ADDNEW_BTN =() => cy.get(`#btnAddNew`)
    //ADD NEW
    ADDNEW_MODAL_WIN =() => cy.get(`#addEditModal`)
    ADDNEW_NAME =() => cy.get(`#txtName`)
    ADDNEW_DESC =() => cy.get(`#txtDescription`)
    ADDNEW_SAVE_BTN =() => cy.get(`#btnSave`)

    DOCTRINE_TABLE_COLS =() => cy.get(`table[class="dataTable table table-striped table-bordered no-footer"]>thead>tr:nth-Child(1)>th`) //8columns
    DOCTRINE_TAB_ROWS=() => cy.get('#docTable>tbody>tr')   
    
    DOCTRINE_DOWNLOAD =() => cy.get('a[class="download-document"]')
    DOCTRINE_EDIT =() => cy.get('a[class="edit-document"]')
    DOCTRINE_DEL =() => cy.get('a[class="delete-document"]')

    EDIT_MODAL_WIN =() => cy.get(`#addEditModal`)

    DEL_OK_BTN =() => cy.get('button').contains('OK')

}

export default doctrinePage