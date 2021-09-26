import React, { Component } from "react";
import { TextField, Collapse } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import SubmitButton from "./submitButton";
import _ from "lodash";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: {
          value: "",
          error: "",
        },
        email: {
          value: "",
          error: "",
        },
        message: {
          value: "",
          error: "",
        },
      },
      loading: false,
      success: true,
    };
    this.oState = _.cloneDeep(this.state);
    this.state.success = false;
  }

  handleChange = (e) => {
    let newState = this.state;
    newState.fields[e.target.name] = {
      value: e.target.value,
      error: false,
    };

    console.log(newState);
    this.setState(newState);
  };

  loading = (value) => {
    let nState = this.state;
    nState.loading = value;
    this.setState(nState);
  };

  submitForm = () => {
    let data = this.state.fields;
    let errors = 0;
    this.loading(true);

    for (const [name, object] of Object.entries(data)) {
      if (object.value === "" || Object.entries(object).length === 0) {
        data[name].error = name + " is required";
        errors++;
      }
    }

    this.setState({ ...this.state, fields: data });
    if (errors) {
      this.loading(false);

      return false;
    }

    console.log("submitting", this.oState);

    this.setState(this.oState);
  };

  handleButtonClick = () => {
    console.log("set loading state somehow");
  };

  render() {
    const field = this.state.fields;

    return (
      <React.Fragment>
        <TextField
          required
          error={field.name.error}
          helperText={field.name.error}
          name="name"
          onChange={this.handleChange}
          value={field.name.value}
          label="Name"
          fullWidth
          inputProps={{
            autocomplete: "new-password",
          }}
        />
        <TextField
          required
          name="email"
          label="Email"
          margin="normal"
          error={field.email.error}
          helperText={field.email.error}
          onChange={this.handleChange}
          value={field.email.value}
          fullWidth

        />

        <TextField
          label="Message"
          required
          multiline
          fullWidth
          name="message"
          margin="normal"
          error={field.message.error}
          helperText={field.message.error}
          onChange={this.handleChange}
          value={field.message.value}
          rows={4}
        />
        <p>
          <br />
        </p>

        <SubmitButton
          onClickButton={() => this.submitForm()}
          loading={this.state.loading}
        />
        <p>
          <br />
        </p>
        <Collapse in={this.state.success}>
          <Alert variant="filled" severity="success">
            Thank you!
          </Alert>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default ContactForm;
