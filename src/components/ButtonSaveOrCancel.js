import React from "react";
import { ButtonGroup, Button, ButtonOr } from "semantic-ui-react";

function ButtonSaveOrCancel({ addEntry }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <ButtonOr />
      <Button primary onClick={() => addEntry()}>
        Ok
      </Button>
    </Button.Group>
  );
}

export default ButtonSaveOrCancel;
