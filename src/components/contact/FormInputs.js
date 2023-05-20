import { Alert, Button, Grid, Snackbar, Stack, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import muiTheme from "../../muiTheme";
import validateName from "../../helpers/validateName";
import validateEmail from "../../helpers/validateEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

const inputStyle = {
  color: muiTheme.palette.primary.main,
  fontSize: "1rem",
  fontFamily: "Poppins",
  minLength: 3,
  padding: 0,
};

const FormInputs = () => {
  const [success, setSuccess] = useState(null);
  const [openSb, setOpenSb] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [name, setName] = useState("Your name");
  const [email, setEmail] = useState("mail@mail.com");
  const [subject, setSubject] = useState("Subject");
  const [message, setMessage] = useState("Template message");
  // ** references
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    const form = document.createElement("form");
    form.style.display = "none";
    formRef.current = form;

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.value = name;
    form.appendChild(nameInput);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.value = email;
    form.appendChild(emailInput);

    const subjectInput = document.createElement("input");
    subjectInput.type = "text";
    subjectInput.name = "subject";
    subjectInput.value = subject;
    form.appendChild(subjectInput);

    const messageInput = document.createElement("textarea");
    messageInput.name = "message";
    messageInput.value = message;
    form.appendChild(messageInput);

    document.body.appendChild(form);
  }, [name, email, subject, message]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSb(false);
    setDisabled(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setDisabled(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
    setOpenSb(true);
  };

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
      <form onSubmit={sendEmail}>
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
                id="name"
                label="name"
                name="name"
                type="text"
                inputRef={nameRef}
                fullWidth
                variant="standard"
                InputProps={{ style: inputStyle }}
                required
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
                id="email"
                name="email"
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
            id="subject"
            name="subject"
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
            id="message"
            name="message"
            type="text"
            inputRef={messageRef}
            fullWidth
            variant="standard"
            InputLabelProps={{ style: inputStyle }}
            required
            onChange={(e) => setMessage(e.target.value)}
            error={message.trim().length < 2}
            helperText={
              message.trim().length < 2
                ? "Please include a message"
                : "Required"
            }
            multiline
          />
          <Button
            id="form-send"
            variant="contained"
            type="submit"
            endIcon={
              <FontAwesomeIcon
                className="btn-icon"
                icon={faPaperPlane}
                beat
              />
            }
            disabled={disabled}
          >
            <p>SEND</p>
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={openSb && success}
            autoHideDuration={15000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              sx={{
                width: "100%",
                backgroundColor: `${
                  success
                    ? muiTheme.palette.success.main
                    : muiTheme.palette.error.main
                }`,
              }}
            >
              {success
                ? "Message sent. I'll get back to you soon. 😊"
                : "Opsieeee...an error occurred. Please try again."}
            </Alert>
          </Snackbar>
        </Stack>
      </form>
      <br></br>
    </Stack>
  );
};

export default FormInputs;
