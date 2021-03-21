import { FunctionComponent } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

type What3WordsTextFieldProps = {
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        what3WordsInput: {
        },
    }),
);

const What3WordsTextField: FunctionComponent<What3WordsTextFieldProps> = ({ }: What3WordsTextFieldProps) => {
    const classes = useStyles();

    return <div className={classes.what3WordsInput}>
        <TextField color="secondary" label="what3words" />
    </div>;
}

export default What3WordsTextField;