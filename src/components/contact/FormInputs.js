import { Button, Grid, Stack, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import muiTheme from "../../muiTheme";
import validateName from "../../helpers/validateName";
import validateEmail from "../../helpers/validateEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const inputStyle = {
  color: muiTheme.palette.primary.main,
  fontSize: "1rem",
  fontFamily: "Poppins",
  minLength: 3,
  padding: 0,
};
const FormInputs = () => {
  const [name, setName] = useState("Your name");
  const [email, setEmail] = useState("mail@mail.com");
  const [subject, setSubject] = useState("Subject");
  // ** references
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  return (
    <Stack
      className="form-inputs"
      spacing={2}
    >
      <Stack>
        <p
          color="primary"
          className="form__text form__text__header"
        >
          Let's connect!
        </p>
        <p
          color="primary"
          className="form__text form__text__subheader "
        >
          Feel free to send me a message.
        </p>
      </Stack>
      <form>
        <Stack
          className="forn__inputs"
          spacing={1}
        >
          <Grid
            container
            spacing={{ md: 2 }}
          >
            <Grid
              item
              xs={12}
              md={6}
            >
              <TextField
                className="form__input"
                id="form-name"
                label="name"
                type="text"
                inputRef={nameRef}
                fullWidth
                variant="standard"
                InputProps={{ style: inputStyle }}
                required
                autoFocus
                onChange={(e) => setName(e.target.value)}
                error={!validateName(name)}
                helperText={!validateName(name) ? "Invalid name" : "Required"}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <TextField
                className="form__input"
                id="form-email"
                label="email"
                type="email"
                inputRef={emailRef}
                fullWidth
                variant="standard"
                InputProps={{ style: inputStyle }}
                required
                onChange={(e) => setEmail(e.target.value)}
                error={!validateEmail(email)}
                helperText={
                  !validateEmail(email) ? "Invalid email" : "Required"
                }
              />
            </Grid>
          </Grid>
          <TextField
            className="form__input"
            id="form-subject"
            label="subject"
            type="text"
            inputRef={subjectRef}
            fullWidth
            variant="standard"
            InputProps={{ style: inputStyle }}
            required
            onChange={(e) => setSubject(e.target.value)}
            error={subject.trim().length < 2}
            helperText={
              subject.trim().length < 2
                ? "Please include a valid subject"
                : "Required"
            }
          />
          <p className="form__text form__text__subheader ">Message</p>
          <TextField
            className="form__input"
            id="form-message"
            type="text"
            inputRef={messageRef}
            fullWidth
            variant="standard"
            InputLabelProps={{ style: inputStyle }}
            required
            onChange={(e) => setSubject(e.target.value)}
            error={subject.trim().length < 2}
            helperText={
              subject.trim().length < 2
                ? "Please include a valid subject"
                : "Required"
            }
            multiline
          />
          <Button
            id="form-send"
            variant="contained"
            endIcon={
              <FontAwesomeIcon
                className="btn-icon"
                icon={faPaperPlane}
                beat
              />
            }
          >
            <p>SEND</p>
          </Button>
        </Stack>
      </form>
      <br></br>
    </Stack>
  );
};

export default FormInputs;
