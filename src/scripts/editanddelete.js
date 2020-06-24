import API from "./journalData.js"
import updatingFormBox from "./formFieldUpdated.js"
import journalEntryList from "./journalList.js"


const editAndDeleteFunction = () => {
    const entryLocation = document.querySelector(".entryLog")

    entryLocation.addEventListener("click", clickEvent => {
        
        if(clickEvent.target.id.startsWith("edit--")) {
            const cardEdit = event.target.id.split("--")[1];
            console.log(cardEdit);
            API.getSingleJournalData(cardEdit)
            .then((editObject) => {
                updatingFormBox(editObject)
            })
        }
        else if(clickEvent.target.id.startsWith("delete--")) {
            const cardDelete = event.target.id.split("--")[1];
            console.log(cardDelete);
            API.deleteSingleJournalEntry(cardDelete)
            .then(() => {
                API.getJournalData()
                .then(() => {

                    journalEntryList()

                })
            })
        }

    })

}

export default editAndDeleteFunction