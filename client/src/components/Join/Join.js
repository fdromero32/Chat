import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  CssBaseline,
  Typography,
  Input,
  Button,
} from "@material-ui/core";

const mystyle = {
  width: "100%",
  marginTop: "20px",
};

const main = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={main}>
          <Typography component="h1" variant="h5">
            ChatRoom 1.0.0
          </Typography>
          <form style={mystyle} noValidate autoComplete="off">
            <Input
              placeholder="Your Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="What room?"
              type="text"
              onChange={(e) => setRoom(e.target.value)}
            />
            {/* if no name or no room, call event preventDefault which will prevent the button to be clicked. */}
            <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}`}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{marginTop: "20px"}}
              >
                Let's go!
              </Button>
            </Link>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Join;
