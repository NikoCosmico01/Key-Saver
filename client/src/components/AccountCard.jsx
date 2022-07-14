import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Component } from 'react';
import { Grid } from '@mui/material';

export default class AccountCard extends Component{
  render() {
    return (
      <Grid item xs="auto">
        <Card sx={{ maxWidth: 240, minWidth: 240 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {this.props.firstchar}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={this.props.title}
          />
          <CardContent>
            
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <ContentCopyIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
