import { FunctionComponent } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

type What3WordsInputProps = {
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        what3WordsInput: {
        },
    }),
);

const What3WordsInput: FunctionComponent<What3WordsInputProps> = ({}: What3WordsInputProps) => {
    const classes = useStyles();

    return <div className={classes.what3WordsInput}>
    </div>;
}

export default What3WordsInput;