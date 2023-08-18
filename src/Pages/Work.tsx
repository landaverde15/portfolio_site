import React from 'react';
import '../App.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@emotion/react';
import { createTheme} from '@mui/material/styles';

let theme:any = createTheme();

theme.typography.h5 = {
  fontSize: '16px',
  '@media (max-width:900px)': {
    fontSize: '12px',
  }
};

theme.typography.h6 = {
    fontSize: '13px',
    '@media (max-width:900px)': {
      fontSize: '11px',
    }
};

function Work() {
    return (
        <ThemeProvider theme={theme}>
            <div className="Work">
                <div className="flexItemWork1">
                    <h1 className="workTitle">03 Work Experience_</h1>
                </div>
                <div className="flexItemWork2">
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h5" component="span">
                                    IT Intern Helpdesk Engineer (April 2018 - May 2019)
                                </Typography>
                                <Typography variant="h6">NKSFB - Westwood, CA</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="secondary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h5" component="span">
                                    Web Developer Intern (May 2019 - December 2019)
                                </Typography>
                                <Typography variant="h6">Kinecta Federal Credit Union - Manhattan Beach, CA</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="success" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h5" component="span">
                                    Web Developer Part Time (December 2019 - May 2020)
                                </Typography>
                                <Typography variant="h6">Kinecta Federal Credit Union - Manhattan Beach, CA</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="error" />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h5" component="span">
                                    Software Engineer I (May 2020 - current)
                                </Typography>
                                <Typography variant="h6">Kinecta Federal Credit Union - Manhattan Beach, CA</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>   
            </div>
        </ThemeProvider>
        
    );
}

export default Work;
