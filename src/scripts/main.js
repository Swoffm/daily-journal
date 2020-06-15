import journalDataObject from "../scripts/journalData.js"
import journalEntryList from "../scripts/journalList.js"
journalDataObject.getJournalData.then(
    () => {
        journalEntryList();
    }
)

