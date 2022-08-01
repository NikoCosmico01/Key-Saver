import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Component } from 'react';
import { Divider, Grid, InputAdornment, OutlinedInput, Tooltip } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Delete, TramRounded, Visibility, VisibilityOff } from '@mui/icons-material';

export default class AccountCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      website: this.props.website,
      id: this.props.id,
      username: this.props.username,
      password: this.props.password,
      visibility: false,
    };

    this.updateState = this.updateState.bind(this)
  }

  updateState(){
    this.setState({
      visibility : !this.state.visibility
    })
  }

  handleDeleteAccount = () => {
    this.props.deleteAccount(this.state.id);
  }

  render() {
    return (
      <Grid item xs="auto">
        <Card sx={{ maxWidth: 240, minWidth: 240 }}>
          <CardHeader
            avatar={
                <img height="16" width="16" src={'http://www.google.com/s2/favicons?domain=' + this.props.web} />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={this.state.name}
            subheader={this.state.website}
          />
          <CardContent>
            <Divider/>
            <TextField
              id={'username' + this.state.id.toString()}
              size="small"
              type="text"
              value={this.state.username}
              variant="outlined"
              inputProps={{
                readOnly: true,
              }}
            />
            <OutlinedInput
              id={'password' + this.state.id.toString()}
              size="small"
              type={this.state.visibility ? "text" : "password"}
              value={this.props.password}
              variant="outlined"
              inputProps={{
                readOnly: true,
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.updateState}
                    edge="end"
                  >
                    {this.state.visibility ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </CardContent>
          <CardActions disableSpacing>
            <Tooltip title="copy">
              <IconButton aria-label="copyAccount">
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="delete">
              <IconButton aria-label="deleteAccount" onClick={this.handleDeleteAccount}>
                <Delete/>
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
