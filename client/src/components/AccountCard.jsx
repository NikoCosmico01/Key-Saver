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
import { Divider, Grid, InputAdornment, OutlinedInput } from '@mui/material';
import TextField from '@mui/material/TextField';
import { TramRounded, Visibility, VisibilityOff } from '@mui/icons-material';

export default class AccountCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };

    this.updateState = this.updateState.bind(this)
  }

  updateState(){
    this.setState({
      visibility : !this.state.visibility
    })
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
            title={this.props.title}
            subheader={this.props.subheader}
          />
          <CardContent>
            <Divider/>
            <TextField
              id={this.props.id}
              size="small"
              type="text"
              value={this.props.username}
              variant="outlined"
              inputProps={{
                readOnly: true,
              }}
            />
            <OutlinedInput
              id={this.props.id}
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
            <IconButton aria-label="copyAccount" title="copy">
              <ContentCopyIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
