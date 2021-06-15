import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Title from "../component/Title";
import { companiesStyle } from '../styleutil/TopCompaniesStyle';


export default function TopCompanies(props) {
  const classes = companiesStyle();
  const { companies } = props;
  return (
    <div>
      {companies.map((company) => (
        <Card className={classes.root} >
          <CardMedia
            className={classes.cover}
            image={company.image}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5" className={classes.cardText}>
                <Title>
                  {company.company_name}
                </Title>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {company.company_address}
              </Typography>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
