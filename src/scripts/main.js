import {getJournalData} from "./journalData.js"
import journalEntryList from "../scripts/journalList.js"
getJournalData().then(
    () => {
        journalEntryList();
    }
)

