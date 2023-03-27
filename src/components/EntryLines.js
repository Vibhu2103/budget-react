import React from "react";
import { Container } from "semantic-ui-react";
import EntryLineCom from "./EntryLineCom";

function EntryLines({ entries, deleteEntry, editEntry }) {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLineCom
          key={entry.id}
          {...entry}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />
      ))}
    </Container>
  );
}

export default EntryLines;
