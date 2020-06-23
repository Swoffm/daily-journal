import API from "./journalData.js"
import journalEntryList from "../scripts/journalList.js"
import {saveButtonEvent} from "./journal.js";
API.getJournalData().then(
    () => {
        journalEntryList();
    }
)
// .then(
//     () => {
//         saveButtonEvent();
//     }
// )
saveButtonEvent();

