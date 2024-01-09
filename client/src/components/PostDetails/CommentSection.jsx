import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core/';

import useStyles from './styles';

const CommentSection = ({ post }) => {
  const [comments, setComments] = useState([1, 2, 3, 4]);
  const [comment, setComment] = useState('');
  const classes = useStyles();

  const handleComment = () => { };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">Comments</Typography>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              Comment {i}
            </Typography>
          ))}
        </div>
        <div style={{ width: '70%' }}>
          <Typography gutterBottom variant="h6">Write a comment</Typography>
          <TextField
            fullWidth
            rows={4}
            variant="outlined"
            label="Comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment} color="primary" variant="contained" onClick={handleComment}>
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
