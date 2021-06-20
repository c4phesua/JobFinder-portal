import React from 'react';
import { Button, Box, Typography } from '@material-ui/core';
import {
  FiCard,
  FiCardActions,
  FiCardContent,
  FiCardMedia
} from "../utils/FullImageCard";
import { fiCardStyle } from '../styleutil/FiCardStyle';
import { newTab } from '../utils/Routes';

const onEditProfileClick = () => {
  newTab("/profile");
}

const EditProfileSuggest = (props) => {
  const classes = fiCardStyle();
  return (
    <section>
      <Box my={4}>
        <FiCard className={classes.card}>
          <FiCardMedia
            media="picture"
            alt="Bạn có biết?"
            image="https://i1.wp.com/www.additudemag.com/wp-content/uploads/2017/02/Adult_Career_Lean-Incredible_Article_12330_Cartoon-businesspeople_ts-628995432.jpg?resize=1280%2C720px&ssl=1"
            title="Bạn có biết?"
          />
          <FiCardContent className={classes.fiCardContent}>
            <Typography gutterBottom variant="h3" component="h2">
              Bạn có biết?
            </Typography>
            <Typography
              variant="h5"
              className={classes.fiCardContentTextSecondary}
              component="p"
            >
              Một hồ sơ cá nhân đẹp có thể gây thu hút đối với nhà tuyển dụng
              và tăng khả năng ứng tuyển thành công của bạn lên?
            </Typography>
          </FiCardContent>
          <FiCardActions className={classes.fiCardContent}>
            <Button size="small" color="inherit" variant="outlined" onClick={onEditProfileClick}>
              Chỉnh sửa hồ sơ
            </Button>
          </FiCardActions>
        </FiCard>
      </Box>
    </section>
  )
}

export default EditProfileSuggest;
