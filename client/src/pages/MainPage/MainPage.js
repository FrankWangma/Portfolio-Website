import React, {useState} from "react";
import { Typography, Grid, Fade } from "@material-ui/core";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ProjectSlider from "../../components/ProjectSlider"
import styles from "./MainPage.module.css";

const SLIDE_INFO = [
    { backgroundColor: '#ff7c7c', title: 'Slide 1' },
    { backgroundColor: '#ffb6b9', title: 'Slide 2' },
    { backgroundColor: '#8deaff', title: 'Slide 3' },
    { backgroundColor: '#ffe084', title: 'Slide 4' },
    { backgroundColor: '#d9d9d9', title: 'Slide 5' },
];

const Arrow = (props) => {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <KeyboardArrowLeftIcon fontSize='large' /> : <KeyboardArrowRightIcon fontSize='large'/>;

    return <div className={styles.arrows} onClick={clickFunction}>{icon}</div>;
}

const MainPage = () => {
    const [index, setIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');

    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 250);
    };

    return(
        <div className={styles.MainPage}>
        <Grid container 
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item xs={12}>
                <Typography variant='h1'>
                Frank Wang Ma
                </Typography>
                <Typography variant='h2' >
                    Software Engineer
                </Typography>
            </Grid>
            <Grid container xs={12} alignItems = "center" >
                <Grid item xs={3}>
                    <Arrow 
                        direction='left'
                        clickFunction={() => onArrowClick('left')}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Fade in={slideIn}>
                        <div>
                            <ProjectSlider content={content}/>  
                        </div>
                    </Fade>
                </Grid>
                <Grid item xs={3}>
                    <Arrow 
                        direction='right'
                        clickFunction={() => onArrowClick('right')}
                    />
                </Grid>
            </Grid>
        </Grid>
    </div>
    );
};

export default MainPage;
