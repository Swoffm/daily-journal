import API from "./journalData.js"
import journalEntryList from "../scripts/journalList.js"
import saveButtonEvent from "./savebuttonevent.js";
import editAndDeleteFunction from "./editanddelete.js"
API.getJournalData().then(
    () => {
        journalEntryList();
    }
)

editAndDeleteFunction();
saveButtonEvent();

