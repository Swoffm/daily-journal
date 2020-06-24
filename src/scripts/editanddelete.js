import API from "./journalData.js"
import updatingFormBox from "./formFieldUpdated.js"


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

    })

}

export default editAndDeleteFunction